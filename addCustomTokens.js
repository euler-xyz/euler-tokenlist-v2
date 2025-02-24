const fs = require("fs")
const path = require("path")

async function addCustomTokens(config) {
  const tokenListPath = path.join(__dirname, "token-list.json")
  const tokenList = JSON.parse(fs.readFileSync(tokenListPath, "utf8"))

  // Create a map of existing tokens by addressInfo
  const tokenMap = new Map(
    tokenList.map((token) => [token.addressInfo.toLowerCase(), token]),
  )

  const addedTokens = []

  // Add or override tokens from hardcodedTokens
  config.hardcodedTokens.forEach((hardcodedToken) => {
    const lowerCaseAddress = hardcodedToken.addressInfo.toLowerCase()
    if (!tokenMap.has(lowerCaseAddress)) {
      addedTokens.push(lowerCaseAddress)
    }
    tokenMap.set(lowerCaseAddress, hardcodedToken)
  })

  const updatedTokenList = Array.from(tokenMap.values())
  fs.writeFileSync(tokenListPath, JSON.stringify(updatedTokenList, null, 2))

  console.log(
    `Custom tokens added successfully. Added addresses: ${addedTokens.join(
      ", ",
    )}`,
  )
}

module.exports = addCustomTokens
