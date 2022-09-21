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
    describe('Mint',async()=>{  
        it('mint new Tokens',async()=>{
            value = web3.utils.toWei('0.05');
            await erc721.methods.createNewNFT().send({from:seller, value:value, gas:200000});
            supply = await erc721.methods.totalSupply().call();
            assert.equal(supply,totalSupply+1);
        })
    })
    describe('Access Managment',async()=>{  
        it('check Owner',async()=>{
            owner = await erc721.methods.ownerOf(0).call();
            owner1 = await erc721.methods.ownerOf(1).call();
            assert.equal(deployer,owner);
            assert.equal(seller,owner1);
        })
    })
    describe('Approve',async()=>{  
        it('Approve seller to transfer deployers deed',async()=>{
            await erc721.methods.approve(seller,0).send({from:deployer});
        })
    })
    describe('Transfer',async()=>{  
        it('seller transfer deed 1 to buyer',async()=>{
            await erc721.methods.transferFrom(seller,buyer,1).send({from:seller, gas:2000000});
            buyerBalance= await erc721.methods.balanceOf(buyer).call();
            assert.equal(buyerBalance,1);
        })
        it('seller transfer deed 0 from deployer to buyer',async()=>{
            await erc721.methods.transferFrom(deployer,buyer,0).send({from:seller, gas:2000000});
            buyerBalance= await erc721.methods.balanceOf(buyer).call();
            assert.equal(buyerBalance,2);
        })
    })
});