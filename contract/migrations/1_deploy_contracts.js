var NFTCollection = artifacts.require("./NFTCollection.sol");

module.exports = function(deployer) {
  deployer.deploy(NFTCollection,"URI HERE","NewFlix","NWFX","0x83210c3093Dfc3B83096068a6C3166FF4776684C");
};
