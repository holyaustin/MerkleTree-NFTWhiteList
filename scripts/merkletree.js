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
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
    "0x90F79bf6EB2c4f870365E785982E1f101E93b906",
    "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
    "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
    "0x976EA74026E726554dB657fA54763abd0C3a0aa9",
    "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955",
    "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f",
    "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720",
    "0xBcd4042DE499D14e55001CcbB24a551F3b954096",
    "0x71bE63f3384f5fb98995898A86B02Fb2426c5788",
    "0xFABB0ac9d68B0B445fB7357272Ff202C5651694a",
    "0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec",
    "0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097",
    "0xcd3B766CCDd6AE721141F452C550Ca635964ce71",
    "0x2546BcD3c84621e976D8185a91A922aE77ECEc30",
]

//Create a new array of leaf nodes by hashing all index of the whitelisted
//address using keccak256
const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true});

//Get the root hash of the merkle tree in Hex format
const rootHash = merkleTree.getRoot();

console.log('whitelist Merkle Patricia Tree\n', merkleTree.toString())
console.log('Root Hash is\n', rootHash);