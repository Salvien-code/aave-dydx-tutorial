import { Network, Alchemy } from "alchemy-sdk";
import axios from "axios";
import "dotenv/config";
import { ethers } from "ethers";

const { ALCHEMY_API_KEY, PRIVATE_KEY } = process.env;

const wallet = new ethers.Wallet(PRIVATE_KEY!);

// Alchemy Settings
const settings = {
  apiKey: ALCHEMY_API_KEY,
  network: Network.ETH_GOERLI,
};

const alchemyInstance = new Alchemy(settings);
const alchemyProvider = new ethers.providers.AlchemyProvider("Goerli");

// Exported config
const config = {
  wallet,
  alchemyInstance,
  alchemyProvider,
};

export default config;
