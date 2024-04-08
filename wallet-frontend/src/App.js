import React, { useState } from 'react';
import WalletConnect from './components/WalletConnect';
import BalanceDisplay from './components/BalanceDisplay';
import TransactionForm from './components/TransactionForm';
// TransactionHistory import removed

function App() {
  const [account, setAccount] = useState(null);

  return (
    <div className="App">
      <h1>Simple Blockchain Wallet</h1>
      <WalletConnect setAccount={setAccount} />
      {account && (
        <>
          <BalanceDisplay account={account} />
          <TransactionForm account={account} />
        </>
      )}
    </div>
  );
}

export default App;
