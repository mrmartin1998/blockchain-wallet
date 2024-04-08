const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraUrl = "https://sepolia.infura.io/v3/3e7c328b56ad4b8ebf22bd22b11ab2af";
const mnemonic = 'surround learn iron ignore impact flip artwork melt dinner chronic skill glimpse'; // Replace with your wallet's mnemonic

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
    },
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, infuraUrl),
      network_id: 11155111, // Sepolia's network id
      gas: 5500000,        // Gas limit used for deploys
      confirmations: 2,    // Number of confirmations to wait between deployments
      timeoutBlocks: 200,  // Number of blocks before a deployment times out
      skipDryRun: true     // Skip dry run before migrations
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
};
