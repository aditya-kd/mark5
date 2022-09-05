const Warrant = artifacts.require("Warrant");

module.exports = function(deployer) {
  deployer.deploy(Warrant);
};
