module.exports = {
  name: "arbitrum",
  chainId: 42161,
  csvUrl:
    "https://raw.githubusercontent.com/euler-xyz/euler-interfaces/master/addresses/42161/OracleAdaptersAddresses.csv",
  imageOverrides: {},
  // Tokens that exist in CoinGecko API but not in the CSV
  extraAddresses: [],
  // Tokens that exist in the CSV but not in CoinGecko API
  hardcodedTokens: [
    {
      addressInfo: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
      chainId: 42161,
      decimals: 18,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
      name: "Dai Stablecoin",
      symbol: "DAI",
    },
    {
      addressInfo: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      chainId: 42161,
      decimals: 18,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
      name: "Wrapped Ether",
      symbol: "WETH",
    },
    {
      addressInfo: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      chainId: 42161,
      decimals: 6,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
      name: "USDCoin",
      symbol: "USDC",
    },
    {
      addressInfo: "0xEa3DD1a16f331fcd9B46Eb54C5b5AdcDb228FD84",
      chainId: 42161,
      decimals: 6,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
      name: "MockUSDCoin",
      symbol: "MUSDC",
    },
    {
      addressInfo: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
      chainId: 42161,
      decimals: 8,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png",
      name: "Wrapped BTC",
      symbol: "WBTC",
    },
    {
      addressInfo: "0x5979D7b546E38E414F7E9822514be443A4800529",
      chainId: 42161,
      name: "WrappedliquidstakedEther2.0",
      symbol: "wstETH",
      decimals: 18,
      logoURI:
        "https://tokens.1inch.io/0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0.png",
    },
    {
      addressInfo: "0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0",
      chainId: 42161,
      decimals: 18,
      logoURI:
        "https://assets.coingecko.com/coins/images/12504/standard/uni.jpg?1696512319",
      name: "Uniswap",
      symbol: "UNI",
    },
    {
      addressInfo: "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4",
      chainId: 42161,
      decimals: 18,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png",
      name: "Chainlink Token",
      symbol: "LINK",
    },
    {
      addressInfo: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
      chainId: 42161,
      decimals: 6,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
      name: "Tether USD",
      symbol: "USDT",
    },
    {
      addressInfo: "0x912CE59144191C1204E64559FE8253a0e49E6548",
      chainId: 42161,
      decimals: 18,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0x912CE59144191C1204E64559FE8253a0e49E6548/logo.png",
      name: "Arbitrum",
      symbol: "ARB",
    },
    {
      addressInfo: "0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978",
      chainId: 42161,
      decimals: 18,
      logoURI: "https://arbiscan.io//token/images/Curvefi_32.png",
      name: "Curve DAO Token",
      symbol: "CRV",
    },
    {
      addressInfo: "0x22e9ad26ea0e65a7073571d5d7172ff6336084ad",
      chainId: 42161,
      decimals: 18,
      logoURI:
        "https://assets.coingecko.com/coins/images/28477/large/uniETH_200.png?1696527471",
      name: "PT Bedrock uniETH 26DEC2024",
      symbol: "PT-uniETH-26DEC2024",
      meta: {
        isPendlePT: true,
        pendleMarket: "0x279b44e48226d40ec389129061cb0b56c5c09e46",
      },
    },
  ],
  apyProviders: [],
}
