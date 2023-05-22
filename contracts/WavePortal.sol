// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {
    // Events
    event NewWave(address indexed from, uint256 timestamp, string message);

    // Structs
    struct Wave {
        address wave;
        string message;
        uint256 timestamp;
    }

    // Mappings
    mapping(address => uint256) public wavers;

    // State Variables
    uint256 private totalWaves;
    Wave[] waves;

    // Constructor
    constructor() payable {
        console.log("We have been constructed!");
    }

    // Functions
    function wave(string memory _message) public {
        wavers[msg.sender] += 1;
        totalWaves += 1;
        console.log("%s has waved and said '%s'", msg.sender, _message);

        // Store wave in waves array
        waves.push(Wave(msg.sender, _message, block.timestamp));

        // Emit Event for wave being sent
        emit NewWave(msg.sender, block.timestamp, _message);

        // Prize for sending a message
        uint256 prizeAmount = 0.0001 ether;
        require(
            prizeAmount <= address(this).balance,
            "The contract does not have enough money for a 0.0001 ETH withdraw."
        );

        (bool success, ) = (msg.sender).call{value: prizeAmount}("");
        require(success, "Failed to withdraw money from contract");
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

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }
}
