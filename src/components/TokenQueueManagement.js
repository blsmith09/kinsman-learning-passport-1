import React from "react";
import "../styles/tokenqueuemanagement.css";

export default function TokenQueueManagement() {
  // For a real app, fetch or pass these as props
  const stats = {
    totalQueued: 0,
    pending: 0,
    scheduled: 0,
    gasFee: 0,
    successRate: 0,
    currency: "USD",
    gwei: "0",
  };

  // Table headers for queue items
  const queueHeaders = [
    "Student",
    "Token",
    "Type",
    "Status",
    "Scheduled Date",
    "Gas Fee",
    "Wallet Address",
    "Actions",
  ];

  return (
    <div className="token-queue-container">
      <div className="token-queue-header">
        <h1>Token Queue Management</h1>
        <div className="token-queue-subtitle">
          Manage NFTs awaiting distribution to student wallets
        </div>
        <div className="token-queue-header-actions">
          <select className="token-queue-currency">
            <option>$ USD</option>
          </select>
          <button className="token-queue-settings-btn">
            <span className="material-icons">settings</span>
            Distribution Settings
          </button>
        </div>
      </div>
      <div className="token-queue-stats-grid">
        <div className="token-queue-stat-card">
          <div className="token-queue-stat-title">Total Queued</div>
          <div className="token-queue-stat-value">{stats.totalQueued}</div>
          <div className="token-queue-stat-desc">NFTs in queue</div>
        </div>
        <div className="token-queue-stat-card highlight-purple">
          <div className="token-queue-stat-title">Next Push Gas Fee</div>
          <div className="token-queue-stat-value token-queue-gwei">
            {stats.gwei} Gwei
          </div>
          <div className="token-queue-stat-subvalue">${stats.gasFee.toFixed(6)}</div>
          <div className="token-queue-stat-desc">Next 24h distribution</div>
        </div>
        <div className="token-queue-stat-card">
          <div className="token-queue-stat-title">
            <span className="material-icons pending-icon">schedule</span>
            Pending
          </div>
          <div className="token-queue-stat-value">{stats.pending}</div>
          <div className="token-queue-stat-desc">Awaiting schedule</div>
        </div>
        <div className="token-queue-stat-card">
          <div className="token-queue-stat-title">
            <span className="material-icons scheduled-icon">event</span>
            Scheduled
          </div>
          <div className="token-queue-stat-value">{stats.scheduled}</div>
          <div className="token-queue-stat-desc">Ready for distribution</div>
        </div>
        <div className="token-queue-stat-card highlight-green">
          <div className="token-queue-stat-title">
            <span className="material-icons success-icon">check_circle</span>
            Success Rate
          </div>
          <div className="token-queue-stat-value">{stats.successRate}%</div>
          <div className="token-queue-stat-desc">Distribution success</div>
        </div>
      </div>

      {/* Queue Items Section */}
      <div className="token-queue-items-section">
        <div className="token-queue-items-header">
          <div>
            <div className="token-queue-items-title">Queue Items</div>
            <div className="token-queue-items-desc">
              Manage NFT distribution queue and scheduling
            </div>
          </div>
          <div className="token-queue-items-filters">
            <input
              className="token-queue-search"
              type="text"
              placeholder="Search by title, student name or email"
            />
            <select className="token-queue-status-dropdown">
              <option>All Status</option>
              {/* Add more filter options if needed */}
            </select>
          </div>
        </div>
        <div className="token-queue-items-table-wrapper">
          <table className="token-queue-items-table">
            <thead>
              <tr>
                {queueHeaders.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* If you have data, map here */}
              <tr>
                <td colSpan={queueHeaders.length} className="token-queue-empty-row">
                  No token queue items found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
