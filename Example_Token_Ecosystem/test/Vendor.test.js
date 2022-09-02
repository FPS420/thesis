const Vendor = artifacts.require("Vendor.sol");
const abiVendor = [[
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
]];

var chai = require("chai");
const { transferPromiseness } = require("chai-as-promised");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
chai.expect();

  contract("Vendor",([deployer])=>{

    before(async() => {
    vendor = await Vendor.deployed();
    vendorAddress = await vendor.address;
    contractVendor = new web3.eth.Contract(abiVendor,vendorAddress);
    });

    describe('deployment',async()=>{
        it('deploys successfully', async ()=> {
            assert.notEqual(vendorAddress, 0x0)
            assert.notEqual(vendorAddress, '')
            assert.notEqual(vendorAddress, null)
            assert.notEqual(vendorAddress, undefined)
        });
    });

    describe('Vendor balance',async()=>{
        it("Initial Vendor balance successfully",async()=>{
            balanceVendor = await contractToken.methods.balanceOf(vendorAddress).call();
            assert.equal(web3.utils.fromWei(balanceVendor),0);
        });
        it("Top up Vendor.sol with ETH successfully",async()=>{
            assert.equal(web3.utils.fromWei(await web3.eth.getBalance(vendorAddress)),0);
            await web3.eth.sendTransaction({to: vendorAddress, from: deployer, value:web3.utils.toWei("0.5","ether")});
        });
        it("Mint 20% of total supply",async()=>{
            balanceVendor = await contractToken.methods.balanceOf(vendorAddress).call();
            assert.equal(web3.utils.fromWei(balanceVendor),0);
            //await contractToken.methods.
        });
    });
  });
