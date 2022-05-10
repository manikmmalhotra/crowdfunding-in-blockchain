import Web3 from "web3";
const { ethers } = require("ethers");
let web3;

// if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
//   // we are in the browser and meta mask is installed
//   web3 = new Web3(window.web3.currentProvider);
// } else {
//   // we are on the server *OR* meta mask is not running
//   // creating our own provider
//   const provider = new Web3.providers.HttpProvider(
//     "https://rinkeby.infura.io/v3/e1a76133b94347f5adeafe6f8e4fe097"
//   );

//   web3 = new Web3(provider);
// }
const url = "https://rinkeby.infura.io/v3/e1a76133b94347f5adeafe6f8e4fe097";
const provider = new ethers.providers.JsonRpcProvider(url);
web3 = new Web3(provider);
export default web3;
// var ethers = require('ethers');

// const provider = new ethers.providers.JsonRpcProvider(url);



