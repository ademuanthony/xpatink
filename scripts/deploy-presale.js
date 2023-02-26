// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const XpatInk = await hre.ethers.getContractFactory("XinkPreviteRound");
  const xpatInk = await XpatInk.deploy('0x800f0918d2afb3bc26cbd55266a093781446c429');

  await xpatInk.deployed();
  
  console.log(xpatInk.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
