const Mediator = artifacts.require("Mediator.sol");
const abiMediator = [
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "applyJob",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "client",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "contractor",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "remuneration",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					}
				],
				"internalType": "struct Mediator.Job",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "remuneration",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "createJob",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "client",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "contractor",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "remuneration",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					}
				],
				"internalType": "struct Mediator.Job",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getJobById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "client",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "contractor",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "remuneration",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					}
				],
				"internalType": "struct Mediator.Job",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "jobIsActive",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "jobSuccessfully",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "client",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "contractor",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "remuneration",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					}
				],
				"internalType": "struct Mediator.Job",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "jobs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "client",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "contractor",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "remuneration",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastId",
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
		"stateMutability": "payable",
		"type": "receive"
	}
]
//-------------------------------------------------------------------------

contract("Mediator",([deployer,client,contractor])=>{
    before(async() => {
        mediator = await Mediator.deployed();
        mediatorAddress = await mediator.address;
        contractMediator = new web3.eth.Contract(abiMediator,mediatorAddress);
        });
    describe('deployment',async()=>{
        it('deploys successfully', async ()=> {
            assert.notEqual(mediatorAddress, 0x0)
            assert.notEqual(mediatorAddress, '')
            assert.notEqual(mediatorAddress, null)
            assert.notEqual(mediatorAddress, undefined)
        });
    });
	describe('Approve Contract to get clients Tokens',async()=>{
		it('Client get some Tokens successfully',async()=>{
			await contractToken.methods.transfer(client,web3.utils.toWei('100')).send({from: deployer});
            balance = await contractToken.methods.balanceOf(client).call();
           	assert.equal(web3.utils.fromWei(balance.toString()),'100');
		});
        it('approve successfully',async()=>{
            //client approve contract to spend 10 of his tokens
			await contractToken.methods.approve(mediatorAddress,web3.utils.toWei('10')).send({from: client});
            let allowance = await contractToken.methods.allowance(client,mediatorAddress).call();
            assert.equal(web3.utils.fromWei(allowance.toString()),10);
        });
    });
    describe('List a Job',async()=>{

        it('listing successfully', async ()=> {
            let title ="Learning Solidity";
            let remuneration = web3.utils.toWei('10');
            let description = "You have to learn Solidity"
            assert.equal(await contractMediator.methods.lastId().call(),0);
            await contractMediator.methods.createJob(description,remuneration, title).send({from: client, gas: 2000000});
            assert.equal(await contractMediator.methods.lastId().call(),1);
            let job = await contractMediator.methods.getJobById(1).call();
            assert.equal(job["id"],1);
            assert.equal(job["title"],title);
            assert.equal(job["description"],description);
            assert.equal(job["remuneration"],remuneration);
            assert.equal(job["isActive"],true);
            assert.equal(job["client"],client);
            assert.equal(job["contractor"],client);
			assert.equal(await contractToken.methods.balanceOf(client).call(),web3.utils.toWei('90'));
			assert.equal(await contractToken.methods.balanceOf(mediatorAddress).call(),web3.utils.toWei('10'));
        });
    });
	
  

    describe('Apply a Job',async()=>{
        it('Applying successfully', async ()=> {
			await contractMediator.methods.applyJob(1).send({from: contractor});
			let job = await contractMediator.methods.getJobById(1).call();
			assert.equal(job["contractor"],contractor);
        });
    });

    describe('Realease Tokens',async()=>{
        it('approve job is finished', async ()=> {
          	await contractMediator.methods.jobSuccessfully(1).send({from: client, gas:2000000});

			assert.equal(await contractToken.methods.balanceOf(client).call(),web3.utils.toWei('90'));
			assert.equal(await contractToken.methods.balanceOf(mediatorAddress).call(),web3.utils.toWei('0'));
			assert.equal(await contractToken.methods.balanceOf(contractor).call(),web3.utils.toWei('10'));
        });
    });     
});