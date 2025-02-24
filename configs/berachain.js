module.exports = {
  name: "berachain",
  chainId: 80094,
  csvUrl:
    "https://raw.githubusercontent.com/euler-xyz/euler-interfaces/master/addresses/80094/OracleAdaptersAddresses.csv",
  imageOverrides: {},
  // Tokens that exist in CoinGecko API but not in the CSV
  extraAddresses: [],
  // Tokens that exist in the CSV but not in CoinGecko API
  hardcodedTokens: [
    {
      chainId: 80094,
      addressInfo: "0x6969696969696969696969696969696969696969",
      symbol: "WBERA",
      name: "Wrapped Berachain Token",
      decimals: 18,
      logoURI:
        "https://res.cloudinary.com/duv0g402y/raw/upload/v1717773645/src/assets/wbera.png",
    },
    {
      chainId: 80094,
      addressInfo: "0x656b95E550C07a9ffe548bd4085c72418Ceb1dba",
      symbol: "BGT",
      name: "Bera Governance Token",
      decimals: 18,
      logoURI:
        "https://res.cloudinary.com/duv0g402y/raw/upload/v1717773645/src/assets/bgt.png",
    },
    {
      chainId: 80094,
      addressInfo: "0xFCBD14DC51f0A4d49d5E53C2E0950e0bC26d0Dce",
      symbol: "HONEY",
      name: "Honey",
      decimals: 18,
      logoURI:
        "https://res.cloudinary.com/duv0g402y/raw/upload/v1717773645/src/assets/honey.png",
    },
    {
      chainId: 80094,
      addressInfo: "0x688e72142674041f8f6Af4c808a4045cA1D6aC82",
      symbol: "BYUSD",
      name: "BYUSD",
      logoURI:
        "https://res.cloudinary.com/duv0g402y/image/upload/v1738732576/tokens/y6wa21vehnappbe2cruf.png",
      decimals: 6,
    },
    {
      chainId: 80094,
      addressInfo: "0x549943e04f40284185054145c6E4e9568C1D3241",
      symbol: "USDC.e",
      name: "Bridged USDC (Stargate)",
      decimals: 6,
      logoURI:
        "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389",
    },
    {
      chainId: 80094,
      addressInfo: "0x779Ded0c9e1022225f8E0630b35a9b54bE713736",
      symbol: "USDT0",
      name: "Tether USD Coin",
      decimals: 6,
      logoURI:
        "https://assets.coingecko.com/coins/images/325/small/Tether.png?1696501661",
    },
    {
      chainId: 80094,
      addressInfo: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
      symbol: "WBTC",
      name: "WBTC",
      decimals: 8,
      logoURI:
        "https://res.cloudinary.com/duv0g402y/raw/upload/v1717773645/src/assets/btc.png",
    },
    {
      chainId: 80094,
      addressInfo: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590",
      symbol: "WETH",
      name: "WETH",
      decimals: 18,
      logoURI:
        "https://res.cloudinary.com/duv0g402y/raw/upload/v1717773645/src/assets/eth.png",
    },
    {
      chainId: 80094,
      addressInfo: "0x9b6761bf2397Bb5a6624a856cC84A3A14Dcd3fe5",
      decimals: 18,
      logoURI:
        "https://res.cloudinary.com/duv0g402y/image/upload/v1738837562/tokens/feeqqlxk3wq4lp0rym34.png",
      symbol: "iBERA",
      name: "iBERA",
    },
    {
      chainId: 80094,
      addressInfo: "0xac03CABA51e17c86c921E1f6CBFBdC91F8BB2E6b",
      decimals: 18,
      logoURI:
        "https://res.cloudinary.com/duv0g402y/image/upload/v1738837560/tokens/iaynouqgjmryrzl0wcvx.png",
      symbol: "iBGT",
      name: "iBGT",
    },
    {
      chainId: 80094,
      addressInfo: "0x6d4223dae2a8744a85a6d44e97f3f61679f87ee6",
      decimals: 18,
      logoURI:
        "https://res.cloudinary.com/duv0g402y/image/upload/v1739455325/tokens/luha7bssovccqq4jigdh.png",
      symbol: "USDbr",
      name: "USDbr",
    },
    {
      chainId: 80094,
      addressInfo: "0xfaf4c16847bd0ebac546c49a9c9c6b81abd4b08c",
      decimals: 18,
      logoURI:
        "https://res.cloudinary.com/duv0g402y/image/upload/v1739455320/tokens/yxqyrtpt4x6ldudyxktd.png",
      symbol: "NOME",
      name: "NOME",
    },
    {
      chainId: 80094,
      addressInfo: "0xDAd7898717AdE066E1114E6bdbFaFd8A6F378B7b",
      symbol: "AZT",
      name: "AZEx Token",
      decimals: 18,
      logoURI:
        "https://raw.githubusercontent.com/berachain/metadata/refs/heads/main/src/assets/tokens/0xDAd7898717AdE066E1114E6bdbFaFd8A6F378B7b.png",
    },
    {
      chainId: 80094,
      addressInfo: "0x6ff4d64976428025cdcc3354ef53b5d19637481e",
      symbol: "ARTIO",
      name: "Artio",
      decimals: 18,
      logoURI:
        "https://raw.githubusercontent.com/berachain/metadata/refs/heads/main/src/assets/tokens/0x6ff4d64976428025cdcc3354ef53b5d19637481e.jpg",
    },
  ],
  apyProviders: [],
}
