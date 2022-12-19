import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const { ALCHEMY_GOERLI_URL, METAMASK_PRIVATE_KEY, ETHERSCAN_API_KEY } =
  process.env;

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.8.10" }],
  },
  networks: {
    goerli: {
      url: ALCHEMY_GOERLI_URL,
      accounts: [METAMASK_PRIVATE_KEY!],
      chainId: 5,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};

export default config;
