module.exports = {
  name: "swell",
  chainId: 1923,
  csvUrl:
    "https://raw.githubusercontent.com/euler-xyz/euler-interfaces/master/addresses/1923/OracleAdaptersAddresses.csv",
  imageOverrides: {},
  // Tokens that exist in CoinGecko API but not in the CSV
  extraAddresses: [],
  // Tokens that exist in the CSV but not in CoinGecko API
  hardcodedTokens: [
    {
      addressInfo: "0x4200000000000000000000000000000000000006",
      chainId: 1923,
      name: "Wrapped Ether",
      symbol: "WETH",
      decimals: 18,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
    },
    {
      addressInfo: "0x7c98E0779EB5924b3ba8cE3B17648539ed5b0Ecc",
      chainId: 1923,
      name: "Wrapped liquid staked Ether 2.0",
      symbol: "wstETH",
      decimals: 18,
      logoURI: "/tokens/1923/wsteth.png",
      meta: {
        provider: "DEFILLAMA",
        poolId: "e28e32b5-e356-41d9-8dc7-a376ece56619",
      },
    },
    {
      addressInfo: "0xA6cB988942610f6731e664379D15fFcfBf282b44",
      chainId: 1923,
      name: "Wrapped eETH",
      symbol: "weETH",
      decimals: 18,
      logoURI:
        "https://coin-images.coingecko.com/coins/images/33033/large/weETH.png?1701438396",
      meta: {
        provider: "DEFILLAMA",
        poolId: "46bd2bdf-6d92-4066-b482-e885ee172264",
      },
    },
    {
      addressInfo: "0x2416092f143378750bb29b79eD961ab195CcEea5",
      chainId: 1923,
      name: "Renzo Restaked ETH",
      symbol: "ezETH",
      decimals: 18,
      logoURI:
        "https://assets.coingecko.com/coins/images/34753/standard/Ezeth_logo_circle.png?1713496404",
      meta: {
        provider: "DEFILLAMA",
        poolId: "e28e32b5-e356-41d9-8dc7-a376ece56619",
      },
    },
    {
      addressInfo: "0xc3eACf0612346366Db554C991D7858716db09f58",
      chainId: 1923,
      name: "KelpDao Restaked ETH",
      symbol: "rsETH",
      decimals: 18,
      logoURI:
        "https://coin-images.coingecko.com/coins/images/33800/large/Icon___Dark.png?1702991855",
    },
    {
      addressInfo: "0x09341022ea237a4DB1644DE7CCf8FA0e489D85B7",
      chainId: 1923,
      name: "swETH",
      symbol: "swETH",
      decimals: 18,
      logoURI:
        "https://assets.coingecko.com/coins/images/30326/standard/_lB7zEtS_400x400.jpg?1696529227",
      meta: {
        provider: "DEFILLAMA",
        poolId: "ca2acc2d-6246-44aa-ae91-8725b2c62c7c",
      },
    },
    {
      addressInfo: "0x18d33689AE5d02649a859A1CF16c9f0563975258",
      chainId: 1923,
      name: "rswETH",
      symbol: "rswETH",
      decimals: 18,
      logoURI:
        "https://coin-images.coingecko.com/coins/images/34489/large/rswETH_Icon.png?1706865484",
      meta: {
        provider: "DEFILLAMA",
        poolId: "eff9b43c-a80d-4bfc-9f9e-55e02a8ef619",
      },
    },
    {
      addressInfo: "0x9cb41CD74D01ae4b4f640EC40f7A60cA1bCF83E7",
      chainId: 1923,
      name: "Renzo Restaked LST",
      symbol: "pzETH",
      decimals: 18,
      logoURI:
        "https://coin-images.coingecko.com/coins/images/39124/large/200x200.png?1720629607",
    },
    {
      addressInfo: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
      chainId: 1923,
      name: "USDe",
      symbol: "USDe",
      decimals: 18,
      logoURI:
        "https://assets.coingecko.com/coins/images/33613/standard/usde.png?1733810059",
      meta: {
        provider: "USDE",
        poolId: "",
      },
    },
    {
      addressInfo: "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
      chainId: 1923,
      name: "Staked USDe",
      symbol: "sUSDe",
      decimals: 18,
      logoURI:
        "https://assets.coingecko.com/coins/images/33669/large/sUSDe-Symbol-Color.png?1716307680",
      meta: {
        provider: "SUSDE",
        poolId: "",
      },
    },
    {
      addressInfo: "0x1cf7b5f266A0F39d6f9408B90340E3E71dF8BF7B",
      chainId: 1923,
      name: "swBTC",
      symbol: "swBTC",
      decimals: 8,
      logoURI:
        "https://assets.coingecko.com/coins/images/39682/standard/swBTC200x200.png?1723652322",
      meta: {
        provider: "SWELL_SWBTC",
        poolId: "",
      },
    },
    {
      addressInfo: "0x58538e6A46E07434d7E7375Bc268D3cb839C0133",
      chainId: 1923,
      name: "ENA",
      symbol: "ENA",
      decimals: 18,
      logoURI:
        "https://assets.coingecko.com/coins/images/36530/standard/ethena.png?1711701436",
    },
    {
      addressInfo: "0x2826D136F5630adA89C1678b64A61620Aab77Aea",
      chainId: 1923,
      name: "Swell Governance Token",
      symbol: "SWELL",
      decimals: 18,
      logoURI:
        "https://assets.coingecko.com/coins/images/28777/standard/swell1.png?1727899715",
    },
    {
      addressInfo: "0x80ccFBec4b8c82265abdc226Ad3Df84C0726E7A3",
      chainId: 1923,
      name: "EUL",
      symbol: "EUL",
      decimals: 18,
      logoURI:
        "https://raw.githubusercontent.com/AngleProtocol/angle-token-list/main/src/assets/tokens/EUL.svg",
      meta: {},
    },
    {
      addressInfo: "0x021694af083d67950Ac994E63e0a70C30D913836",
      chainId: 1923,
      name: "Reward EUL",
      symbol: "rEUL",
      decimals: 18,
      logoURI:
        "https://raw.githubusercontent.com/AngleProtocol/angle-token-list/main/src/assets/tokens/EUL.svg",
    },
  ],
  apyProviders: [
    // wstETH
    [
      "0x7c98E0779EB5924b3ba8cE3B17648539ed5b0Ecc",
      { provider: "DEFILLAMA", poolId: "747c1d2a-c668-4682-b9f9-296708a3dd90" },
    ],
    // weETH
    [
      "0xA6cB988942610f6731e664379D15fFcfBf282b44",
      { provider: "DEFILLAMA", poolId: "46bd2bdf-6d92-4066-b482-e885ee172264" },
    ],
    // ezETH
    [
      "0x2416092f143378750bb29b79eD961ab195CcEea5",
      { provider: "DEFILLAMA", poolId: "e28e32b5-e356-41d9-8dc7-a376ece56619" },
    ],
    // swETH
    [
      "0x09341022ea237a4DB1644DE7CCf8FA0e489D85B7",
      { provider: "DEFILLAMA", poolId: "ca2acc2d-6246-44aa-ae91-8725b2c62c7c" },
    ],
    // rswETH
    [
      "0x18d33689AE5d02649a859A1CF16c9f0563975258",
      { provider: "DEFILLAMA", poolId: "eff9b43c-a80d-4bfc-9f9e-55e02a8ef619" },
    ],
    // pzETH
    ["0x9cb41CD74D01ae4b4f640EC40f7A60cA1bCF83E7", { provider: "RENZO" }],
    // USDe
    ["0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34", { provider: "USDE" }],
    // sUSDe
    ["0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2", { provider: "SUSDE" }],
    // swBTC
    ["0x1cf7b5f266A0F39d6f9408B90340E3E71dF8BF7B", { provider: "SWELL_SWBTC" }],
  ],
}
