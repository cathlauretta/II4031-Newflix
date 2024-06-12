const { Web3 } = require('web3');

// Initialize Web3
const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/mlbXSJTgFXSeZvKvVnsaTIyPACpFlxhR");

// Define the function to send NFT
const sendNFT = async (from, to, tokenId) => {
    const abi = [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];

    try {
        const privateKey = '0x1cb43f07a510e0533cb468f11cdbc21434615d79c0fc79d72517a9587f75e531';
        const deployedAddress = "0xb9E1D0D59D24a2f202D7D54cf79fba47F21a8732"; // Replace with your contract address
        const myContract = new web3.eth.Contract(abi, deployedAddress);
        myContract.handleRevert = true;

        // Get account from the private key
        const account = web3.eth.accounts.wallet.add(privateKey);
        const usedAccount = account[0];

        // Interact with the smart contract
        const receipt = await myContract.methods.safeTransferFrom(from, to, tokenId).send({
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
const testSendNFT = async () => {
    const from = "0xf1a5cba704Be91332fFc26dfD8b87E72Cb5514ee"; // Replace with the sender's address
    const to = "0x6eC9669aAb5e98F96FAAA7dC6bA716b190Ef0aa6"; // Replace with the recipient's address
    const tokenId = 1; // Replace with the token ID you want to transfer

    const result = await sendNFT(from, to, tokenId);
    console.log(result);
    process.exit(); // Add this line to exit the script
};

testSendNFT();

module.exports = { sendNFT, web3 };
