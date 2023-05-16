// Will deploy the WavePortal Contract and console the address it is deployed to
const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed(); // Waits for contract to be deployed

    console.log(`Contract deployed to ${waveContract.address}`);
    console.log(`Contract deployed by: ${owner.address}`);

    await waveContract.getTotalWaves(); // Gets total waves and logs it to the console

    const firstWaveTxn = await waveContract.wave(); // Increment totalWaves by one
    await firstWaveTxn.wait(1); // Wait for 1 block confirmation to make sure wave() fully ran

    await waveContract.getTotalWaves(); // Get total wave again and it should be one greater than before

    // Tests another person running the wave() function
    const secondWaveTxn = await waveContract.connect(randomPerson).wave();
    await secondWaveTxn.wait(1);

    await waveContract.getTotalWaves();

    // Verifys the wavers are being stored in mapping
    const waves = await waveContract.getTotalWavesForAddress(randomPerson.address);
    console.log(`${randomPerson.address} has waved ${waves} times`)

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