// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Calculation{
    constructor(){}
    event PlusOne (address from, uint256 value);
    function plusOne(uint256 value) public returns (uint256){
        emit PlusOne(msg.sender, value);
        return value +2;
    }

}