const Token = artifacts.require("Token.sol");
const Vendor = artifacts.require("Vendor.sol");
const Mediator = artifacts.require("Mediator.sol");
module.exports = function (deployer) {
  deployer.deploy(Token).then(function(){
    return deployer.deploy(Vendor,Token.address);
  }).then(function(){return deployer.deploy(Mediator,Token.address)}); 
};
