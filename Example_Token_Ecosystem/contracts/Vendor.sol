// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "./Token.sol";

contract Vendor is Ownable {
    Token public token;
    uint256 public constant rate = 10;

    constructor(address tokenAddress) {
    token = Token(tokenAddress);
    }
    
    event BuyTokens(address buyer, uint256 amountOfBnb, uint256 amountOfTokens);
    
    function buyTokens() public payable {
        require(msg.value > 0, 'not enought BNB to buy tokens');
        uint amountToTransfer = msg.value * rate;
        token.transfer(msg.sender, amountToTransfer);
        emit BuyTokens(msg.sender,msg.value, amountToTransfer);
    }  
    
    function withdraw() public onlyOwner{
    uint256 ownerBalance = address(this).balance;
    require(ownerBalance > 0, 'Owner/Contract has no balance to withdraw');
    (bool sent,)= msg.sender.call{value: ownerBalance}("");
    require(sent, "Failed to send balance");
  }
}