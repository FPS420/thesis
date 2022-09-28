const Mediator = artifacts.require("Mediator.sol");
//-------------------------------------------------------------------------
//Test Mediator.sol
contract("Mediator",([deployer,client,contractor])=>{
//deployment of Mediator.sol and instantiating JS Object of Mediator.sol
before(async() => {
mediator = await Mediator.deployed();
mediatorAddress = await mediator.address;
contractMediator = new web3.eth.Contract(Mediator.abi,mediatorAddress);
});
//mediator is deployed
describe('deployment',async()=>{
it('deploys successfully', async ()=> {
assert.notEqual(mediatorAddress, 0x0)
assert.notEqual(mediatorAddress, '')
assert.notEqual(mediatorAddress, null)
assert.notEqual(mediatorAddress, undefined)
});
});
//Approve Mediator to Spent Clients Tokens
describe('Approve Contract to get clients Tokens',async()=>{
//client get 100 Tokens
it('Client get some Tokens successfully',async()=>{
await contractToken.methods.transfer(client,web3.utils.toWei('100')).send({from: deployer});
balance = await contractToken.methods.balanceOf(client).call();
assert.equal(web3.utils.fromWei(balance.toString()),'100');
});
//Do approvment to spend tokens
it('approve successfully',async()=>{
//client approve contract to spend 10 of his tokens
await contractToken.methods.approve(mediatorAddress,web3.utils.toWei('10')).send({from: client});
//check amount of the permit
let allowance = await contractToken.methods.allowance(client,mediatorAddress).call();
// permit should be 10 Tokens
assert.equal(web3.utils.fromWei(allowance.toString()),10);
});
});
//Test job listing
describe('List a Job',async()=>{
it('listing successfully', async ()=> {
//set params for job
let title ="Learning Solidity";
let remuneration = web3.utils.toWei('10');
let description = "You have to learn Solidity"
assert.equal(await contractMediator.methods.lastId().call(),0);
//calling createJob() in Mediator.sol to list a new Job 
await contractMediator.methods.createJob(description,remuneration, title).send({from: client, gas: 2000000});
//check job is created
assert.equal(await contractMediator.methods.lastId().call(),1);
//get job from mapping in mediator.sol
let job = await contractMediator.methods.getJobById(1).call();
//compare Job detailes 
assert.equal(job["id"],1);
assert.equal(job["title"],title);
assert.equal(job["description"],description);
assert.equal(job["remuneration"],remuneration);
assert.equal(job["isActive"],true);
assert.equal(job["client"],client);
assert.equal(job["contractor"],client);
//check the amount of Tokens of client is incresed by remuneration and mediator is decreased by remuneration
assert.equal(await contractToken.methods.balanceOf(client).call(),web3.utils.toWei('90'));
assert.equal(await contractToken.methods.balanceOf(mediatorAddress).call(),web3.utils.toWei('10'));
});
});


//Apllying a job as contrator
describe('Apply a Job',async()=>{
it('Applying successfully', async ()=> {
//callung applyJob in mediator.sol
await contractMediator.methods.applyJob(1).send({from: contractor});
//check status of job
let job = await contractMediator.methods.getJobById(1).call();
assert.equal(job["contractor"],contractor);
});
});
//after job is successfully, release the remuneration to the contractor
describe('Realease Tokens',async()=>{
it('approve job is finished', async ()=> {
await contractMediator.methods.jobSuccessfully(1).send({from: client, gas:2000000});
//mediators balance is decreased and contractors is increased
assert.equal(await contractToken.methods.balanceOf(client).call(),web3.utils.toWei('90'));
assert.equal(await contractToken.methods.balanceOf(mediatorAddress).call(),web3.utils.toWei('0'));
assert.equal(await contractToken.methods.balanceOf(contractor).call(),web3.utils.toWei('10'));
});
});     
});