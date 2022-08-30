const ProxyContract = artifacts.require("Proxy");
const Calculation = artifacts.require("Calculation");
const Calculation1 = artifacts.require("Calculation1");

module.exports = function (deployer) {
  deployer.deploy(Calculation).then(function(){
    return deployer.deploy(ProxyContract,Calculation.address);
  }); 
  deployer.deploy(Calculation1);
};
