const Token = artifacts.require ('Token.sol');

//Test Token.sol - [deployer] is the first EOA-Address
contract("Token",([deployer])=>{
	//global vairiables
    let balanceDeployer;
	let launchSupply;
	//deployment of Token.sol and instantiating JS Object of Token.sol
    before(async() => {
		//deploy Token.sol
        token = await Token.deployed()
		//get Token address
        tokenAddress = await token.address
		//instantiating js Object of contract Token.sol
        contractToken = new web3.eth.Contract(Token.abi,tokenAddress);
    })
	//test Token.sol is deployed
    describe('deployment',async()=>{
        it('deploys successfully', async ()=> {
            assert.notEqual(tokenAddress, 0x0)
            assert.notEqual(tokenAddress, '')
            assert.notEqual(tokenAddress, null)
            assert.notEqual(tokenAddress, undefined)
        })
    })
	//Check Balances of Deployer
    describe('Deployer balance',async()=>{
        it('deployer hold launch supply',async()=>{
			//10% of Cap will withdrawn at deployment to the deployer
			launchSupply = web3.utils.fromWei(await contractToken.methods.cap().call()) / 10;
          	balanceDeployer = await contractToken.methods.balanceOf(deployer).call();     
          	assert.equal(launchSupply, web3.utils.fromWei(balanceDeployer));
        })
    })

});