const Calculation = artifacts.require('./Calculation.sol');
const Calculation1 = artifacts.require('./Calculation1.sol');
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
		"inputs": [
			{
				"internalType": "address",
				"name": "t",
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
		"inputs": [],
		"name": "getTarget",
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
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "t",
				"type": "address"
			}
		],
		"name": "setTarget",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "target",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
contract("Proxy",([deployer])=>{

    //Deploy Contract
    before(async() => {
        calc = await Calculation.deployed();
		calc1 = await Calculation1.deployed();
		proxy = await ProxyContract.deployed();
        address = await calc.address;
		address1 = await calc1.address;
		proxyAddress= await proxy.address;
        contract = new web3.eth.Contract(abi,address);
		contract1 = new web3.eth.Contract(abi,address1);
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
            let value = await proxyContract.methods.proxyCall().call();
            assert.notEqual(value, 1);
            assert.equal(value, 2);
        });
    });

	 //Change Target
	 describe('change Target',async()=>{
        it('Target successfully changed', async ()=> {

			let target = await proxyContract.methods.getTarget().call();
			assert.equal(target, address);

			await proxyContract.methods.setTarget(address1).send({from: deployer})
			target = await proxyContract.methods.getTarget().call();
			assert.equal(target, address1);
        });
    });	

	 //Test Contract interaction with Calculation1.sol
	 describe('Interaction with Calculation1 ',async()=>{
		it('plusOne successfully', async ()=> {
            let value = await contract1.methods.plusOne(1).call();
            assert.notEqual(value, 1)
            assert.equal(value, 3)
        });
		it('plusOne in Proxy successfully', async ()=> {
            let value = await proxyContract.methods.proxyCall().call();
            assert.notEqual(value, 1);
            assert.equal(value, 3);
        });
    });	
});

