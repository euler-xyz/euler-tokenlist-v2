module.exports = {
  name: "unichain",
  chainId: 130,
  csvUrl:
    "https://raw.githubusercontent.com/euler-xyz/euler-interfaces/master/addresses/130/OracleAdaptersAddresses.csv",
  imageOverrides: {},
  // Tokens that exist in CoinGecko API but not in the CSV
  extraAddresses: [],
  // Tokens that exist in the CSV but not in CoinGecko API
  hardcodedTokens: [
    {
      addressInfo: "0x4200000000000000000000000000000000000006",
      chainId: 130,
      name: "Wrapped Ether",
      symbol: "WETH",
      decimals: 18,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
    },
    {
      addressInfo: "0x078d782b760474a361dda0af3839290b0ef57ad6",
      chainId: 130,
      name: "USDC",
      symbol: "USDC",
      decimals: 6,
      logoURI: "/tokens/146/usdc.png",
    },
  ],
  apyProviders: [],
}
