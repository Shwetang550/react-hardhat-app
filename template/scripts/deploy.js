// importing ethers from hardhat
const { ethers } = require("hardhat");

// importing file system to write the contract address to ./src/contractAddress.js file
const fs = require("fs");

const main = async () => {
  const contractFactory = await ethers.getContractFactory("HelloWorld");

  // deploying the smart_contract
  const contract = await contractFactory.deploy();

  console.log("contract deployed successfully at ", contract.address);

  // updating the contract_address of the deployed 'HelloWorld' Smart_contract on the specified file
  await fs.writeFileSync(
    "./src/contractAddress.js",
    `export const CONTRACT_ADDRESS = "${contract.address}"`
  );
};

main();
