// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

// Contract according to the ERC20 standard, with Cap an Ownable extention  
contract Token is ERC20Capped, Ownable {
    // Mint 10% of Tokens after deployment to the deployer
    constructor() ERC20("Lotte", "LTT") ERC20Capped(1000000 * 10 ** 18) {
        _mint(msg.sender,100000 * 10 ** 18);
    }
    // mint new Tokens, only owner has access
    function mint(uint256 amount, address to) public onlyOwner{
        _mint(to,amount * 10 ** 18);
    } 
}
