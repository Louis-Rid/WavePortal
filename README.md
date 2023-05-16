# Smart Contract README

## Introduction
This README provides an overview of the smart contract code contained in this repository. The smart contract is called "WavePortal" and it allows users to wave and keep track of the total number of waves.

## Files
The repository contains a single file:

1. `WavePortal.sol`: This is the main Solidity file that contains the smart contract code. It defines the contract and its associated functions, variables, and events.

## Requirements
To compile and interact with the smart contract, you will need the following:

- [Solidity](https://soliditylang.org/): The programming language used to write the smart contract code.

- [Hardhat](https://hardhat.org/): A development environment that allows for compiling, testing, and deploying smart contracts.

## Compilation and Deployment
Follow these steps to compile and deploy the smart contract:

1. Install Solidity and Hardhat using the provided links.

2. Open a terminal and navigate to the project directory.

3. Compile the smart contract by running the following command:

4. Deploy the smart contract on a specific blockchain network (e.g., local development network, testnet, or mainnet) by configuring the deployment settings in the `hardhat.config.js` file and running the deployment script.

## Interacting with the Smart Contract
After deploying the smart contract, you can interact with it using the following methods:

1. `wave()`: This function allows a user to wave and increments the wave count for the sender's address.

2. `getTotalWaves()`: This function returns the total number of waves recorded.

3. `getTotalWavesForAddress(address waversAddress)`: This function returns the total number of waves recorded for a specific address.