import { Network, Alchemy } from "alchemy-sdk";
import axios from "axios";
import "dotenv/config";

const { ALCHEMY_API_KEY, AAVE_STAGING_URL } = process.env;

// Alchemy Settings
const settings = {
  apiKey: ALCHEMY_API_KEY,
  network: Network.ETH_GOERLI,
};

const alchemyInstance = new Alchemy(settings);

export const axiosInstance = axios.create({
  baseURL: AAVE_STAGING_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

// Exported config
const config = {
  alchemyInstance,
  axiosInstance,
};

export { config };
