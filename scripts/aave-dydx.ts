import { config } from "../config";
import { AAVE_WETH_ADDRESS, LINK_ADDRESS, WALLET_ADDRESS } from "../constants";

const { alchemy } = config;

async function main() {
  const tokens = await alchemy.core.getTokenBalances(WALLET_ADDRESS, [
    LINK_ADDRESS,
    AAVE_WETH_ADDRESS,
  ]);

  console.log(tokens);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
