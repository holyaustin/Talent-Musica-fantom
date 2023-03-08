require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
   
    testnet: {
      url: "https://fantom-testnet.public.blastapi.io", 
      chainId: 4002,
      accounts: [process.env.PRIVATE_KEY],
    },

    mainnet: {
      url: "https://rpcapi.fantom.network/", 
      chainId: 250,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
