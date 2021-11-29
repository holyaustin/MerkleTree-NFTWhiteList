// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract Merkle {

    bytes32 public merkleRoot = 0x60dc549645dce071befca43f50777de6ab54da045dea4ed153f8db55d64d12d6;

    mapping (address => bool) public whitelistClaimed;

    function whitelistMint (bytes32[] calldata _merkleProof) public {

        require(!whitelistClaimed[msg.sender], "Address have already claimed.");
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(MerkleProof.verify(_merkleProof, merkleRoot, leaf),"Invalid Proof." );
        whitelistClaimed[msg.sender] = true;

        //mint NFT reserve token here

    }

}

