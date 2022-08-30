const ProxyContract = artifacts.require("Proxy");
const Calculation = artifacts.require("Calculation");

module.exports = function (deployer) {
  deployer.deploy(Calculation).then(function(){
    return deployer.deploy(ProxyContract,Calculation.address);
  }); 
};
