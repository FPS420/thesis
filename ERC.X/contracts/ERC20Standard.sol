// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract ERC20Standard is ERC20 {
       constructor(uint256 supply, string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender,supply * 10 ** 18);
    }
}