import { WALLET_ADDRESS, ADDRESSES } from "../constants";
import { Pool } from "@aave/contract-helpers";
import { getTokens } from "./helpers";
import config from "../config";
import Compound from "@compound-finance/compound-js";
import { ethers } from "hardhat";

async function main() {
  const amount = 0.05;

  // Supplying to WETH Gateway
  const parsedAmount = ethers.utils.parseEther(amount.toString());
  const [deployer] = await ethers.getSigners();

  const iWeth = await ethers.getContractAt("IWeth", ADDRESSES.WETH, deployer);
  const txResponse = await iWeth.deposit({ value: parsedAmount });
  await txResponse.wait(3);

  const iWethAmount = await getTokens(deployer.address, [ADDRESSES.WETH]);
  console.log(
    `Successfully swapped ${amount} ETH for ${iWethAmount.tokenBalances[0].tokenBalance} WETH\n`
  );

  // AAVE Supply section
  // const pool = new Pool(alchemyProvider);

  console.log(`Successfully supplied  WETH to AAVE\n`);

  // AAVE Borrow section
  console.log(`Borrowed DAI from AAVE protocol\n`);

  // Compound Supply section
  console.log(`Supplied DAI into compound protocol\n`);

  // Compound Withdraw section
  console.log(`Withdrawing funds out of Compound\n`);

  // AAVE Repay section

  console.log(`Repaying back DAI for aWETH\n`);
  // AAVE Withdraw section
  console.log(`Retrieved WETH\n`);

  // Withdrawing from WETH Gateway
  console.log(`Swapped WETH back to ETH!!! Yay. We did it. 🎉`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
