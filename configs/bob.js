module.exports = {
  name: "bob",
  chainId: 60808,
  csvUrl:
    "https://raw.githubusercontent.com/euler-xyz/euler-interfaces/master/addresses/60808/OracleAdaptersAddresses.csv",
  imageOverrides: {},
  // Tokens that exist in CoinGecko API but not in the CSV
  extraAddresses: [],
  // Tokens that exist in the CSV but not in CoinGecko API
  hardcodedTokens: [
    {
      addressInfo: "0xa669e059fdcbdfc532a2edd658eb2922799eedb8",
      chainId: 60808,
      name: "ALEX",
      symbol: "ALEX",
      decimals: 18,
      logoURI: "./tokens/alex.webp",
    },
    {
      addressInfo: "0xe75D0fB2C24A55cA1e3F96781a2bCC7bdba058F0",
      chainId: 60808,
      name: "USDC.e",
      symbol: "USDC.e",
      decimals: 6,
      logoURI: "./tokens/usdc.png",
    },
    {
      addressInfo: "0x6c851f501a3f24e29a8e39a29591cddf09369080",
      chainId: 60808,
      name: "DAI",
      symbol: "DAI",
      decimals: 18,
      logoURI: "./tokens/dai.svg",
    },
    {
      addressInfo: "0xf3107eEC1e6F067552C035FD87199e1A5169CB20",
      chainId: 60808,
      name: "eDLLR",
      symbol: "eDLLR",
      decimals: 18,
      logoURI: "./tokens/edllr.webp",
    },
    {
      addressInfo: "0x4200000000000000000000000000000000000006",
      chainId: 8453,
      decimals: 18,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
      name: "Wrapped Ether",
      symbol: "WETH",
    },
    {
      addressInfo: "0xc4a20a608616f18aa631316eeda9fb62d089361e",
      chainId: 8453,
      decimals: 18,
      name: "Frax",
      symbol: "FRAX",
      logoURI: "./tokens/frax.webp",
    },
    {
      addressInfo: "0x4124CBBDE250a1a4bF94740491E79AB6a2eC0321",
      chainId: 8453,
      decimals: 18,
      name: "Frax Ether",
      symbol: "frxETH",
      logoURI: "./tokens/frxETH.webp",
    },
    {
      addressInfo: "0x15e35b19ad29c512103eaabb55154ef0ee6ca661",
      chainId: 8453,
      decimals: 18,
      name: "Frax Share",
      symbol: "FXS",
      logoURI: "./tokens/fxs.webp",
    },
    {
      addressInfo: "0xc96de26018a54d51c097160568752c4e3bd6c364",
      chainId: 8453,
      decimals: 8,
      name: "Ignition FBTC",
      symbol: "FBTC",
      logoURI: "./tokens/fbtc.webp",
    },
    {
      addressInfo: "0xa45d4121b3d47719ff57a947a9d961539ba33204",
      chainId: 8453,
      decimals: 8,
      name: "Lombard Staked Bitcoin",
      symbol: "LBTC",
      logoURI: "./tokens/lbtc.webp",
    },
    {
      addressInfo: "0x1fcca65fb6ae3b2758b9b2b394cb227eae404e1e",
      chainId: 8453,
      decimals: 8,
      name: "pumpBTC",
      symbol: "pumpBTC",
      logoURI: "./tokens/pumpBTC.webp",
    },
    {
      addressInfo: "0xb5686c4f60904ec2bda6277d6fe1f7caa8d1b41a",
      chainId: 8453,
      decimals: 18,
      name: "Rocket Pool ETH",
      symbol: "rETH",
      logoURI: "./tokens/reth.webp",
    },
    {
      addressInfo: "0x541FD749419CA806a8bc7da8ac23D346f2dF8B77",
      chainId: 8453,
      decimals: 18,
      name: "Solv BTC",
      symbol: "SolvBTC",
      logoURI: "./tokens/solvBTC.webp",
    },
    {
      addressInfo: "0xCC0966D8418d412c599A6421b760a847eB169A8c",
      chainId: 8453,
      decimals: 18,
      name: "SolvBTC Babylon",
      symbol: "SolvBTC.BBN",
      logoURI: "./tokens/solvBTC_BBN.webp",
    },
    {
      addressInfo: "0x78Fea795cBFcC5fFD6Fb5B845a4f53d25C283bDB",
      chainId: 8453,
      decimals: 18,
      name: "Satoshi Stablecoin",
      symbol: "satUSD",
      logoURI: "./tokens/satUSD.webp",
    },
    {
      addressInfo: "0xba20a5e63eeEFfFA6fD365E7e540628F8fC61474",
      chainId: 8453,
      decimals: 18,
      name: "SOV",
      symbol: "SOV",
      logoURI: "./tokens/sov.webp",
    },
    {
      addressInfo: "0x96147a9ae9a42d7da551fd2322ca15b71032f342",
      chainId: 8453,
      decimals: 18,
      name: "StakeStone Ether",
      symbol: "STONE",
      logoURI: "./tokens/stone.png",
    },
    {
      addressInfo: "0xb7eae04b995b3b365040dee99795112add43afa0",
      chainId: 8453,
      decimals: 18,
      name: "Staked FRAX",
      symbol: "sFRAX",
      logoURI: "./tokens/sFRAX.webp",
    },
    {
      addressInfo: "0x249d2952d1c678843e7cd7bf654efcec52f2f9e8",
      chainId: 8453,
      decimals: 18,
      name: "Staked Frax Ether",
      symbol: "sfrxETH",
      logoURI: "./tokens/sfrxETH.webp",
    },
    {
      addressInfo: "0x05d032ac25d322df992303dca074ee7392c117b9",
      chainId: 8453,
      decimals: 6,
      name: "Tether USD",
      symbol: "USDT",
      logoURI: "./tokens/usdt.svg",
    },
    {
      addressInfo: "0xf7EF136751D7496021858c048FFA4f978C27831A",
      chainId: 8453,
      decimals: 18,
      name: "Threshold USD",
      symbol: "thUSD",
      logoURI: "./tokens/thUSD.webp",
    },
    {
      addressInfo: "0xBBa2eF945D523C4e2608C9E1214C2Cc64D4fc2e2",
      chainId: 8453,
      decimals: 18,
      name: "tBTC v2",
      symbol: "tBTC",
      logoURI: "./tokens/tBTC.webp",
    },
    {
      addressInfo: "0x236f8c0a61dA474dB21B693fB2ea7AAB0c803894",
      chainId: 8453,
      decimals: 8,
      name: "uniBTC",
      symbol: "uniBTC",
      logoURI: "./tokens/uniBTC.webp",
    },
    {
      addressInfo: "0x03c7054bcb39f7b2e5b2c7acb37583e32d70cfa3",
      chainId: 8453,
      decimals: 8,
      name: "Wrapped BTC",
      symbol: "WBTC",
      logoURI: "./tokens/WBTC.svg",
    },
    {
      addressInfo: "0x85008aE6198BC91aC0735CB5497CF125ddAAc528",
      chainId: 8453,
      decimals: 18,
      name: "Wrapped liquid staked Ether 2.0",
      symbol: "wstETH",
      logoURI: "./tokens/wstETH.webp",
    },
  ],
  apyProviders: [],
}
