const Erc20Standard = artifacts.require("ERC20Standard");
const Erc721 = artifacts.require("ERC721Standard");

module.exports = function (deployer) {
  deployer.deploy(Erc20Standard, 1000000,'Lotte','LTT');
  deployer.deploy(Erc721,'LotteNFT','LTTNFT');
};
