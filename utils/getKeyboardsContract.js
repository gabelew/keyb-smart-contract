import { ethers } from "ethers";

import abi from "../utils/Keyboards.json";

const contractAddress = "0xbb5C9b78BdB6e8df449195335960FEd79a2A90c8";
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
