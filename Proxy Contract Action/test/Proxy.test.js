const Calculation = artifacts.require('./Calculation.sol');
const ProxyContract = artifacts.require('./Proxy.sol');
const abi  = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "PlusOne",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "plusOne",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const proxyAbi =[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "PlusOne",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "target",
				"type": "address"
			}
		],
		"name": "proxyCall",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
contract("Proxy",([deployer])=>{

    //Deploy Contract
    before(async() => {
        calc = await Calculation.deployed();
		proxy = await ProxyContract.deployed();
        address = await calc.address;
		proxyAddress= await proxy.address;
        contract = new web3.eth.Contract(abi,address);
		proxyContract = new web3.eth.Contract(proxyAbi,proxyAddress);
    })

    //Test Deployment
    describe('deployment',async()=>{
        it('deploys successfully', async ()=> {
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
			assert.notEqual(proxyAddress, 0x0)
            assert.notEqual(proxyAddress, '')
            assert.notEqual(proxyAddress, null)
            assert.notEqual(proxyAddress, undefined)
        });
    });

   //Test plusOne
   describe('plusOne',async()=>{
        it('plusOne successfully', async ()=> {
            let value = await contract.methods.plusOne(1).call();
            assert.notEqual(value, 1)
            assert.equal(value, 2)
        });
    });

	 //Test plusOne in Proxy
	 describe('plusOne',async()=>{
        it('plusOne in Proxy successfully', async ()=> {
			//await proxyContract.methods.setContract(address).call();
            let value = await proxyContract.methods.proxyCall(address).call();
            assert.notEqual(value, 1)
            assert.equal(value, 2)
        });
    });
});

