import config from "../config";
const { alchemyInstance } = config;

export async function getTokens(
  walletAddress: string,
  tokenAddresses: string[]
) {
  if (tokenAddresses.length > 0) {
    console.log(`Fetching balances of token(s) ${tokenAddresses}`);
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
    // Prints out the token balance (if any) of the first token passed into tokenAddresses[]
    // in a more readable way.
    console.dir(
      `${
        testToken
          ? `You own ${testToken.tokenBalance} or ${
              parseInt(testToken.tokenBalance!) / 10 ** 18
            } of the requested token}\n`
          : "You don't own the requested tokens in your account\n"
      }`
    );

    return tokens;
  } else throw new Error("No token addresses were passed in the function");
}
