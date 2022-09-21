// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";


contract ERC721Standard is ERC721Enumerable {
       constructor(string memory name, string memory symbol) ERC721 (name, symbol) {
              _mint(msg.sender, 0);
       }

       function createNewNFT()payable public{
              require(msg.value >= 0.05 ether, 'not enough Eth');
              _mint(msg.sender,totalSupply());
       }
}