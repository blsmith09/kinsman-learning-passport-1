import React from "react";
import "../styles/studentmanageaccess.css";

export default function StudentManageAccess() {
  // Example tab state
  const [activeTab, setActiveTab] = React.useState("pending");

  // Tab labels and placeholder counts (replace with real values)
  const tabs = [
    { key: "pending", label: "Pending", count: 0 },
    { key: "active", label: "Active Access", count: 0 },
    { key: "declined", label: "Recently Declined", count: 0 },
    { key: "history", label: "History", count: 0 }
  ];

  // Placeholder stats (replace with real values)
  const stats = [
    { icon: "pending", label: "Pending Requests", value: 0, valueClass: "" },
    { icon: "check_circle", label: "Active Access", value: 0, valueClass: "stat-card-value--success" },
    { icon: "cancel", label: "Recently Declined", value: 0, valueClass: "stat-card-value--error" },
    { icon: "group", label: "Total Recruiters", value: 0, valueClass: "stat-card-value--info" }
  ];

  // Placeholder: empty lists for all tabs, so "no requests" message appears
  const requests = {
    pending: [],
    active: [],
    declined: [],
    history: []
  };

  return (
    <div className="manage-access-container">
      {/* Header */}
      <div className="manage-access-header-card">
        <div className="manage-access-header-icon">
          <span className="material-icons" style={{ fontSize: 26 }}>verified_user</span>
        </div>
        <div>
          <div className="manage-access-title">Manage Access</div>
          <div className="manage-access-subtitle">
            Control who can access your academic records and profile information
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="manage-access-stats-row">
        {stats.map((stat, idx) => (
          <div className="manage-access-stat-card" key={idx}>
            <span className="material-icons stat-card-icon">{stat.icon}</span>
            <div>
              <div className={`stat-card-value ${stat.valueClass}`}>{stat.value}</div>
              <div className="stat-card-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="manage-access-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`manage-access-tab${activeTab === tab.key ? " active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
            type="button"
          >
            {tab.label}
            <span className="tab-count">{tab.count}</span>
          </button>
        ))}
      </div>

      {/* Main Tab Panels */}
      <div className="manage-access-list">
        {activeTab === "pending" && (
          <div>
            <div className="pending-requests-title">Pending Access Requests</div>
            {requests.pending.length === 0 ? (
              <div className="no-access-requests-msg">
                <span className="material-icons" style={{ color: "#b0b8c9", fontSize: 32, marginBottom: 8 }}>hourglass_empty</span>
                <div>No Access Requests at This Time</div>
              </div>
            ) : (
              // Map through requests.pending here in future
              <div className="access-request-card">
                {/* ...access request card... */}
              </div>
            )}
          </div>
        )}

        {activeTab === "active" && (
          <div>
            <div className="pending-requests-title">Active Access</div>
            {requests.active.length === 0 ? (
              <div className="no-access-requests-msg">
                <span className="material-icons" style={{ color: "#b0b8c9", fontSize: 32, marginBottom: 8 }}>vpn_key_off</span>
                <div>No Access Requests at This Time</div>
              </div>
            ) : (
              <div className="access-request-card">{/* ... */}</div>
            )}
          </div>
        )}

        {activeTab === "declined" && (
          <div>
            <div className="pending-requests-title">Recently Declined</div>
            {requests.declined.length === 0 ? (
              <div className="no-access-requests-msg">
                <span className="material-icons" style={{ color: "#b0b8c9", fontSize: 32, marginBottom: 8 }}>block</span>
                <div>No Access Requests at This Time</div>
              </div>
            ) : (
              <div className="access-request-card">{/* ... */}</div>
            )}
          </div>
        )}

        {activeTab === "history" && (
          <div>
            <div className="pending-requests-title">Access Request History</div>
            {requests.history.length === 0 ? (
              <div className="no-access-requests-msg">
                <span className="material-icons" style={{ color: "#b0b8c9", fontSize: 32, marginBottom: 8 }}>history</span>
                <div>No Access Requests at This Time</div>
              </div>
            ) : (
              <div className="access-request-card">{/* ... */}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
