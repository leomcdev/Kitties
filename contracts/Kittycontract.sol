// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "./IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../contracts/Ownable.sol";

// bygg kitty kontraktet
contract Kitty is ERC721, Ownable {
    event Birth(
        address owner,
        uint256 newKittenId,
        uint256 mumId,
        uint256 dadId,
        uint256 genes
    );

    mapping(address => uint256) ownershipTokenCount;
    mapping(uint256 => address) kittyIndexToOwner;
    mapping(uint256 => Kitties[]) kitties;

    struct Kitties {
        uint256 genes;
        uint256 birthTime;
        uint256 mumId;
        uint256 dadId;
        uint256 generation;
    }

    // Kitties[] kitties;

    uint256 public gen0Counter;
    uint256 public gen0Limit;
    uint256 public totSupply;

    constructor() ERC721("", "") {
        owner = msg.sender;
    }

    function createKittyGen0(uint256 _genes)
        public
        onlyOwner
        returns (uint256)
    {
        require(gen0Counter >= gen0Limit, "reached gen0 creation limit");
        ownershipTokenCount[msg.sender]++;
        gen0Counter++;
        return _createKitty(0, 0, 0, _genes, msg.sender);
    }

    // get struct array with id and index
    function s1(uint256 _genes) public view returns (Kitties memory) {
        return kitties[_genes][0];
    }

    function _createKitty(
        uint256 _mumId,
        uint256 _dadId,
        uint256 _generation,
        uint256 _genes,
        address _owner
    ) private returns (uint256) {
        kitties[_genes].push(
            Kitties(
                _genes,
                uint256(block.timestamp),
                _mumId,
                _dadId,
                _generation
            )
        );
        // kitty specific genes counter
        uint256 newKittenId = kitties[_genes].length - 1;

        totSupply++;

        _transfer(address(0), _owner, newKittenId);
        emit Birth(_owner, newKittenId, _mumId, _dadId, _genes);

        return newKittenId;
    }

    function getKitty(uint256 _genes) public view returns (Kitties[] memory) {
        return kitties[_genes];
    }

    function balanceOf(address owner)
        public
        view
        override
        returns (uint256 balance)
    {
        return ownershipTokenCount[owner];
    }

    function ownerOf(uint256 index) public view override returns (address) {
        return kittyIndexToOwner[index];
    }

    function last(uint256 _genes) public view returns (uint256) {
        return kitties[_genes].length - 1;
    }

    function transfer(address _to, uint256 _tokenId) external {
        require(_to != address(0), "cant be the zero address");
        require(_to != address(this), "cant be the contract address");
        require(_to == ownerOf(_tokenId), "need to be the owner");

        _transfer(msg.sender, _to, _tokenId);
    }

    function _transfer(
        address _from,
        address _to,
        uint256 _tokenId
    ) internal override {
        ownershipTokenCount[_to]++;

        kittyIndexToOwner[_tokenId] = _to;

        if (_from != address(0)) {
            ownershipTokenCount[msg.sender]--;
        }
        emit Transfer(_from, _to, _tokenId);
    }

    function _owns(address _claimant, uint256 _tokenId)
        internal
        view
        returns (bool)
    {
        return kittyIndexToOwner[_tokenId] == _claimant;
    }
}
