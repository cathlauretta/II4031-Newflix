// Step 1: Install Web3.js
// Run this command in your terminal to install Web3.js if you haven't already
// npm install web3

// Step 2: Import Web3.
const { Web3 } = require('web3');

// Step 3: Connect to Sepolia network using Infura
const infuraUrl = 'https://sepolia.infura.io/v3/cd8af217072f442ab03a34915956b899';
const web3 = new Web3(infuraUrl)

// Step 4: Load the account from the private key
const privateKey = '0xe7e575caf52cd9399e08338f78d503e6f030a4e04e95af0bbe9b4e19347eb4f5';
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

console.log(account);

// Step 5: Get the balance of the account
web3.eth.getBalance(account.address)
  .then(balance => {
    console.log(`Balance: ${web3.utils.fromWei(balance, 'ether')} ETH`);
  })
  .catch(error => {
    console.error('Error getting balance:', error);
  });
