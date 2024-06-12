const { Web3 } = require('web3');

// Initialize Web3
const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/mlbXSJTgFXSeZvKvVnsaTIyPACpFlxhR");
// Define the function to mint tokens
const mintTokens = async (recipient, count) => {
    const abi = [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_count",
                    "type": "uint256"
                }
            ],
            "name": "mintForAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];
    try {
        const MetaprivateKey = '0xe7e575caf52cd9399e08338f78d503e6f030a4e04e95af0bbe9b4e19347eb4f5';
        const deployedAddress = "0xb9E1D0D59D24a2f202D7D54cf79fba47F21a8732";
        const myContract = new web3.eth.Contract(abi, deployedAddress);
        myContract.handleRevert = true;

        // Get account from the private key
        const account = web3.eth.accounts.wallet.add(MetaprivateKey);
        const usedAccount = account[0];

        // Interact with the smart contract
        const receipt = await myContract.methods.mintForAddress(recipient, count).send({
            from: usedAccount.address,
            gas: "500000",
            gasPrice: "100000000000",
        });

        // Return a successful response
        return { success: true, transactionHash: receipt.transactionHash };

    } catch (error) {
        console.error("Error:", error);
        return { success: false, message: "Internal Server Error" };
    }
};

// Test the function
const testMint = async () => {
    const recipient = "0xf1a5cba704Be91332fFc26dfD8b87E72Cb5514ee"; // Replace with a valid recipient address
    const count = 1;

    const result = await mintTokens(recipient, count);
    console.log(result);
    process.exit(); // Add this line to exit the script
};

testMint();

module.exports = { mintTokens, web3};