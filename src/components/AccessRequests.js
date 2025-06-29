// src/components/AccessRequests.js
import React from "react";
import "../styles/accessrequests.css"; // Correct import for your CSS!

export default function AccessRequests() {
  // Stats for top cards (will come from backend/blockchain later)
  const requestStats = [
    {
      icon: <span className="material-icons access-kpi-icon access-kpi-pending">schedule</span>,
      label: "Pending Requests",
      value: 0,
    },
    {
      icon: <span className="material-icons access-kpi-icon access-kpi-granted">check_circle</span>,
      label: "Granted Access",
      value: 0,
    },
    {
      icon: <span className="material-icons access-kpi-icon access-kpi-declined">cancel</span>,
      label: "Declined Requests",
      value: 0,
    },
    {
      icon: <span className="material-icons access-kpi-icon access-kpi-expiring">warning</span>,
      label: "Expiring Soon",
      value: 0,
    }
  ];

  // You will fetch these from your API/blockchain later
  const allRequests = {
    pending: [],      // Fill with objects like { ... }
    granted: [],
    declined: [],
    expiring: [],
  };

  // Tab state logic
  const tabs = [
    { label: "Pending", key: "pending" },
    { label: "Recently Granted", key: "granted" },
    { label: "Declined", key: "declined" },
    { label: "Expiring Soon", key: "expiring" },
  ];
  const [activeTab, setActiveTab] = React.useState("pending");

  // Helper for tab counts (for badge display)
  const getTabCount = key => allRequests[key]?.length || 0;

  // Current requests for this tab
  const requestsToShow = allRequests[activeTab];

  // Do we have *no* requests at all, across all tabs?
  const isEmpty = tabs.every(tab => getTabCount(tab.key) === 0);

  return (
    <div className="access-main">
      {/* Header */}
      <div className="access-header">
        <h2 style={{ margin: 0 }}>Access Requests</h2>
        <div style={{ fontSize: "1rem", color: "#555" }}>
          Manage student record access requests and permissions across your recruitment activities.
        </div>
      </div>

      {/* KPI Cards */}
      <div className="access-kpi-row">
        {requestStats.map((stat, i) => (
          <div className="access-kpi-card" key={i}>
            <div className="access-kpi-title">
              {stat.icon}
              {stat.label}
            </div>
            <div className="access-kpi-value">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="access-tabs">
        {tabs.map(tab => (
          <div
            key={tab.key}
            className={`access-tab${activeTab === tab.key ? " active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
            style={{ cursor: "pointer" }}
          >
            {tab.label}
            {getTabCount(tab.key) > 0 && (
              <span style={{
                fontWeight: 700,
                color: "#08b689",
                marginLeft: 7,
                fontSize: ".98em"
              }}>
                ({getTabCount(tab.key)})
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Requests List */}
      <div className="access-request-list">
        {isEmpty ? (
          <div className="access-empty-state">
            <span className="material-icons">contact_mail</span>
            <div className="access-empty-title">No Outstanding Access Requests</div>
            <div className="access-empty-description">
              There are currently no outstanding access requests to display.<br />
              When you request access to student records, requests will appear here!
            </div>
          </div>
        ) : (
          requestsToShow.map(req => (
            <div className="access-request-card" key={req.id}>
              {/* Render request details here in the future */}
              {/* Example fields: req.studentId, req.status, req.type, req.dateRequested, etc. */}
              <div className="access-request-top">
                <div>
                  <span className="access-request-title">{req.studentId}</span>
                  <span className={`access-request-status ${req.status}`}>{req.status}</span>
                </div>
                {/* ...additional meta, buttons etc */}
              </div>
              <div className="access-request-detail">
                Request Type: {req.type} <br />
                Requested At: {req.dateRequested}
              </div>
              <div className="access-request-actions">
                <button className="access-action-btn nudge">Nudge</button>
                <button className="access-action-btn contact">Contact</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
