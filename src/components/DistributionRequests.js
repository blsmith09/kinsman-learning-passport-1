import React from "react";
import "../styles/distributionrequests.css";

export default function DistributionRequests() {
  // Placeholder data: set to empty to simulate "no distribution requests found"
  const distributionRequests = []; // Replace with real data from API when connected

  // Stats
  const pending = distributionRequests.filter(req => req.status === "pending").length;
  const approved = distributionRequests.filter(req => req.status === "approved").length;
  const rejected = distributionRequests.filter(req => req.status === "rejected").length;
  const totalCost = distributionRequests.reduce((sum, req) => sum + (req.costUsd || 0), 0);

  return (
    <div className="distribution-requests-container">
      <div className="distribution-requests-header">
        <h1>Distribution Requests</h1>
        <div className="distribution-requests-desc">
          Manage student requests for off-cycle NFT distribution
        </div>
      </div>

      <div className="distribution-requests-cards">
        <div className="distribution-requests-card">
          <div className="distribution-requests-card-label">Pending Requests</div>
          <div className="distribution-requests-card-value orange">
            {pending}
          </div>
        </div>
        <div className="distribution-requests-card">
          <div className="distribution-requests-card-label">Approved Requests</div>
          <div className="distribution-requests-card-value green">
            {approved}
          </div>
        </div>
        <div className="distribution-requests-card">
          <div className="distribution-requests-card-label">Rejected Requests</div>
          <div className="distribution-requests-card-value orange">
            {rejected}
          </div>
        </div>
        <div className="distribution-requests-card">
          <div className="distribution-requests-card-label">Total Cost (USD)</div>
          <div className="distribution-requests-card-value purple">
            ${totalCost.toFixed(4)}
          </div>
        </div>
      </div>

      <div className="distribution-requests-main">
        {distributionRequests.length === 0 ? (
          <div className="distribution-requests-empty">
            <div className="distribution-requests-empty-icon">
              <span className="material-icons" style={{ fontSize: 48, opacity: 0.32 }}>
                description
              </span>
            </div>
            <div className="distribution-requests-empty-title">
              No distribution requests found
            </div>
            <div className="distribution-requests-empty-desc">
              Students can request off-cycle distribution from their dashboard
            </div>
          </div>
        ) : (
          // Add your table/list rendering here if you connect real data
          <div>Table of requests here</div>
        )}
      </div>
    </div>
  );
}
