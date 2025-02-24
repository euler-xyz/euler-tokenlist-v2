const fs = require("fs").promises
const viem = require("viem")
// const config = require("./config")

async function addPoolIds(config) {
  try {
    // Read the generated token list
    const tokenListRaw = await fs.readFile("token-list.json", "utf-8")
    const tokenList = JSON.parse(tokenListRaw)

    let overridesCount = 0

    const apyProviders = new Map(
      config?.apyProviders?.map(([address, data]) => [
        viem.getAddress(address),
        data,
      ]) || [],
    )

    const updatedTokenList = tokenList.map((token) => {
      const meta = token.meta || {}
      // Force correct format
      token.addressInfo = viem.getAddress(token.addressInfo)

      const providerOverride = apyProviders?.get(token.addressInfo)
      if (providerOverride) {
        overridesCount++
        meta.provider = providerOverride.provider
        meta.poolId = providerOverride.poolId

        if (providerOverride?.doesNotAutoCompound !== undefined) {
          meta.doesNotAutoCompound = providerOverride.doesNotAutoCompound
        }
      }

      return {
        ...token,
        meta,
      }
    })

    // Write the updated token list back to the file
    await fs.writeFile(
      "token-list.json",
      JSON.stringify(updatedTokenList, null, 2),
    )

    if (overridesCount > 0) {
      console.log(
        `Token pool ids overridden successfully. ${overridesCount} overrides applied.`,
      )
    } else {
      console.log("No token pool ids overrides were applied.")
    }
  } catch (error) {
    console.error(
      "An error occurred while processing token pool ids:",
      error.message,
    )
  }
}

module.exports = addPoolIds
