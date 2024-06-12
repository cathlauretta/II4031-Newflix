const { Web3 } = require('web3');

// Initialize Web3
const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/mlbXSJTgFXSeZvKvVnsaTIyPACpFlxhR");

// Define the function to get all token IDs owned by an address
const getTokenIdsByOwner = async (owner) => {
    const abi = [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "tokensOfOwner",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];

    try {
        const deployedAddress = "0xb9E1D0D59D24a2f202D7D54cf79fba47F21a8732"; // Replace with your contract address
        const myContract = new web3.eth.Contract(abi, deployedAddress);

        // Interact with the smart contract
        const tokenIds = await myContract.methods.tokensOfOwner(owner).call();
        
        // Return the token IDs
        return { success: true, tokenIds: tokenIds };

    } catch (error) {
        console.error("Error:", error);
        return { success: false, message: "Internal Server Error" };
    }
};

// Test the function
const testGetTokenIds = async () => {
    const owner = "0x6eC9669aAb5e98F96FAAA7dC6bA716b190Ef0aa6"; // Replace with the owner's address

    const result = await getTokenIdsByOwner(owner);
    console.log(result);
};

testGetTokenIds();

module.exports = { getTokenIdsByOwner, web3 };
