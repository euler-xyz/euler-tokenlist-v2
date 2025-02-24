module.exports = {
  name: "base",
  chainId: 8453,
  csvUrl:
    "https://raw.githubusercontent.com/euler-xyz/euler-interfaces/master/addresses/8453/OracleAdaptersAddresses.csv",
  imageOverrides: {},
  // Tokens that exist in CoinGecko API but not in the CSV
  extraAddresses: [],
  // Tokens that exist in the CSV but not in CoinGecko API
  hardcodedTokens: [
    {
      addressInfo: "0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22",
      chainId: 8453,
      name: "Coinbase Wrapped Staked ETH",
      symbol: "cbETH",
      decimals: 18,
      logoURI: "/tokens/8453/cbeth.png",
    },
    {
      addressInfo: "0x4200000000000000000000000000000000000006",
      chainId: 8453,
      name: "Wrapped Ether",
      symbol: "WETH",
      decimals: 18,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
    },
    {
      addressInfo: "0x60a3e35cc302bfa44cb288bc5a4f316fdb1adb42",
      chainId: 8453,
      name: "EURC",
      symbol: "EURC",
      decimals: 6,
      logoURI: "/tokens/8453/eurc.png",
    },
    {
      addressInfo: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
      chainId: 8453,
      name: "USDC",
      symbol: "USDC",
      decimals: 6,
      logoURI: "/tokens/8453/usdc.png",
    },
    {
      addressInfo: "0xc1cba3fcea344f92d9239c08c0568f6f2f0ee452",
      chainId: 8453,
      name: "Wrapped liquid staked Ether 2.0",
      symbol: "wstETH",
      decimals: 18,
      logoURI: "/tokens/8453/wsteth.png",
    },
    {
      addressInfo: "0x04c0599ae5a44757c0af6f9ec3b93da8976c150a",
      chainId: 8453,
      name: "Wrapped eETH",
      symbol: "weETH",
      decimals: 18,
      logoURI:
        "https://coin-images.coingecko.com/coins/images/33033/large/weETH.png?1701438396",
    },
    {
      addressInfo: "0xecac9c5f704e954931349da37f60e39f515c11c1",
      chainId: 8453,
      name: "Lombard Staked Bitcoin",
      symbol: "LBTC",
      decimals: 8,
      logoURI:
        "https://coin-images.coingecko.com/coins/images/39969/large/LBTC_Logo.png?1724959872",
    },
    {
      addressInfo: "0x2416092f143378750bb29b79eD961ab195CcEea5",
      chainId: 8453,
      name: "Renzo Restaked ETH",
      symbol: "ezETH",
      decimals: 18,
      logoURI: "/tokens/8453/0x7223442cad8e9cA474fC40109ab981608F8c4273.svg",
      meta: {
        poolId: "e28e32b5-e356-41d9-8dc7-a376ece56619",
      },
    },
    {
      addressInfo: "0xB6fe221Fe9EeF5aBa221c348bA20A1Bf5e73624c",
      chainId: 8453,
      name: "Rocket Pool ETH",
      symbol: "rETH",
      decimals: 18,
      logoURI: "/tokens/8453/0xB6fe221Fe9EeF5aBa221c348bA20A1Bf5e73624c.webp",
      meta: {
        poolId: "d4b3c522-6127-4b89-bedf-83641cdcd2eb",
      },
    },
    {
      addressInfo: "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
      chainId: 8453,
      name: "Aerodrome",
      symbol: "AERO",
      decimals: 6,
      logoURI: "/tokens/8453/0x940181a94A35A4569E4529A3CDfB74e38FD98631.png",
    },
    {
      addressInfo: "0x35E5dB674D8e93a03d814FA0ADa70731efe8a4b9",
      chainId: 8453,
      name: "Resolv USD",
      symbol: "USR",
      decimals: 18,
      logoURI:
        "https://coin-images.coingecko.com/coins/images/40008/large/USR_LOGO.png?1725222638",
    },
    {
      addressInfo: "0x5d746848005507DA0b1717C137A10C30AD9ee307",
      chainId: 8453,
      name: "PT Lombard LBTC 29MAY2025",
      symbol: "PT-LBTC-29MAY2025",
      decimals: 8,
      logoURI:
        "https://coin-images.coingecko.com/coins/images/39969/large/LBTC_Logo.png?1724959872",
      meta: {
        isPendlePT: true,
        pendleMarket: "0x727cebacfb10ffd353fc221d06a862b437ec1735",
      },
    },
    {
      addressInfo: "0xec443e7E0e745348E500084892C89218B3ba4683",
      chainId: 8453,
      name: "PT Resolv USD 24APR2025",
      symbol: "PT-USR-24APR2025",
      decimals: 18,
      logoURI:
        "https://coin-images.coingecko.com/coins/images/40008/large/USR_LOGO.png?1725222638",
      meta: {
        isPendlePT: true,
        pendleMarket: "0xe15578523937ed7f08e8f7a1fa8a021e07025a08",
      },
    },
    {
      addressInfo: "0x5875eee11cf8398102fdad704c9e96607675467a",
      chainId: 8453,
      name: "sUSDS",
      symbol: "sUSDS",
      decimals: 18,
      logoURI:
        "https://raw.githubusercontent.com/marsfoundation/spark-docs/9b2ece7f8d6d1575549a88bb78654fe68707156f/.gitbook/assets/sUSDS-Coin.svg",
      meta: {
        provider: "SUSDS",
      },
    },
    {
      addressInfo: "0x820c137fa70c8691f0e44dc420a5e53c168921dc",
      chainId: 8453,
      name: "USDS",
      symbol: "USDS",
      decimals: 18,
      logoURI:
        "https://coin-images.coingecko.com/coins/images/39926/large/usds.webp?1726666683",
      meta: {},
    },
    {
      addressInfo: "0x7FcD174E80f264448ebeE8c88a7C4476AAF58Ea6",
      chainId: 1,
      name: "Wrapped Super OETH",
      symbol: "wsuperOETHb",
      decimals: 18,
      logoURI:
        "https://coin-images.coingecko.com/coins/images/39829/large/Wrapped_Super_OETH.png?1724208632",
      meta: {
        provider: "DEFILLAMA",
        poolId: "f388573e-5c0f-4dac-9f70-116a4aabaf17",
      },
    },
    {
      addressInfo: "0xa153Ad732F831a79b5575Fa02e793EC4E99181b0",
      chainId: 8453,
      name: "EUL",
      symbol: "EUL",
      decimals: 18,
      logoURI:
        "https://raw.githubusercontent.com/AngleProtocol/angle-token-list/main/src/assets/tokens/EUL.svg",
      meta: {},
    },
    {
      addressInfo: "0xE08e1f00D388E201e48842E53fA96195568e6813",
      chainId: 8453,
      name: "Reward EUL",
      symbol: "rEUL",
      decimals: 18,
      logoURI:
        "https://raw.githubusercontent.com/AngleProtocol/angle-token-list/main/src/assets/tokens/EUL.svg",
    },
  ],
  apyProviders: [
    // WSTETH
    [
      "0xc1cba3fcea344f92d9239c08c0568f6f2f0ee452",
      { provider: "DEFILLAMA", poolId: "747c1d2a-c668-4682-b9f9-296708a3dd90" },
    ],
    // CBETH
    [
      "0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22",
      { provider: "DEFILLAMA", poolId: "0f45d730-b279-4629-8e11-ccb5cc3038b4" },
    ],
    // WEETH
    [
      "0x04c0599ae5a44757c0af6f9ec3b93da8976c150a",
      { provider: "DEFILLAMA", poolId: "46bd2bdf-6d92-4066-b482-e885ee172264" },
    ],
    // rETH
    [
      "0xB6fe221Fe9EeF5aBa221c348bA20A1Bf5e73624c",
      { provider: "DEFILLAMA", poolId: "d4b3c522-6127-4b89-bedf-83641cdcd2eb" },
    ],
    // ezETH
    [
      "0x2416092f143378750bb29b79eD961ab195CcEea5",
      { provider: "DEFILLAMA", poolId: "e28e32b5-e356-41d9-8dc7-a376ece56619" },
    ],
  ],
}
