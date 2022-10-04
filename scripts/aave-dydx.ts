import { config } from "../config";
import { AAVE_WETH_ADDRESS, LINK_ADDRESS, WALLET_ADDRESS } from "../constants";
import { LendingPoolInterfaceV2 } from "@aave/protocol-js";

const { alchemyInstance, axiosInstance } = config;

async function main() {
  const tokens = await alchemyInstance.core.getTokenBalances(WALLET_ADDRESS, [
    LINK_ADDRESS,
    AAVE_WETH_ADDRESS,
  ]);

  console.log(tokens);

  // Borrow Assets from AAVE

  // Open Position on dydx

  // Close Position on dydx

  // Repay Assets to AAVE
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
