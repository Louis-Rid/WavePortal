require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const QUICKNODE_API_KEY = process.env.QUICK_NODE_API_KEY;
const PRIVATE_ACCOUNT_KEY = process.env.PRIVATE_ACCOUNT_KEY;
const PROD_QUICKNODE_KEY = process.env.PROD_QUICKNODE_KEY;


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.17",
    networks: {
        sepolia: {
            url: QUICKNODE_API_KEY,
            accounts: [PRIVATE_ACCOUNT_KEY]
        },
        mainnet: {
            url: PROD_QUICKNODE_KEY,
            accounts: [PRIVATE_ACCOUNT_KEY]
        }
    }
};


