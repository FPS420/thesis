const Vendor = artifacts.require("Vendor.sol");
//ABI Vendor.sol
const abiVendor = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountOfBnb",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountOfTokens",
				"type": "uint256"
			}
		],
		"name": "BuyTokens",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "buyTokens",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract Token",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];
//Use chai for some Test cases
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
chai.expect();

//Test Vendor.sol
  contract("Vendor",([deployer,client])=>{
	//deploy Vendor.sol
    before(async() => {
    vendor = await Vendor.deployed();
    vendorAddress = await vendor.address;
    contractVendor = new web3.eth.Contract(abiVendor,vendorAddress);

    });
	//test correct deployment of Vendor.sol
    describe('deployment',async()=>{
        it('deploys successfully', async ()=> {
            assert.notEqual(vendorAddress, 0x0)
            assert.notEqual(vendorAddress, '')
            assert.notEqual(vendorAddress, null)
            assert.notEqual(vendorAddress, undefined)
        });
    });
	//Vendor Balances
    describe('Vendor balance',async()=>{
		//after deplyoment the balance of tokens of Vendor.sol is 0
        it("Initial Vendor balance successfully",async()=>{
            balanceVendor = await contractToken.methods.balanceOf(vendorAddress).call();
            assert.equal(web3.utils.fromWei(balanceVendor),0);
        });
        it("Mint 20% of total supply successfully",async()=>{
			//maximum circulation quantity of Tokens
            let cap = web3.utils.fromWei(await contractToken.methods.cap().call());
            //Initial Balance of Vendor.sol
            balanceVendor = await contractToken.methods.balanceOf(vendorAddress).call();
            assert.equal(web3.utils.fromWei(balanceVendor),0);
            // Owner of Token.sol mint 20% Cap to Vendor.sol
            await contractToken.methods.mint(cap/5,vendorAddress).send({from: deployer});
            //Vendor.sol should hold 20% of Cap
            balanceVendor = await contractToken.methods.balanceOf(vendorAddress).call();
            assert.equal(web3.utils.fromWei(balanceVendor), cap/5);
        });
		//Minting more than Cap
        it("Mint more than cap should rejected",async()=>{
			//Total supply is the current circulated quantity of Tokens
            let totalSupply = web3.utils.fromWei(await contractToken.methods.totalSupply().call());
			// maximum circulation quantity of Tokens
            let cap = web3.utils.fromWei(await contractToken.methods.cap().call());
			//try to mint more Tokens than cap 
            await contractToken.methods.mint((cap-totalSupply)+1,vendorAddress).send({from: deployer}).should.be.rejected;
        });
		//try to mint new Tokens as not be the owner of Token.sol
        it("Mint tokens as not be the owner",async()=>{
            await contractToken.methods.mint(1,client).send({from: client}).should.be.rejected;
        });
    });
	//Buy some Tokens in exchange of eth
    describe('Third Person interaction',async()=>{
        it('Buy Tokens', async ()=> {
			//set Value to spend for tokens
            let valueEth = web3.utils.toWei('0.5')
			//get the exchange rate of Token/Eth
            let rate = await contractVendor.methods.rate().call();
			//check initial balance of tokens of client
            balance = await contractToken.methods.balanceOf(client).call();
            assert.equal(web3.utils.fromWei(balance.toString()),0);
			//client buy some tokens
            await contractVendor.methods.buyTokens().send({from: client, value: valueEth});
			//check balance of tokens after buyer them
            balance = await contractToken.methods.balanceOf(client).call();
            assert.equal(web3.utils.fromWei(balance.toString()),rate*web3.utils.fromWei(valueEth.toString()));
        });
    });
  });
