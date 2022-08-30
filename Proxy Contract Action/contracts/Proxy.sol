// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./ICalculation.sol";
contract Proxy{

    address public target;
    
    constructor(address t){
        target = t;
    }
    
    event PlusOne (address from, uint256 value);
    function proxyCall() public returns(uint256){
        ICalculation c = ICalculation(target);
        uint256 e = c.plusOne(1);
        emit PlusOne(msg.sender, e);
        return e;
    }

    function getTarget() public view returns(address){
        return target;
    }

    function setTarget(address t) public{
        target = t;
    }
}

