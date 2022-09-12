// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Token.sol";

// Contract that mediate Jobs to a contractor and handler of the value exchange
contract Mediator {
    //Instance of Token.sol
    Token public token;
    //a mapping of jobs 
    mapping(uint256 => Job) public jobs;
    //hold last id of job
    uint256 public lastId = 0;
    //set address of Token at deployment
    constructor(address tokenAddress) {
    token = Token(tokenAddress);
    }

    //will receive any eth sent to the contract
    receive() external payable { }
    //a struct that describes a Job
     struct Job {
        uint256 id;
        string title;
        address client;
        address contractor;
        string description;
        uint256 remuneration;
        bool isActive;
        string status;
    }
    //privat function to get an Id for a new Job
    function createId() private returns (uint256){
        lastId = lastId +1;
        return lastId;
    }
    //client list a Job 
    function createJob(string memory description, uint256 remuneration, string memory title) public returns(Job memory){
        //create new Id
        uint256 _id = createId();
        //create new Job with extern Params
        Job memory newJob = Job(_id, title, msg.sender, msg.sender, description,remuneration, true, 'listed');
        //store job in mapping
        jobs[_id]= newJob;
        //check the amount of tokens that the mediator can spend from client to mediator 
        uint256 allowance = token.allowance(msg.sender, address(this));
        //require the amount to spend is bigger or equal to the payment of this job
        require(allowance >= remuneration, 'allowance has to be equal or bigger than remuneration of this job');
        //transfer Tokens from client to mediator
        token.transferFrom(msg.sender, address(this), allowance);
        return newJob;
    }
    //returns job by id
    function getJobById(uint256 _id) public view returns(Job memory){
        return jobs[_id];
    }
    //check activitiy status of job
    function jobIsActive(uint256 _id) public view returns(bool) {
        return getJobById(_id).isActive;
    }
    //apply a job
    function applyJob(uint256 _id) public returns(Job memory){
        //get job
        Job memory job = jobs[_id];
        //change contractor
        job.contractor = msg.sender;
        //update mapping
        jobs[_id]= job;
        return jobs[_id];
    }
    // if a job is finished, client have to release the amount of remuneration and release the payment
     function jobSuccessfully(uint256 _id) public returns(Job memory){
        //get job
        Job memory job = jobs[_id];
        //require that only client can release tokens
        require(job.client == msg.sender, 'Access Denied');
        //job is not longer activ
        job.isActive = false;
        //change job status to finished successfully
        job.status = 'finished successfully';
        //update mapping
        jobs[_id]=job;

        //require that the amount of tokens to release is in mediator
        uint256 balance = token.balanceOf(address(this));
        require(balance >= job.remuneration, 'balance to small');
        //transfer remuneration from mediator to contractor
        token.transfer(job.contractor, job.remuneration);
        
        return jobs[_id];
    }
}