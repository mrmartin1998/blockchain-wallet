import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TransactionHistory({ account }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      if (account) {
        const apiKey = 'FN9KRQX7V81ERH5JAMVM9HSIYZ8EGN18KN'; // Your Etherscan API Key
        const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${account}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`;

        try {
          const response = await axios.get(url);
          if (Array.isArray(response.data.result)) {
            setTransactions(response.data.result);
          } else {
            console.error('Unexpected response format:', response.data);
          }
        } catch (error) {
          console.error("Error fetching transactions:", error);
        }
      }
    };

    fetchTransactions();
  }, [account]);

  return (
    <div>
      <h3>Transaction History</h3>
      <ul>
        {Array.isArray(transactions) && transactions.map((tx, index) => (
          <li key={index}>
            Hash: {tx.hash} | From: {tx.from} | To: {tx.to} | Amount: {tx.value} Wei
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
