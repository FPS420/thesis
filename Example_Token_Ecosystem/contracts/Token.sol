// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

contract Token is ERC20Capped {

    constructor() ERC20("Lotte", "LTT") ERC20Capped(1000000 * 10 ** 18) {
        _mint(msg.sender,100000 * 10 ** 18);
    }
}
