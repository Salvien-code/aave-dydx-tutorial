import { config } from "../config";
const { alchemyInstance, axiosInstance } = config;

export async function getAddressTokens(
  walletAddress: string,
  tokenAddresses: string[]
) {
  if (tokenAddresses.length > 0) {
    const tokens = await alchemyInstance.core.getTokenBalances(
      walletAddress,
      tokenAddresses
    );

    // Prints out the returned tokens from Alchemy
    // console.log(tokens);

    // Searching to see the first token is
    const testToken = tokens.tokenBalances.find((token) => {
      if (token.contractAddress === tokenAddresses[0]) return token;
    });

    // This is a pretty ugly log statement, I'm aware :-)
    // Prints out your LINK token balance (if any) in a more readable way.
    console.dir(
      `${
        testToken
          ? `You own ${testToken.tokenBalance} or ${
              parseInt(testToken.tokenBalance!) / 10 ** 18
            } LINK}`
          : "You don't have any LINK tokens in your account"
      }`
    );
  } else throw new Error("No token addresses were passed in the function");
}

// Borrow Assets from AAVE

// Repay Assets to AAVE
