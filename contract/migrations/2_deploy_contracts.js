// migrations/2_deploy_contracts.js
const MyNFT = artifacts.require("MyNFT");

module.exports = async function (deployer, network, accounts) {
  const initialOwner = accounts[0];  // Use the first account as the initial owner
  await deployer.deploy(MyNFT, initialOwner);
};
