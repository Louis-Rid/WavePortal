// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {
    // State Variables
    uint256 private totalWaves;

    // Mappings
    mapping(address => uint256) public wavers;

    // Constructor
    constructor() {
        console.log("Yo yo! I am a contract, and I am smart!");
    }

    // Functions
    function wave() public {
        wavers[msg.sender] += 1;
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
    }

    // Getters
    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

    function getTotalWavesForAddress(
        address waversAddress
    ) public view returns (uint256) {
        return wavers[waversAddress];
    }
}
