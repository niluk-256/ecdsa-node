const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex } = require("ethereum-cryptography/utils");
const secp = require("ethereum-cryptography/secp256k1");

const privateKey = secp.utils.randomPrivateKey();e

console.log(`privateKey: ${toHex(privateKey)}`);

const publicKey = secp.getPublicKey(privateKey);
const hash = keccak256(publicKey.slice(1).slice(-20));
console.log("public key :", toHex(hash));
