module.exports = {
  name: "ethereum",
  chainId: 1,
  csvUrl:
    "https://raw.githubusercontent.com/euler-xyz/euler-interfaces/master/addresses/1/OracleAdaptersAddresses.csv",
  imageOverrides: Object.fromEntries(
    Object.entries({
      // WETH
      "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2":
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
      // USDT
      "0xdAC17F958D2ee523a2206206994597C13D831ec7":
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
    }).map(([key, value]) => [key.toLowerCase(), value]),
  ),
  // Tokens that exist in CoinGecko API but not in the CSV
  extraAddresses: [
    "0x00000000eFE302BEAA2b3e6e1b18d08D69a9012a", // AUSD
    "0xdd629e5241cbc5919847783e6c96b2de4754e438", // mTBILL
    "0x62D0A8458eD7719FDAF978fe5929C6D342B0bFcE", // BEAM
    "0x66a1e37c9b0eaddca17d3662d6c05f4decf3e110", // USR
    "0x1202f5c7b4b9e47a1a484e8b270be34dbbc75055", // wstUSR
    "0x0655977FEb2f289A4aB78af67BAB0d17aAb84367", // SCRVUSD
    "0x657d9ABA1DBb59e53f9F3eCAA878447dCfC96dCb", // YNETHX
    "0x8238884ec9668ef77b90c6dff4d1a9f4f4823bfe", // USDO
    "0xaD55aebc9b8c03FC43cd9f62260391c13c23e7c0", // cUSDO
  ],
  // Tokens that exist in the CSV but not in CoinGecko API
  hardcodedTokens: [
    {
      addressInfo: "0x4342B77fE3417Bcb09d0A4383301b0DC733C755B",
      chainId: 1,
      name: "Swaap USDC-WETH Safeguard",
      symbol: "s-USDC-WETH-Sa",
      decimals: 18,
      logoURI: "/tokens/1/swaap.jpg",
    },
    {
      addressInfo: "0x315a892a4d02c5c1169d5F0e4f7Cb4130Cc0d138",
      chainId: 1,
      name: "Swaap WETH-USDT Safeguard",
      symbol: "s-WETH-USDT-Sa",
      decimals: 18,
      logoURI: "/tokens/1/swaap.jpg",
    },
    {
      addressInfo: "0xf5Ca5a74c6F9fc23880865D8702EaEda6e1f38b1",
      chainId: 1,
      name: "Swaap wstETH-WETH Safeguard",
      symbol: "s-wstETH-WETH-Sa",
      decimals: 18,
      logoURI: "/tokens/1/swaap.jpg",
    },
    {
      addressInfo: "0xaC4E8D8B3a48C3451d4d0E4a84e6E5Ac52579D05",
      chainId: 1,
      name: "Swaap USDC-USDT Safeguard",
      symbol: "s-USDC-USDT-Sa",
      decimals: 18,
      logoURI: "/tokens/1/swaap.jpg",
    },
    {
      addressInfo: "0xd9Fcd98c322942075A5C3860693e9f4f03AAE07b",
      chainId: 1,
      name: "EUL",
      symbol: "EUL",
      decimals: 18,
      logoURI:
        "https://raw.githubusercontent.com/AngleProtocol/angle-token-list/main/src/assets/tokens/EUL.svg",
      meta: {},
    },
    {
      addressInfo: "0xf3e621395fc714b90da337aa9108771597b4e696",
      chainId: 1,
      name: "Reward EUL",
      symbol: "rEUL",
      decimals: 18,
      logoURI:
        "https://raw.githubusercontent.com/AngleProtocol/angle-token-list/main/src/assets/tokens/EUL.svg",
    },
    {
      addressInfo: "0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf",
      chainId: 1,
      name: "Coinbase Wrapped BTC",
      symbol: "cbBTC",
      decimals: 8,
      logoURI:
        "https://coin-images.coingecko.com/coins/images/40143/large/cbbtc.webp?1726136727",
    },
    {
      addressInfo: "0x64047dd3288276d70a4f8b5df54668c8403f877f",
      chainId: 1,
      name: "Amphor Restaked BTC",
      symbol: "amphrBTC",
      decimals: 18,
      logoURI: "https://app.amphor.io/_next/static/media/amphrBTC.130f98c0.svg",
    },
    {
      addressInfo: "0x5fD13359Ba15A84B76f7F87568309040176167cd",
      chainId: 1,
      name: "Amphor Restaked ETH",
      symbol: "amphrETH",
      decimals: 18,
      logoURI:
        "https://raw.githubusercontent.com/balancer/tokenlists/c52e53a7599932b9063c6dc4383fbedc8e3e8ae8/src/assets/images/tokens/0x5fd13359ba15a84b76f7f87568309040176167cd.png",
    },
    {
      addressInfo: "0x7a4EffD87C2f3C55CA251080b1343b605f327E3a",
      chainId: 1,
      name: "Restaking Vault ETH",
      symbol: "rstETH",
      decimals: 18,
      logoURI:
        "https://raw.githubusercontent.com/balancer/tokenlists/c52e53a7599932b9063c6dc4383fbedc8e3e8ae8/src/assets/images/tokens/0x7a4effd87c2f3c55ca251080b1343b605f327e3a.png",
    },
    {
      addressInfo: "0xa3931d71877C0E7a3148CB7Eb4463524FEc27fbD",
      chainId: 1,
      name: "sUSDS",
      symbol: "sUSDS",
      decimals: 18,
      logoURI:
        "https://raw.githubusercontent.com/marsfoundation/spark-docs/9b2ece7f8d6d1575549a88bb78654fe68707156f/.gitbook/assets/sUSDS-Coin.svg",
    },
    {
      addressInfo: "0x437cc33344a0B27A429f795ff6B469C72698B291",
      chainId: 1,
      name: "wM",
      symbol: "wM",
      decimals: 6,
      logoURI: "/tokens/1/0x437cc33344a0B27A429f795ff6B469C72698B291.svg",
    },
    {
      addressInfo: "0x8292Bb45bf1Ee4d140127049757C2E0fF06317eD",
      chainId: 1,
      name: "RLUSD",
      symbol: "RLUSD",
      decimals: 18,
      logoURI: "/tokens/1/0x8292Bb45bf1Ee4d140127049757C2E0fF06317eD.png",
    },
    {
      addressInfo: "0x7751E2F4b8ae93EF6B79d86419d42FE3295A4559",
      chainId: 1,
      name: "Wrapped USDL",
      symbol: "wUSDL",
      decimals: 18,
      logoURI: "/tokens/1/0x7751E2F4b8ae93EF6B79d86419d42FE3295A4559.png",
    },
    {
      addressInfo: "0x2a8c22E3b10036f3AEF5875d04f8441d4188b656",
      chainId: 1,
      name: "Midas mBASIS",
      symbol: "mBASIS",
      decimals: 18,
      logoURI: "/tokens/1/0x2a8c22E3b10036f3AEF5875d04f8441d4188b656.png",
    },
    {
      addressInfo: "0x45054c6753b4Bce40C5d54418DabC20b070F85bE",
      chainId: 1,
      name: "IdleCDO AA Tranche - idle_Fasanara",
      symbol: "AA_idle_Fasanara",
      decimals: 18,
      logoURI: "/tokens/1/0x45054c6753b4Bce40C5d54418DabC20b070F85bE.svg",
    },
    {
      addressInfo: "0x4956b52aE2fF65D74CA2d61207523288e4528f96",
      chainId: 1,
      name: "Resolv Liquidity Provider Token",
      symbol: "RLP",
      decimals: 18,
      logoURI: "/tokens/1/0x4956b52aE2fF65D74CA2d61207523288e4528f96.webp",
      meta: {
        poolId: "2ad8497d-c855-4840-85ad-cdc536b92ced",
      },
    },
    {
      addressInfo: "0x3eE841F47947FEFbE510366E4bbb49e145484195",
      chainId: 1,
      name: "Curve USR/USDC",
      symbol: "USRUSDC-Curve-LP",
      decimals: 18,
      logoURI:
        "https://coin-images.coingecko.com/coins/images/40008/large/USR_LOGO.png?1725222638",
      meta: {
        poolId: "6258d8cc-e618-4165-9385-7775168369b2",
      },
    },
    {
      addressInfo: "0x90455bd11Ce8a67C57d467e634Dc142b8e4105Aa",
      chainId: 1,
      name: "Curve cUSDO/USDC",
      symbol: "cUSDOUSDC-Curve-LP",
      decimals: 18,
      logoURI:
        "https://coin-images.coingecko.com/coins/images/53751/large/cUSDO_logo_white.png?1737182014",
      meta: {
        poolId: "08d1f13b-5d65-42c5-863d-fcb447dcea75",
      },
    },
    // Pendle tokens
    {
      addressInfo: "0xE00bd3Df25fb187d6ABBB620b3dfd19839947b81",
      chainId: 1,
      name: "PT Ethena sUSDE 27MAR2025",
      symbol: "PT-sUSDE-27MAR2025",
      decimals: 18,
      logoURI:
        "https://assets.coingecko.com/coins/images/33669/large/sUSDe-Symbol-Color.png?1716307680",
      meta: {
        isPendlePT: true,
        pendleMarket: "0xcdd26eb5eb2ce0f203a84553853667ae69ca29ce",
      },
    },
    {
      addressInfo: "0xEe9085fC268F6727d5D4293dBABccF901ffDCC29",
      chainId: 1,
      name: "PT Ethena sUSDE 26DEC2024",
      symbol: "PT-sUSDE-26DEC2024",
      decimals: 18,
      logoURI:
        "https://assets.coingecko.com/coins/images/33669/large/sUSDe-Symbol-Color.png?1716307680",
      meta: {
        isPendlePT: true,
        pendleMarket: "0xa0ab94debb3cc9a7ea77f3205ba4ab23276fed08",
      },
    },
    {
      addressInfo: "0xAE5099C39f023C91d3dd55244CAFB36225B0850E",
      chainId: 1,
      name: "PT Ethena sUSDE 24OCT2024",
      symbol: "PT-sUSDE-24OCT2024",
      decimals: 18,
      logoURI:
        "https://assets.coingecko.com/coins/images/33669/large/sUSDe-Symbol-Color.png?1716307680",
      meta: {
        isPendlePT: true,
        pendleMarket: "0xbbf399db59a845066aafce9ae55e68c505fa97b7",
      },
    },
    {
      addressInfo: "0xec5a52c685cc3ad79a6a347abace330d69e0b1ed",
      chainId: 1,
      name: "PT Lombard LBTC 27MAR2025",
      symbol: "PT-LBTC-27MAR2025",
      decimals: 8,
      logoURI:
        "https://coin-images.coingecko.com/coins/images/39969/large/LBTC_Logo.png?1724959872",
      meta: {
        isPendlePT: true,
        pendleMarket: "0x70b70ac0445c3ef04e314dfda6caafd825428221",
      },
    },
    {
      addressInfo: "0xB997B3418935A1Df0F914Ee901ec83927c1509A0",
      chainId: 1,
      name: "PT ether.fi eBTC 26DEC2024",
      symbol: "PT-EBTC-26DEC2024",
      decimals: 8,
      logoURI: "/tokens/1/0xB997B3418935A1Df0F914Ee901ec83927c1509A0.svg",
      meta: {
        isPendlePT: true,
        pendleMarket: "0x36d3ca43ae7939645c306e26603ce16e39a89192",
      },
    },
    {
      addressInfo: "0x332A8ee60EdFf0a11CF3994b1b846BBC27d3DcD6",
      chainId: 1,
      name: "PT Corn Lombard LBTC 26DEC2024",
      symbol: "PT-cornLBTC-26DEC2024",
      decimals: 8,
      logoURI: "/tokens/1/0x332A8ee60EdFf0a11CF3994b1b846BBC27d3DcD6.svg",
      meta: {
        isPendlePT: true,
        pendleMarket: "0xCaE62858DB831272A03768f5844cbe1B40bB381f",
      },
    },
    {
      addressInfo: "0x44A7876cA99460ef3218bf08b5f52E2dbE199566",
      chainId: 1,
      name: "PT Corn ether.fi eBTC 27MAR2025",
      symbol: "PT-corn-eBTC-27MAR2025",
      decimals: 8,
      logoURI: "/tokens/1/0x44A7876cA99460ef3218bf08b5f52E2dbE199566.svg",
      meta: {
        isPendlePT: true,
        pendleMarket: "0x2C71Ead7ac9AE53D05F8664e77031d4F9ebA064B",
      },
    },
    {
      addressInfo: "0x997Ec6Bf18a30Ef01ed8D9c90718C7726a213527",
      chainId: 1,
      name: "PT pumpBTC 27MAR2025",
      symbol: "PT-pumpBTC-27MAR2025",
      decimals: 8,
      logoURI: "/tokens/1/0x997Ec6Bf18a30Ef01ed8D9c90718C7726a213527.svg",
      meta: {
        isPendlePT: true,
        pendleMarket: "0xf8208fb52ba80075af09840a683143c22dc5b4dd",
      },
    },
    {
      addressInfo: "0xa76f0C6e5f286bFF151b891d2A0245077F1Ad74c",
      chainId: 1,
      name: "PT Corn pumpBTC 26DEC2024",
      symbol: "PT-corn-pumpBTC-26DEC2024",
      decimals: 8,
      logoURI: "/tokens/1/0xa76f0C6e5f286bFF151b891d2A0245077F1Ad74c.svg",
      meta: {
        isPendlePT: true,
        pendleMarket: "0xf8208fb52ba80075af09840a683143c22dc5b4dd",
      },
    },
    {
      addressInfo: "0x23e479ddcda990E8523494895759bD98cD2fDBF6",
      chainId: 1,
      name: "PT Corn SolvBTC Babylon 26DEC2024",
      symbol: "PT-corn-SolvBTC.BBN-26DEC2024",
      decimals: 8,
      logoURI: "/tokens/1/0x23e479ddcda990E8523494895759bD98cD2fDBF6.svg",
      meta: {
        isPendlePT: true,
        pendleMarket: "0xeb4d3057738b9ed930f451be473c1ccc42988384",
      },
    },
    {
      addressInfo: "0x61439b9575278054D69c9176d88FaFaf8319E4b7",
      chainId: 1,
      name: "PT USD0++ 30JAN2025",
      symbol: "PT-USD0++-30JAN2025",
      decimals: 18,
      logoURI: "/tokens/1/0x61439b9575278054D69c9176d88FaFaf8319E4b7.svg",
      meta: {
        isPendlePT: true,
        pendleMarket: "0x64506968e80c9ed07bff60c8d9d57474effff2c9",
      },
    },
    {
      addressInfo: "0x5BaE9a5D67d1CA5b09B14c91935f635CFBF3b685",
      chainId: 1,
      name: "PT USD0++ 27MAR2025",
      symbol: "PT-USD0++-27MAR2025",
      decimals: 18,
      logoURI: "/tokens/1/0x5BaE9a5D67d1CA5b09B14c91935f635CFBF3b685.svg",
      meta: {
        isPendlePT: true,
        pendleMarket: "0xafdc922d0059147486cc1f0f32e3a2354b0d35cc",
      },
    },
    {
      addressInfo: "0xf696FE29Ef85E892b5926313897D178288faA07e",
      chainId: 1,
      name: "PT USD0++ 26JUN2025",
      symbol: "PT-USD0++-26JUN2025",
      decimals: 18,
      logoURI: "/tokens/1/0xf696FE29Ef85E892b5926313897D178288faA07e.svg",
      meta: {
        isPendlePT: true,
        pendleMarket: "0x048680f64d6dff1748ba6d9a01f578433787e24b",
      },
    },
    {
      addressInfo: "0x7aa68E84bCD8d1B4C9e10B1e565DB993f68a3E09",
      chainId: 1,
      name: "PT Kelp Gain 26DEC2024",
      symbol: "PT-agETH-26DEC2024",
      decimals: 18,
      logoURI:
        "https://coin-images.coingecko.com/coins/images/39677/large/Icon___Dark.png?1723610897",
      meta: {
        isPendlePT: true,
        pendleMarket: "0x6010676bc2534652ad1ef5fa8073dcf9ad7ebfbe",
      },
    },
    {
      addressInfo: "0xB07b9fDd62DC478E521E8bDe3630a777725B0eB4",
      chainId: 1,
      name: "PT Kelp rsETH 26DEC2024",
      symbol: "PT-rsETH-26DEC2024",
      decimals: 18,
      logoURI:
        "https://coin-images.coingecko.com/coins/images/33800/large/Icon___Dark.png?1702991855",
      meta: {
        isPendlePT: true,
        pendleMarket: "0x84a50177a84dad50fdbf665dfbfb39914b52dff2",
      },
    },
    {
      addressInfo: "0xb7de5dFCb74d25c2f21841fbd6230355C50d9308",
      chainId: 1,
      name: "PT Ethena sUSDE 29MAY2025",
      symbol: "PT-sUSDE-29MAY2025",
      decimals: 18,
      logoURI:
        "https://assets.coingecko.com/coins/images/33669/large/sUSDe-Symbol-Color.png?1716307680",
      meta: {
        isPendlePT: true,
        pendleMarket: "0xb162b764044697cf03617c2efbcb1f42e31e4766",
      },
    },
    {
      addressInfo: "0x8A47b431A7D947c6a3ED6E42d501803615a97EAa",
      chainId: 1,
      name: "PT Ethena USDe 27MAR2025",
      symbol: "PT-USDe-27MAR2025",
      decimals: 18,
      logoURI:
        "https://assets.coingecko.com/coins/images/33669/large/sUSDe-Symbol-Color.png?1716307680",
      meta: {
        isPendlePT: true,
        pendleMarket: "0xb451a36c8b6b2eac77ad0737ba732818143a0e25",
      },
    },
    {
      addressInfo: "0xA8c8861b5ccF8CCe0ade6811CD2A7A7d3222B0B8",
      chainId: 1,
      name: "PT Wrapped stUSR 27MAR2025",
      symbol: "PT-wstUSR-27MAR2025",
      decimals: 18,
      logoURI:
        "https://coin-images.coingecko.com/coins/images/40008/large/USR_LOGO.png?1725222638",
      meta: {
        isPendlePT: true,
        pendleMarket: "0x353d0b2efb5b3a7987fb06d30ad6160522d08426",
      },
    },
  ],
  apyProviders: [
    // PZETH
    ["0x8c9532a60e0e7c6bbd2b2c1303f63ace1c3e9811", { provider: "RENZO" }],
    // sUSDS
    ["0xa3931d71877C0E7a3148CB7Eb4463524FEc27fbD", { provider: "SUSDS" }],
    // SUSDE
    ["0x9d39a5de30e57443bff2a8307a4256c8797a3497", { provider: "SUSDE" }],
    // MTBILL
    ["0xdd629e5241cbc5919847783e6c96b2de4754e438", { provider: "MIDAS" }],
    // MBTC
    ["0x007115416ab6c266329a03b09a8aa39ac2ef7d9d", { provider: "MIDAS" }],
    // mBASIS
    ["0x2a8c22E3b10036f3AEF5875d04f8441d4188b656", { provider: "MIDAS" }],
    // USDL
    ["0xbdc7c08592ee4aa51d06c27ee23d5087d65adbcd", { provider: "USDL" }],
    // WUSDL
    ["0x7751E2F4b8ae93EF6B79d86419d42FE3295A4559", { provider: "USDL" }],
    // WEETH
    [
      "0xcd5fe23c85820f7b72d0926fc9b05b43e359b7ee",
      {
        provider: "DEFILLAMA",
        poolId: "46bd2bdf-6d92-4066-b482-e885ee172264",
      },
    ],
    // RSETH
    [
      "0xa1290d69c65a6fe4df752f95823fae25cb99e5a7",
      { provider: "DEFILLAMA", poolId: "33c732f6-a78d-41da-af5b-ccd9fa5e52d5" },
    ],
    // SDAI
    [
      "0x83f20f44975d03b1b09e64809b757c47f942beea",
      { provider: "DEFILLAMA", poolId: "c8a24fee-ec00-4f38-86c0-9f6daebc4225" },
    ],
    // APXETH
    [
      "0x9ba021b0a9b958b5e75ce9f6dff97c7ee52cb3e6",
      { provider: "DEFILLAMA", poolId: "acee1e4d-a73c-4e20-98f7-e87c13d446e4" },
    ],
    // ETH+
    [
      "0xe72b141df173b999ae7c1adcbf60cc9833ce56a8",
      { provider: "DEFILLAMA", poolId: "4e6cd326-72d5-4680-8d2f-3481d50e8bb1" },
    ],
    // STUSD
    [
      "0x0022228a2cc5e7ef0274a7baa600d44da5ab5776",
      { provider: "DEFILLAMA", poolId: "01e33a85-8bb6-4f30-a11b-7b2a8166e6b7" },
    ],
    // WSTETH
    [
      "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
      { provider: "DEFILLAMA", poolId: "747c1d2a-c668-4682-b9f9-296708a3dd90" },
    ],
    // WOETH
    [
      "0xdcee70654261af21c44c093c300ed3bb97b78192",
      { provider: "DEFILLAMA", poolId: "423681e3-4787-40ce-ae43-e9f67c5269b3" },
    ],
    // CBETH
    [
      "0xbe9895146f7af43049ca1c1ae358b0541ea49704",
      { provider: "DEFILLAMA", poolId: "0f45d730-b279-4629-8e11-ccb5cc3038b4" },
    ],
    // ETHX
    [
      "0xa35b1b31ce002fbf2058d22f30f95d405200a15b",
      { provider: "DEFILLAMA", poolId: "90bfb3c2-5d35-4959-a275-ba5085b08aa3" },
    ],
    // METH
    [
      "0xd5f7838f5c461feff7fe49ea5ebaf7728bb0adfa",
      { provider: "DEFILLAMA", poolId: "b9f2f00a-ba96-4589-a171-dde979a23d87" },
    ],
    // RETH
    [
      "0xae78736cd615f374d3085123a210448e74fc6393",
      { provider: "DEFILLAMA", poolId: "d4b3c522-6127-4b89-bedf-83641cdcd2eb" },
    ],
    // RSWETH
    [
      "0xfae103dc9cf190ed75350761e95403b7b8afa6c0",
      { provider: "DEFILLAMA", poolId: "eff9b43c-a80d-4bfc-9f9e-55e02a8ef619" },
    ],
    // SWETH
    [
      "0xf951e335afb289353dc249e82926178eac7ded78",
      { provider: "DEFILLAMA", poolId: "ca2acc2d-6246-44aa-ae91-8725b2c62c7c" },
    ],
    // FRXETH
    [
      "0x5e8422345238f34275888049021821e8e08caa1f",
      { provider: "DEFILLAMA", poolId: "77020688-e1f9-443c-9388-e51ace15cc32" },
    ],
    // PXETH
    [
      "0x04c154b66cb340f3ae24111cc767e0184ed00cc6",
      { provider: "DEFILLAMA", poolId: "acee1e4d-a73c-4e20-98f7-e87c13d446e4" },
    ],
    // OSETH
    [
      "0xf1c9acdc66974dfb6decb12aa385b9cd01190e38",
      { provider: "DEFILLAMA", poolId: "4d01599c-69ae-41a3-bae1-5fab896f04c8" },
    ],
    // OETH
    [
      "0x856c4efb76c1d1ae02e20ceb03a2a6a08b0b8dc3",
      { provider: "DEFILLAMA", poolId: "423681e3-4787-40ce-ae43-e9f67c5269b3" },
    ],
    // USD3
    [
      "0x0d86883faf4ffd7aeb116390af37746f45b6f378",
      { provider: "DEFILLAMA", poolId: "9c4e675e-7615-4d60-90ef-03d58c66b476" },
    ],
    // amphrETH
    [
      "0x5fD13359Ba15A84B76f7F87568309040176167cd",
      { provider: "DEFILLAMA", poolId: "747c1d2a-c668-4682-b9f9-296708a3dd90" },
    ],
    // rstETH
    [
      "0x7a4EffD87C2f3C55CA251080b1343b605f327E3a",
      { provider: "DEFILLAMA", poolId: "747c1d2a-c668-4682-b9f9-296708a3dd90" },
    ],
    // STEAKLRT
    [
      "0xbeef69ac7870777598a04b2bd4771c71212e6abc",
      { provider: "DEFILLAMA", poolId: "747c1d2a-c668-4682-b9f9-296708a3dd90" },
    ],
    // USD0++
    [
      "0x35d8949372d46b7a3d5a56006ae77b215fc69bc0",
      {
        provider: "DEFILLAMA",
        poolId: "55b0893b-1dbb-47fd-9912-5e439cd3d511",
        doesNotAutoCompound: true,
      },
    ],
    // wstUSR
    [
      "0x1202f5c7b4b9e47a1a484e8b270be34dbbc75055",
      { provider: "DEFILLAMA", poolId: "0aedb3f6-9298-49de-8bb0-2f611a4df784" },
    ],
    // ezETH
    [
      "0xbf5495efe5db9ce00f80364c8b423567e58d2110",
      { provider: "DEFILLAMA", poolId: "e28e32b5-e356-41d9-8dc7-a376ece56619" },
    ],
    // SCRVUSD
    [
      "0x0655977feb2f289a4ab78af67bab0d17aab84367",
      { provider: "DEFILLAMA", poolId: "5fd328af-4203-471b-bd16-1705c726d926" },
    ],
    // YNETH
    [
      "0x09db87A538BD693E9d08544577d5cCfAA6373A48",
      { provider: "DEFILLAMA", poolId: "44dd4153-aa9f-4616-9a88-e6803c86b995" },
    ],
    // YNETHX
    [
      "0x657d9ABA1DBb59e53f9F3eCAA878447dCfC96dCb",
      { provider: "DEFILLAMA", poolId: "e3c59895-d6ad-4634-b257-f599f1a1a4a0" },
    ],
  ],
}
