// Will deploy the WavePortal Contract
const main = async () => {
  const { ethers } = hre;
  const [owner, randomPerson] = await ethers.getSigners();
  const waveContractFactory = await ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy({
    value: ethers.utils.parseEther("0.1"),
  });
  await waveContract.deployed(); // Waits for contract to be deployed

  // Gets contract balance
  let contractBalance = await ethers.provider.getBalance(waveContract.address);

  await waveContract.getTotalWaves(); // Gets total waves

  const firstWaveTxn = await waveContract.wave("TEST"); // Increment totalWaves by one
  await firstWaveTxn.wait(1); // Wait for 1 block confirmation to make sure wave() fully ran

  await waveContract.getTotalWaves(); // Get total wave again and it should be one greater than before

  // Tests change in balance after messages is sent
  contractBalance = await ethers.provider.getBalance(waveContract.address); // Gets contract balance

  // Tests another person running the wave() function
  const secondWaveTxn = await waveContract.connect(randomPerson).wave("TEST2");
  await secondWaveTxn.wait(1);

  await waveContract.getTotalWaves();

  await waveContract.getTotalWaves();

  // Verifys the wavers are being stored in mapping
  const waves = await waveContract.getTotalWavesForAddress(randomPerson.address);
  console.log(`${randomPerson.address} has waved ${waves} times`)

  // Tests getAllWaves() function
  let allWaves = await waveContract.getAllWaves();
}


  // Tests getAllWaves() function
  let allWaves = await waveContract.getAllWaves();
};

// Will run the main() function while consoling an error if it fails
const runMain = async () => {
  try {
    await main();
    process.exit(0); // Exit the node if their is no error
  } catch (e) {
    console.log(e);
    process.exit(1); // Exit node with "Uncaught Fatal Exception" error
  }
};

// Execute runMain() function
runMain();
