const Erc20 = artifacts.require("ERC20Standard");

module.exports = function (deployer) {
  deployer.deploy(Erc20,1000000,'Lotte','LTT');
};
