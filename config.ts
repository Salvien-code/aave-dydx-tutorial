import { Network, Alchemy } from "alchemy-sdk";
import "dotenv/config";

const { ALCHEMY_API_KEY } = process.env;

// Alchemy Settings
const settings = {
  apiKey: ALCHEMY_API_KEY,
  network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);

const config = {
  alchemy,
};

export { config };
