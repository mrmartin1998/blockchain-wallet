import React, { useState } from 'react';
import Web3 from 'web3';

function TransactionForm({ account }) {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!account) {
      alert('Please connect to the wallet first!');
      return;
    }

    const web3 = new Web3(window.ethereum);
    try {
      await web3.eth.sendTransaction({
        from: account,
        to: recipient,
        value: web3.utils.toWei(amount, 'ether')
      });
      alert('Transaction successful!');
    } catch (error) {
      alert('Transaction failed!');
      console.error(error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input 
        type="text" 
        value={recipient} 
        onChange={(e) => setRecipient(e.target.value)} 
        placeholder="Recipient Address" 
        required 
      />
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Amount (ETH)" 
        required 
      />
      <button type="submit">Send Transaction</button>
    </form>
  );
}

export default TransactionForm;
