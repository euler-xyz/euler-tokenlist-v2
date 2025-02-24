# Token List Generator

This project generates a token list using the CoinGecko API and allows for custom image overrides.

## Setup

1. Install dependencies and pull in environment variables:
   ```
   npm install
   npm run doppler:login
   npm run doppler:sync
   ```

2. If needed, modify the `csvUrl`, `imageOverrides`, `extraAddresses`, `hardcodedTokens` and `defiLamaIds` in
   `configs/{chainId}.js` files.

## Configuration

Each `configs/{chainId}.js` file contains:

- `csvUrl`: The URL of the CSV file containing token addresses.
- `imageOverrides`: An object where you can specify custom image URLs for specific token addresses.
- `extraAddresses`: An array of token addresses that exist in CoinGecko API but not in the CSV.
- `hardcodedTokens`: An array of custom tokens that are missing from CoinGecko API and need to be added.
- `defiLamaIds`: Entries of defi lama pool ids to be added against tokens.

## Usage

```
npm start
```

This task:

- Generates the token list
- Applies custom token image overrides
- Adds custom tokens
- Applies defi lama pool ids to tokens
- Moves the updated tokenlist to its destination (`forkDeploy/data/{chainId}TokenList.json`)

**Make sure to notify the BE team when you have added new tokens.**

## Rate Limiting

The token list generator includes built-in handling for CoinGecko API rate limiting. If a rate limit error (HTTP 429) is
encountered, the script will automatically pause for 30 seconds before retrying the request.

## Defi lama pools

To find defi lama pool ids you will need to go to https://defillama.com/yields and search for the pool you want to add.
The pool id is the string at the end of the url. 

For example, for the
pool https://defillama.com/yields/pool/747c1d2a-c668-4682-b9f9-296708a3dd90, the
pool id is `747c1d2a-c668-4682-b9f9-296708a3dd90`.

Alternatively they can be found in a JSON with all pools: by https://yields.llama.fi/pools

## Pendle PT tokens
Pendle PT tokens are not available in Coingecko. As adapters for them are added to the oracle CSV, entries should be manually added to hardcoded tokens in `config.js`. In metadata `isPendlePT` must be set to `true` and `pendleMarket` should be populated. To get the Pendle market address for a PT token, use swagger UI for Pendle's API
[markets endpoint](https://api-v2.pendle.finance/core/docs#/Markets/MarketsController_markets)
Set the `pt string` field to the PT token address and execute. The market address will be in response `results[0].address`.