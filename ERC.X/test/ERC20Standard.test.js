const Token = artifacts.require ('ERC20Standard.sol');

//Test ERC20Standard.sol - [deployer] is the first EOA-Address
contract("Token",([deployer,buyer,seller])=>{
    const totalSupply = web3.utils.toWei('1000000');
    const amount = web3.utils.toWei('100000');
	//deployment of Smart Contract and instantiating JS Object of ERC20Standard.sol
    before(async() => {
		//deploy ERC20Standard.sol
        token = await Token.deployed()
		//get Token address
        tokenAddress = await token.address
		//instantiating js Object of contract ERC20Standard.sol
        erc20 = new web3.eth.Contract(Token.abi,tokenAddress);
    })
	//deployment
    describe('deployment',async()=>{
        //check deployment is successfully
        it('deploys successfully', async ()=> {
            assert.notEqual(tokenAddress, 0x0)
            assert.notEqual(tokenAddress, '')
            assert.notEqual(tokenAddress, null)
            assert.notEqual(tokenAddress, undefined)
        })
    })
    //Test balances
    describe('Balances',async()=>{
        //Supply of ERC20 
        it('Supply', async ()=> {
            supply = await erc20.methods.totalSupply().call();
            assert.equal(totalSupply,supply);
        })
        //Initial deployer Balance should be = totalSupply
        it('Balance Deployer', async ()=> {
            balanceDeployer = await erc20.methods.balanceOf(deployer).call();
            assert.equal(totalSupply,balanceDeployer);
        })
    })
    //Check Appove and Allowance of buyer
    //to transfer deployers Tokens
    describe('Approve and Allowance',async()=>{
        it('Approve successfully', async ()=> {
            await erc20.methods.approve(buyer,amount).send({from: deployer});
        })  
        //buyer has allowance to transfer deployers tokens
        it('Allowance successfully', async ()=> {
            allowance = await erc20.methods.allowance(deployer,buyer).call();
            assert.equal(allowance,amount);
        })  
    });
    //Transer
    describe('Transfer',async()=>{
        it('transfer successfully', async ()=> {
            //simple Transfer from deployer to buyer
            await erc20.methods.transfer(buyer,amount).send({from:deployer});
            balanceBuyer = await erc20.methods.balanceOf(buyer).call();
            assert.equal(amount,balanceBuyer);
        })
        //buyer transfers approved amount of deployers tokens to sellers account
        it('transferFrom successfully', async ()=> {
            await erc20.methods.transferFrom(deployer,seller,amount).send({from:buyer});
            balanceSeller = await erc20.methods.balanceOf(seller).call();
            assert.equal(amount,balanceSeller);
        })
    });
});