import React from "react";
import "../styles/mywallet.css"; // <-- Updated import path

export default function MyWallet({ onConnectWallet }) {
  // Props or context/hook for wallet address and txs will go here in the future

  return (
    <div className="wallet-container">
      <h2>My Wallet</h2>
      <div className="wallet-subtitle">
        Manage your blockchain credentials wallet
      </div>

      {/* Wallet Info Card */}
      <div className="wallet-card">
        <h3>Wallet Information</h3>
        <div className="wallet-info-placeholder">
          <div className="wallet-icon-placeholder">
            <span className="material-icons" style={{ fontSize: 40, color: "#9ba6bb" }}>
              link
            </span>
          </div>
          <div className="wallet-connect-title">Connect Your Wallet</div>
          <div className="wallet-connect-desc">
            Connect your Ethereum wallet to manage your academic records and credentials on the blockchain.
          </div>
          <button className="wallet-connect-btn" onClick={onConnectWallet}>
            <span className="material-icons" style={{ fontSize: 22, marginRight: 6 }}>link</span>
            Connect Wallet
          </button>
        </div>
      </div>

      {/* Transaction History Card */}
      <div className="wallet-card">
        <h3>Transaction History</h3>
        <div className="wallet-tx-placeholder">
          <span className="material-icons" style={{ fontSize: 36, color: "#9ba6bb" }}>
            receipt_long
          </span>
          <div className="wallet-connect-title">Connect Wallet to View Transactions</div>
          <div className="wallet-connect-desc">
            Your blockchain transaction history will appear here once you connect your wallet.
          </div>
        </div>
        <div className="wallet-tx-footer">
          <span>Showing 1 to 4 of 24 transactions</span>
          <button className="wallet-viewall-btn">View all transactions</button>
        </div>
      </div>
    </div>
  );
}
