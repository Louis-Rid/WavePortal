// Will deploy the WavePortal Contract
const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.001"),
  });
  await waveContract.deployed(); // Waits for contract to be deployed
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
