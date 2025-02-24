const fs = require("fs").promises

function overrideTokenImage(address, defaultLogoURI, config) {
  const override = config.imageOverrides[address.toLowerCase()]
  if (override) {
    console.log(`Overriding image for address ${address}`)
  }
  return override || defaultLogoURI
}

async function overrideTokenImages(config) {
  try {
    // Read the generated token list
    const tokenListRaw = await fs.readFile("token-list.json", "utf-8")
    const tokenList = JSON.parse(tokenListRaw)

    let overridesCount = 0

    // Override images
    const updatedTokenList = tokenList.map((token) => {
      const newLogoURI = overrideTokenImage(
        token.addressInfo.toLowerCase(),
        token.logoURI,
        config,
      )
      if (newLogoURI !== token.logoURI) {
        overridesCount++
      }
      return {
        ...token,
        logoURI: newLogoURI,
      }
    })

    // Write the updated token list back to the file
    await fs.writeFile(
      "token-list.json",
      JSON.stringify(updatedTokenList, null, 2),
    )

    if (overridesCount > 0) {
      console.log(
        `Token images overridden successfully. ${overridesCount} overrides applied.`,
      )
    } else {
      console.log("No token image overrides were applied.")
    }
  } catch (error) {
    console.error(
      "An error occurred while processing token images:",
      error.message,
    )
  }
}

module.exports = overrideTokenImages
