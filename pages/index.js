const { default: MerkleTree } = require("merkletreejs");

const claimingAddress =leafNodes[0];

const HexProof = MerkleTree.gethexProof(claimingAddress)

console.log('Merkle proof for address\n', HexProof);