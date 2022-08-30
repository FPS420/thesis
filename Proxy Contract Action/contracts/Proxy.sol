// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./ICalculation.sol";
contract Proxy{
    constructor(){
    }
    event PlusOne (address from, uint256 value);
    function proxyCall(address target) public returns(uint256){
        ICalculation c = ICalculation(target);
        uint256 e = c.plusOne(1);
        emit PlusOne(msg.sender, e);
        return e;
    }

}

