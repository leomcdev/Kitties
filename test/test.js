const { expect } = require("chai");
const { ethers } = require("hardhat");
const totalSupply = ethers.BigNumber.from("10000000000000000000000");

var defaultAdmin, buyer, investor, server;

describe("Test State", function () {
  var kitty;
  beforeEach(async function () {
    [defaultAdmin, walletMoneyAddress, buyer, server, investor] =
      await ethers.getSigners();
    console.log("def admin", defaultAdmin.address);
    const Kitty = await ethers.getContractFactory("Kitty");
    kitty = await Kitty.deploy();
    console.log("contract address", kitty.address);
  });

  describe("Kitty testing", function () {
    it("should create kitty", async function () {
      await expect(kitty.createKittyGen0(0))
        .to.emit(kitty, "Birth")
        .withArgs(defaultAdmin.address, 0, 0, 0, 0);
      await kitty.createKittyGen0(0);
      await kitty.createKittyGen0(0);

      console.log(await kitty.getKitty(0));
      console.log(await kitty.last(0));
      console.log("tjaaeb", await kitty.last(0));
    });
  });
});
