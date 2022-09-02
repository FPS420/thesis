const Token = artifacts.require("Token.sol");
const Vendor = artifacts.require("Vendor.sol");
module.exports = function (deployer) {
  deployer.deploy(Token).then(function(){
    return deployer.deploy(Vendor,Token.address);
  }); ;
};
