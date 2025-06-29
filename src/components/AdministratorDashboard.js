import React, { useState } from "react";
import "../styles/administratordashboard.css"; // <-- CORRECT PATH

export default function AdministratorDashboard() {
  const [currency, setCurrency] = useState("USD");
  const [activeTab, setActiveTab] = useState("overview");

  // Placeholder: Add your actual data fetching logic here later.
  // const dashboardStats = ...;
  // const modulePerformance = ...;

  function renderOverviewTab() {
    return (
      <>
        {/* --- Metrics Row --- */}
        <div className="admin-metrics-row">
          <div className="admin-metric-card">
            <div className="admin-metric-icon students">
              <span className="material-icons">groups</span>
            </div>
            <div className="admin-metric-label">Total Students</div>
            <div className="admin-metric-value">{/* {dashboardStats.totalStudents} */}</div>
          </div>
          <div className="admin-metric-card">
            <div className="admin-metric-icon documents">
              <span className="material-icons">description</span>
            </div>
            <div className="admin-metric-label">Documents Stored</div>
            <div className="admin-metric-value">{/* {dashboardStats.documentsStored} */}</div>
          </div>
          <div className="admin-metric-card">
            <div className="admin-metric-icon nft">
              <span className="material-icons">smart_display</span>
            </div>
            <div className="admin-metric-label">NFT Diplomas</div>
            <div className="admin-metric-value">{/* {dashboardStats.nftDiplomas} */}</div>
          </div>
          <div className="admin-metric-card">
            <div className="admin-metric-icon storage">
              <span className="material-icons">sync_alt</span>
            </div>
            <div className="admin-metric-label">Blockchain Storage</div>
            <div className="admin-metric-value">{/* {dashboardStats.blockchainStorage} */}</div>
          </div>
        </div>

        {/* --- Organization Credit Balance --- */}
        <div className="admin-credit-card">
          <div className="admin-credit-header">
            <div>
              <div className="admin-credit-title">Organization Credit Balance</div>
              <div className="admin-credit-desc">
                Manage your CRD tokens for credential minting
              </div>
            </div>
            <button className="admin-credit-refresh-btn" onClick={() => alert("Credit refresh coming soon!")}>
              <span className="material-icons" style={{ fontSize: 20 }}>refresh</span> Refresh
            </button>
          </div>
          <div className="admin-credit-balance-row">
            <div className="admin-credit-balance-card">
              <div className="admin-credit-balance-label">
                <span className="material-icons" style={{ color: "#ffe16d" }}>paid</span> CRD Balance
              </div>
              <div className="admin-credit-balance-value">
                {/* {dashboardStats.crdBalance} */}
                10000 <span className="unit">CRD</span>
              </div>
              <div className="admin-credit-mint-note">
                Each credential mint costs 1 CRD
              </div>
            </div>
            <button className="admin-buy-credits-btn" onClick={() => alert("Buy credits coming soon!")}>
              Buy More Credits
            </button>
          </div>
          <div className="admin-currency-row">
            <div className="admin-currency-section">
              <div className="admin-currency-label">Credit Price</div>
              <div className="admin-currency-value">$0.12 per CRD</div>
            </div>
            <div className="admin-currency-section">
              <div className="admin-currency-label">Current Balance Value</div>
              <div className="admin-currency-value">{/* {dashboardStats.currentBalanceValue} */}$0.00</div>
            </div>
            <div className="admin-currency-dropdown">
              <select
                className="admin-currency-select"
                value={currency}
                onChange={e => setCurrency(e.target.value)}
              >
                <option value="USD">$ USD - US Dollar</option>
                <option value="EUR">€ EUR - Euro</option>
                <option value="GBP">£ GBP - British Pound</option>
              </select>
            </div>
          </div>
          <div className="admin-credit-note">
            <b>Note:</b> Each credential mint operation costs 1 CRD token ($0.12). Ensure sufficient balance for continued operations.
          </div>
        </div>
      </>
    );
  }

  function renderModulePerformanceTab() {
    return (
      <div className="admin-card module-performance-table-card">
        <div className="admin-card-title" style={{ marginBottom: 2 }}>Module Performance Analytics</div>
        <div className="admin-card-desc">
          Comprehensive performance analysis across all academic modules
        </div>
        <div className="admin-module-filters">
          <select className="admin-filter-select">
            <option>Sort by Average Grade</option>
          </select>
          <select className="admin-filter-select">
            <option>All Modules</option>
          </select>
        </div>
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>MODULE</th>
                <th>STUDENTS</th>
                <th>AVG GRADE</th>
                <th>PASS RATE</th>
                <th>OUTCOMES DISTRIBUTION</th>
                <th>DIFFICULTY</th>
                <th>FEEDBACK</th>
              </tr>
            </thead>
            <tbody>
              {/* Render your real data rows here */}
              <tr>
                <td colSpan={7} style={{ color: "#b1b5bd", padding: 28, textAlign: "center" }}>
                  No module performance data to display.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // --- MAIN RETURN ---
  return (
    <div className="admin-dashboard-container">
      <div style={{ marginBottom: 8 }}>
        <div className="admin-dashboard-title" style={{ fontSize: "2rem" }}>Admin Dashboard</div>
        <div style={{ color: "#697084", fontSize: "1.08rem", marginTop: 1, fontWeight: 500 }}>
          Manage student records and academic credentials
        </div>
      </div>

      {/* Tabs */}
      <div className="admin-dashboard-tabs-bar" style={{ marginBottom: 24, marginTop: 16 }}>
        <div
          className={`admin-tab-btn ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          Dashboard Overview
        </div>
        <div
          className={`admin-tab-btn ${activeTab === "modules" ? "active" : ""}`}
          onClick={() => setActiveTab("modules")}
        >
          Module Performance
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && renderOverviewTab()}
      {activeTab === "modules" && renderModulePerformanceTab()}
    </div>
  );
}
