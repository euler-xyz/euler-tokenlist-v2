const { base, mainnet } = require("viem/chains")
const ethereumConfig = require("./configs/ethereum")
const baseConfig = require("./configs/base")
const swellConfig = require("./configs/swell")
const sonicConfig = require("./configs/sonic")

const chainConfigs = {
  [mainnet.id]: ethereumConfig,
  [base.id]: baseConfig,
  [1923]: swellConfig,
  [146]: sonicConfig,
}

const PROVIDERS = {
  DEFILLAMA: "DEFILLAMA",
  RENZO: "RENZO",
  SUSDS: "SUSDS",
  SUSDE: "SUSDE",
  MIDAS: "MIDAS",
  USDL: "USDL",
  SWELLSWBTC: "SWELLSWBTC",
}

module.exports = { chainConfigs, PROVIDERS }
