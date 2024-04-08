import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function BalanceDisplay({ account }) {
  const [balance, setBalance] = useState('0');

  useEffect(() => {
    const loadBalance = async () => {
        if (account && window.ethereum) {
          const web3 = new Web3(window.ethereum);
          console.log("Account:", account); // Log the account address
      
          try {
            const balanceWei = await web3.eth.getBalance(account);
            console.log("Balance in Wei:", balanceWei); // Log the balance in Wei
      
            // Convert balance from Wei to Ether
            const balanceEth = web3.utils.fromWei(balanceWei.toString(), 'ether');
            setBalance(balanceEth);
          } catch (error) {
            console.error("Error fetching balance:", error); // Log any errors
          }
        } else {
          console.log("Account not found or window.ethereum not available");
        }
      };      

    loadBalance();
  }, [account]);

  return (
    <div>
      <h2>Balance: {balance} ETH</h2>
    </div>
  );
}

export default BalanceDisplay;
