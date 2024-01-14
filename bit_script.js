const bitcoin = require('bitcoinjs-lib');


// CREATE TAPROOT ADDRESS
const { networks, payments, ECPair } = bitcoin;

function generateTaprootAddress() {
  // Generate a new key pair (private and public key)
  const keyPair = ECPair.makeRandom({ network: networks.bitcoin });
  const publicKey = keyPair.publicKey;

  // Create a P2TR (Pay-to-Taproot) address
  const p2tr = payments.p2tr({ pubkey: publicKey, network: networks.bitcoin });

  return p2tr.address;
}

const taprootAddress = generateTaprootAddress();
console.log("Taproot Address:", taprootAddress);

