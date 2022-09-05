const Mediator = artifacts.require("Mediator.sol");

contract("Mediator",([deployer,third])=>{
    before(async() => {
        mediator = await Mediator.deployed();
        mediatorAddress = await mediator.address;
        //contractMediator = new web3.eth.Contract(abiVendor,mediatorAddress);
        });
});