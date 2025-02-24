const Joi = require("joi")
const { chainConfigs, PROVIDERS } = require("../configuration")

const tokenSchema = Joi.object({
  addressInfo: Joi.string().required(),
  chainId: Joi.number().required(),
  name: Joi.string().required(),
  symbol: Joi.string().required(),
  decimals: Joi.number().required(),
  logoURI: Joi.string().required(),
  meta: Joi.object({
    isPendlePT: Joi.boolean(),
    pendleMarket: Joi.string(),
    poolId: Joi.string()
      .allow("")
      .when("provider", {
        is: PROVIDERS.DEFILLAMA,
        then: Joi.string().required(),
        otherwise: Joi.string().allow("").optional(),
      }),
    provider: Joi.string()
      .allow(...Object.values(PROVIDERS))
      .optional(),
  }).optional(),
})

const apyProviderSchema = Joi.array().items(
  Joi.array().ordered(
    Joi.string().required(),
    Joi.object({
      provider: Joi.string()
        .allow(...Object.values(PROVIDERS))
        .required(),
      poolId: Joi.string()
        .allow("")
        .when("provider", {
          is: PROVIDERS.DEFILLAMA,
          then: Joi.string().required(),
          otherwise: Joi.string().allow("").optional(),
        }),
      doesNotAutoCompound: Joi.boolean().optional(),
    }),
  ),
)

const configSchema = Joi.object({
  name: Joi.string().required(),
  csvUrl: Joi.string().required(),
  imageOverrides: Joi.object().pattern(Joi.string(), Joi.string()).required(),
  extraAddresses: Joi.array().items(Joi.string()).required(),
  hardcodedTokens: Joi.array().items(tokenSchema).required(),
  apyProviders: apyProviderSchema.optional(),
})

// Validate configs
const validateConfig = (config, name) => {
  const validation = configSchema.validate(config)
  if (validation.error) {
    throw new Error(`Invalid ${name} config: ${validation.error.message}`)
  }
}

Object.entries(chainConfigs).forEach(([chainId, config]) => {
  validateConfig(config, chainId)
})

module.exports = chainConfigs
