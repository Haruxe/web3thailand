// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { ethers } = require("ethers");

const privateKey =
  "4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d";
const wlAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";

async function process() {
  const signerWallet = new ethers.Wallet(privateKey);
  console.log(`Signer address: ${signerWallet.address}`);
  //0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1

  //    const msgHash = ethers.utils.keccak256("hello")
  let messageHash = ethers.utils.id("hello");
  let messageBytes = ethers.utils.arrayify(messageHash);
  let signature = await signerWallet.signMessage(messageBytes);

  console.log("Signature:", signature);
  console.log(
    "Recovered  public key: " +
      ethers.utils.recoverPublicKey(messageBytes, signature)
  );
  console.log(
    "Recovered address: " + ethers.utils.recoverAddress(messageBytes, signature)
  );
}

process();
