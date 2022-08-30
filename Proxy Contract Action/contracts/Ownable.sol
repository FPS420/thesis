// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
contract Ownable{
    address private _owner;
    constructor(){
        _owner = msg.sender;
    }
    modifier onlyOwner{
        require(_owner == msg.sender);
        _;
    }
}