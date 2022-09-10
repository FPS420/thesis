// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Token.sol";
contract Mediator {
    Token public token;
    mapping(uint256 => Job) public jobs;
    uint256 public lastId = 0;

    constructor(address tokenAddress) {
    token = Token(tokenAddress);
    }

    receive() external payable { }

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

    function createId() private returns (uint256){
        lastId = lastId +1;
        return lastId;
    }

    function createJob(string memory description, uint256 remuneration, string memory title) public returns(Job memory){
        uint256 _id = createId();
        Job memory newJob = Job(_id, title, msg.sender, msg.sender, description,remuneration, true, 'listed');
        jobs[_id]= newJob;
        uint256 allowance = token.allowance(msg.sender, address(this));
        require(allowance >= remuneration, 'allowance has to be equal or bigger than remuneration of this job');
        token.transferFrom(msg.sender, address(this), allowance);
        return newJob;
    }

    function getJobById(uint256 _id) public view returns(Job memory){
        return jobs[_id];
    }

    function jobIsActive(uint256 _id) public view returns(bool) {
        return getJobById(_id).isActive;
    }

    function applyJob(uint256 _id) public returns(Job memory){
        Job memory job = jobs[_id];
        job.contractor = msg.sender;
        jobs[_id]= job;
        return jobs[_id];
    }
     function jobSuccessfully(uint256 _id) public returns(Job memory){
        Job memory job = jobs[_id];
        job.isActive = false;
        job.status = 'finished successfully';
        jobs[_id]=job;

        uint256 balance = token.balanceOf(address(this));
        require(balance >= job.remuneration, 'balance to small');
        
        token.transfer(job.contractor, job.remuneration);

        return jobs[_id];
    }
}