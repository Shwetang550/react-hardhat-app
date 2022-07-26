import React, { useEffect, useState } from "react";
import "./App.css";

import { ethers } from "ethers";

// importing deployed 'HelloWorld' contract address
import { CONTRACT_ADDRESS } from "./contractAddress";

// importing the ABI of 'HelloWorld' contract
import ABI from './contracts/HelloWorld.sol/HelloWorld.json';

const App = () => {
  const [smartContractNote, setSmartContractNote] = useState("");

  useEffect(() => {
    const getNote = async () => {
      // getting the provider on which the contract is deployed
      const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/"); //passing the localhost JSON-RPC url on which the hardhat node is locally deployed
      
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI.abi, provider); // creating an instance of the 'HelloWorld' smart_contract

      console.log(contract.address);
      setSmartContractNote(await contract.getNote());
    };
    getNote();
  }, []);

  return (
    <div className="App">
      <h1>{smartContractNote}</h1>
    </div>
  );
};

export default App;
