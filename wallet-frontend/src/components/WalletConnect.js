import React from 'react';
import Web3 from 'web3';

function WalletConnect({ setAccount }) {
  
  const connectWalletHandler = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  return (
    <div>
      <button onClick={connectWalletHandler}>Connect Wallet</button>
    </div>
  );
}

export default WalletConnect;
