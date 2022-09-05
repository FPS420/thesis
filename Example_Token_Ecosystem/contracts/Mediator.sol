// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Token.sol";
contract Mediator {
    Token public token;
    
    constructor(address tokenAddress) {
    token = Token(tokenAddress);
    }

    
}