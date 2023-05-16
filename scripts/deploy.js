// Will deploy the WavePortal Contract and console the address it is deployed to
const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log(`Deploying contracts with account: ${deployer.address}`);
    console.log(`Account balance ${accountBalance.toString()}`);

    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed(); // Waits for contract to be deployed

    console.log(`WavePortal address: ${waveContract.address}`);
    
}

// Will run the main() function while consoling an error if it fails
const runMain = async () => {
    try {
        await main();
        process.exit(0); // Exit the node if their is no error
    }
    catch (e) {
        console.log(e);
        process.exit(1); // Exit node with "Uncaught Fatal Exception" error
    }
}


// Execute runMain() function
runMain();