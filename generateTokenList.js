require("dotenv").config()
const overrideTokenImages = require("./overrideTokenImages")
const addPoolIds = require("./addPoolIds")
const addCustomTokens = require("./addCustomTokens")
const axios = require("axios")
const fs = require("fs").promises
const csv = require("csv-parser")
const configs = require("./configs")

const COIN_GECKO_API_KEY = process.env.COIN_GECKO_API_KEY

if (!COIN_GECKO_API_KEY) {
  throw new Error("COIN_GECKO_API_KEY is not set in the environment variables")
}

async function fetchCSV(url) {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error("[fetchCSV] :", url, " Error:", error.message)
    return []
  }
}

async function parseCSV(csvString) {
  return new Promise((resolve, reject) => {
    const results = []
    const parser = csv()
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (error) => reject(error))

    parser.write(csvString)
    parser.end()
  })
}

async function wait(ms, updateInterval = 15000) {
  const startTime = Date.now()
  const endTime = startTime + ms

  while (Date.now() < endTime) {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.min(updateInterval, endTime - Date.now())),
    )
    const remainingSeconds = Math.ceil((endTime - Date.now()) / 1000)
    console.log(`Waiting... ${remainingSeconds} seconds remaining`)
  }
}

async function getTokenInfo(address) {
  const options = {
    method: "GET",
    url: `https://pro-api.coingecko.com/api/v3/coins/ethereum/contract/${address}`,
    headers: {
      accept: "application/json",
      "x-cg-pro-api-key": COIN_GECKO_API_KEY,
    },
  }

  while (true) {
    try {
      const response = await axios.request(options)
      const data = response.data

      console.log(`Successfully fetched data for address ${address}`)

      return {
        addressInfo: address,
        chainId: 1,
        name: data.name,
        symbol: data.symbol.toUpperCase(),
        decimals: data.detail_platforms.ethereum.decimal_place || 18,
        logoURI: data.image.large,
      }
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.log(
          `Rate limit reached for address ${address}. Waiting for 30 seconds before retrying...`,
        )
        await wait(30000)
      } else if (error.response && error.response.status === 404) {
        console.error(`Token not found for address ${address} (404 error)`)
        return { status: 404 }
      } else {
        console.error(
          `Error fetching data for address ${address}:`,
          error.message,
        )
        console.error("Request details:", {
          url: options.url,
          method: options.method,
          headers: options.headers,
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
        })
        return null
      }
    }
  }
}

async function generateTokenList(config) {
  const csvString = await fetchCSV(config.csvUrl)
  const csvData = await parseCSV(csvString)

  const totalTokens = csvData.length
  const baseTokenAddresses = [
    ...new Set([
      ...csvData
        .filter((row) => row.Whitelist === "Yes")
        .map((row) => row.Base.toLowerCase()),
      ...config.extraAddresses.map((address) => address.toLowerCase()),
    ]),
  ]

  console.log(`Total tokens in CSV: ${totalTokens}`)
  console.log(`Extra tokens: ${config.extraAddresses.length}`)
  console.log(
    `Unique whitelisted base addresses found: ${baseTokenAddresses.length}`,
  )

  // if (baseTokenAddresses.length === 0) {
  //   throw new Error(
  //     "No valid base token addresses found in the CSV file or extra tokens list.",
  //   )
  // }

  const tokenList = []
  const processedAddresses = new Set()
  const notFoundAddresses = []

  let addedTokens = 0

  for (const address of baseTokenAddresses) {
    if (!processedAddresses.has(address)) {
      processedAddresses.add(address)
      const tokenInfo = await getTokenInfo(address)
      if (tokenInfo && tokenInfo.status !== 404) {
        tokenList.push(tokenInfo)
        addedTokens++
      } else if (tokenInfo && tokenInfo.status === 404) {
        notFoundAddresses.push(address)
      }
    }
  }

  return { tokenList, addedTokens, notFoundAddresses }
}

async function main() {
  try {
    // Get available configs from configs/index.js
    const availableChains = Object.keys(configs)

    // Prompt user to select chain
    console.log("Available chains:")
    availableChains.forEach((chainId, index) => {
      console.log(`${index + 1}. Chain ID ${chainId}`)
    })

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    const answer = await new Promise((resolve) => {
      readline.question("Select chain (enter number): ", resolve)
    })
    readline.close()

    const selectedIndex = parseInt(answer) - 1
    if (selectedIndex < 0 || selectedIndex >= availableChains.length) {
      throw new Error("Invalid selection")
    }

    const selectedChainId = availableChains[selectedIndex]
    const config = configs[selectedChainId]

    // print the config file name we are using
    console.log("Using config:", config.name)

    console.log(`Generating token list for chain ID ${selectedChainId}...`)
    const { tokenList, addedTokens, notFoundAddresses } =
      await generateTokenList(config)

    await fs.writeFile("token-list.json", JSON.stringify(tokenList, null, 2))
    // Get chain name from config
    console.log("Token list generated successfully.")
    console.log(`Tokens added: ${addedTokens}`)
    console.log(
      `Tokens that returned a 404 error (${
        notFoundAddresses.length
      }): ${notFoundAddresses.join(", ")}`,
    )
    await overrideTokenImages(config)
    await addCustomTokens(config)
    await addPoolIds(config)

    const name = config.name.toLowerCase()
    const chainId = config.chainId
    await fs.rename(
      "token-list.json",
      `./tokenLists/${name}TokenList_${chainId}.json`,
    )
  } catch (error) {
    console.error("An error occurred:", error.message)
  }
}

main()
