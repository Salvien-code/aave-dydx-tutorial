import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const { ALCHEMY_API_URL, PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.8.17" }, { version: "0.4.19" }],
  },
  networks: {
    goerli: {
      url: ALCHEMY_API_URL,
      accounts: [PRIVATE_KEY!],
      chainId: 5,
    },
  },
};

export default config;
