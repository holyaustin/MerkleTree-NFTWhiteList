const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

let whitelistAddresses = [
    "0x09750ad360fdb7a2ee23669c4503c974d86d8694",
    "0xc915eC7f4CFD1C0A8Aba090F03BfaAb588aEF9B4",
    "0xecb6ffaC05D8b4660b99B475B359FE454c77D153",
    "0xD5cE086A9d4987Adf088889A520De98299E10bb5",
    "0x4541c7745c82DF8c10bD4A58e28161534B353064",
    "0x7F85A82a2da50540412F6E526F1D00A0690a77B8",
    "0x0a00Fb2e074Ffaaf6c561164C6458b5C448120FC",
]

//Create a new array of leaf nodes by hashing all index of the whitelisted
//address using keccak256
const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true});

//Get the root hash of the merkle tree in Hex format
const rootHash = merkleTree.getRoot();

console.log('whitelist Merkle Patricia Tree\n', merkleTree.toString())