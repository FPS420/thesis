const NFT= artifacts.require ('ERC721Standard.sol');
contract("ERC721",([deployer,buyer,seller])=>{
    const totalSupply = 1;
    before(async() => {
		//deploy ERC20Standard.sol
        nft = await NFT.deployed()
		//get Token address
        nftAddress = await nft.address
		//instantiating js Object of contract ERC20Standard.sol
        erc721 = new web3.eth.Contract(NFT.abi,nftAddress);
    })
    describe('deployment',async()=>{
        //check deployment is successfully
        it('deploys successfully', async ()=> {
            assert.notEqual(nftAddress , 0x0)
            assert.notEqual(nftAddress , '')
            assert.notEqual(nftAddress , null)
            assert.notEqual(nftAddress , undefined)
        })
    })
     //Test balances
     describe('Balances',async()=>{
        //Supply of ERC20 
        it('Supply', async ()=> {
            supply = await erc721.methods.totalSupply().call();
            assert.equal(supply,totalSupply);
        })
        //Initial deployer Balance should be = totalSupply
        it('Balance Deployer', async ()=> {
            balanceDeployer = await erc721.methods.balanceOf(deployer).call();
            assert.equal(balanceDeployer, totalSupply);
        })
    })
});