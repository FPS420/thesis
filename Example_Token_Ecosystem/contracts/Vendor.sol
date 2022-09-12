// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "./Token.sol";

// Contract that offers Token in exchange of eth
contract Vendor is Ownable {
    //Instance of Token.sol
    Token public token;
    //exchange rate per eth
    uint256 public constant rate = 100;

    //set address of Token at deployment
    constructor(address tokenAddress) {
    token = Token(tokenAddress);
    }
    //event that emit when Tokens are bought
    event BuyTokens(address buyer, uint256 amountOfETH, uint256 amountOfTokens);

    //will receive any eth sent to the contract
    receive() external payable { }

    //Function to buy Tokens
    function buyTokens() public payable {
        //require the eth amount send is more than 0
        require(msg.value > 0, 'not enought ETH to buy tokens');
        //calculate the amount of Tokens to transfer
        uint amountToTransfer = msg.value * rate;
        //transfer token from vendor to buyer
        token.transfer(msg.sender, amountToTransfer);
        //emit BuyTokens event
        emit BuyTokens(msg.sender,msg.value, amountToTransfer);
    }  
    //function to withdraw Eth, only Owner has access 
    function withdraw() public onlyOwner{
        //eth balance of vendor contract
        uint256 balance = address(this).balance;
        //reqire the balance is more than 0
        require(balance > 0, 'Owner/Contract has no balance to withdraw');
        //send the amount of eth from vendor to the owner
        (bool sent,)= msg.sender.call{value: balance}("");
        require(sent, "Failed to send balance");
    }
}