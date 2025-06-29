import React, { useState, useEffect } from "react";
import "../styles/opportunities.css";

export default function ManageMyOpportunities() {
  // Placeholder: Real data will come from backend/blockchain
  const [stats, setStats] = useState({
    activeOpportunities: 0,
    totalApplicants: 0,
    highSkilledRoles: 0,
    deadlinesApproaching: 0,
  });

  // You’ll use useEffect and fetch (or your API/blockchain call) later:
  // useEffect(() => {
  //   fetchData().then(data => setStats(data));
  // }, []);

  const statMeta = [
    {
      icon: <span className="material-icons" style={{ color: "#30C088" }}>inventory_2</span>,
      label: "Active Opportunities",
      value: stats.activeOpportunities
    },
    {
      icon: <span className="material-icons" style={{ color: "#377DFF" }}>groups</span>,
      label: "Total Applicants",
      value: stats.totalApplicants
    },
    {
      icon: <span className="material-icons" style={{ color: "#9D4EDD" }}>trending_up</span>,
      label: "High Skilled Roles",
      value: stats.highSkilledRoles
    },
    {
      icon: <span className="material-icons" style={{ color: "#FF8800" }}>schedule</span>,
      label: "Opportunity Deadlines Approaching",
      value: stats.deadlinesApproaching
    }
  ];

  const opportunities = []; // No data yet

  return (
    <div className="opps-main">
      {/* Header */}
      <div className="opps-welcome">
        <div>
          <h2 style={{ margin: 0 }}>Manage My Opportunities</h2>
          <div style={{ fontSize: "1rem", color: "#555" }}>
            Create, track, and manage job opportunities
          </div>
        </div>
        <button className="create-opp-btn">
          <span className="material-icons" style={{ verticalAlign: "middle", marginRight: 6 }}>add</span>
          Create Opportunity
        </button>
      </div>

      {/* Stats Row */}
      <div className="opps-kpi-row">
        {statMeta.map((stat, i) => (
          <div key={i} className="opps-kpi-card">
            <div className="kpi-title">
              <span className="kpi-icon">{stat.icon}</span> {stat.label}
            </div>
            <div className={`kpi-value${stat.label.includes('Deadlines') ? ' kpi-warning' : ''}`}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Search + Filters */}
      <div className="opps-searchbar-row">
        <input
          type="text"
          className="opps-search-input"
          placeholder="Search opportunities by title, company, or location..."
        />
        <select className="opps-filter-select">
          <option>All Status</option>
        </select>
        <select className="opps-filter-select">
          <option>All Types</option>
        </select>
        <button className="opps-filter-btn">
          <span className="material-icons" style={{ fontSize: 20, marginRight: 4 }}>tune</span>
          More Filters
        </button>
      </div>

      {/* Opportunities List or Empty State */}
      {opportunities.length === 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "5rem",
            color: "#65757f"
          }}
        >
          <span className="material-icons" style={{ fontSize: 56, color: "#bedae3", marginBottom: 8 }}>
            work_outline
          </span>
          <h2 style={{ fontWeight: 700, color: "#35585a", marginBottom: 8 }}>No Opportunities Found</h2>
          <div>
            There are currently no opportunities to display.<br />
            Click <span style={{ fontWeight: 600, color: "#08b689" }}>+ Create Opportunity</span> to get started!
          </div>
        </div>
      ) : (
        <div className="opps-list">
          {/* Render opportunities here when data is available */}
        </div>
      )}
    </div>
  );
}
