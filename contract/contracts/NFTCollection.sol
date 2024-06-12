// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract NFTCollection is ERC721Enumerable, Ownable {
    using Math for uint256;

    uint private _tokenIds;
    // The max number of NFTs in the collection
    uint public constant MAX_SUPPLY = 1000;
    // The mint price for the collection
    uint public constant PRICE = 0 ether;
    // The max number of mints per wallet
    uint public constant MAX_PER_MINT = 10;

    string public baseTokenURI;

    constructor(string memory baseURI, string memory name, string memory symbol, address owner) ERC721(name, symbol) Ownable(owner) {
        setBaseURI(baseURI);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function setBaseURI(string memory _baseTokenURI) public onlyOwner {
        baseTokenURI = _baseTokenURI;
    }

    function mintNFTs(uint _count) public payable {
        uint totalMinted = _tokenIds;

        require(totalMinted + _count <= MAX_SUPPLY, "This collection is sold out!");
        require(_count > 0 && _count <= MAX_PER_MINT, "You have received the maximum amount of NFTs allowed.");
        require(msg.value >= PRICE * _count, "Not enough ether to purchase NFTs.");

        for (uint i = 0; i < _count; i++) {
            _mintSingleNFT();
        }
    }

    function mintForAddress(address recipient, uint _count) public onlyOwner {
        uint totalMinted = _tokenIds;
        require(totalMinted + _count <= MAX_SUPPLY, "Not enough NFTs left to mint");

        for (uint i = 0; i < _count; i++) {
            _mintSingleNFT(recipient);
        }
    }

    function _mintSingleNFT() private {
        uint newTokenID = _tokenIds;
        _safeMint(msg.sender, newTokenID);
        _tokenIds++;
    }

    function _mintSingleNFT(address recipient) private {
        uint newTokenID = _tokenIds;
        _safeMint(recipient, newTokenID);
        _tokenIds++;
    }

    // Returns the ids of the NFTs owned by the wallet address
    function tokensOfOwner(address _owner) external view returns (uint[] memory) {
        uint tokenCount = balanceOf(_owner);
        uint[] memory tokensId = new uint256[](tokenCount);

        for (uint i = 0; i < tokenCount; i++) {
            tokensId[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokensId;
    }

    // Withdraw the ether in the contract
    function withdraw() public payable onlyOwner {
        uint balance = address(this).balance;
        require(balance > 0, "No ether left to withdraw");

        (bool success, ) = (msg.sender).call{value: balance}("");
        require(success, "Transfer failed.");
    }

    // Reserve NFTs only for owner to mint for free
    function reserveNFTs(uint _count) public onlyOwner {
        uint totalMinted = _tokenIds;

        require(totalMinted + _count < MAX_SUPPLY, "Not enough NFTs left to reserve");

        for (uint i = 0; i < _count; i++) {
            _mintSingleNFT();
        }
    }
}
