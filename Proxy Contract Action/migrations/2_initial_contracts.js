const ProxyContract = artifacts.require("Proxy");
const Calculation = artifacts.require("Calculation");

module.exports = function (deployer) {
  deployer.deploy(Calculation);
  deployer.deploy(ProxyContract);
};
