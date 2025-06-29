import React, { useState } from "react";
import "../styles/documentverificationreview.css";

// Props: requests (array of verification requests)
// See example below for data shape (NOT included in production code)
export default function DocumentVerificationReview({ requests = [] }) {
  // Filter logic for tabs
  const [activeTab, setActiveTab] = useState("all");

  // Tab filter
  const getFiltered = () => {
    switch (activeTab) {
      case "pending": return requests.filter(r => r.status === "pending");
      case "inreview": return requests.filter(r => r.status === "inreview");
      case "approved": return requests.filter(r => r.status === "approved");
      case "rejected": return requests.filter(r => r.status === "rejected");
      default: return requests;
    }
  };

  // Tab counts
  const tabCounts = {
    all: requests.length,
    pending: requests.filter(r => r.status === "pending").length,
    inreview: requests.filter(r => r.status === "inreview").length,
    approved: requests.filter(r => r.status === "approved").length,
    rejected: requests.filter(r => r.status === "rejected").length,
  };

  // Helper: Render badge
  const statusBadge = (status) => {
    if (status === "pending") return <span className="doc-badge doc-badge-pending"><span className="material-icons">info</span>Pending Review</span>;
    if (status === "inreview") return <span className="doc-badge doc-badge-inreview"><span className="material-icons">schedule</span>In Review</span>;
    if (status === "approved") return <span className="doc-badge doc-badge-approved"><span className="material-icons">check_circle</span>Approved</span>;
    if (status === "rejected") return <span className="doc-badge doc-badge-rejected"><span className="material-icons">cancel</span>Rejected</span>;
    return null;
  };

  return (
    <div className="doc-verification-container">
      <div className="doc-verification-header">
        <h1>Document Verification Review</h1>
        <div className="doc-verification-subtitle">
          Review and approve student document verification requests
        </div>
      </div>
      {/* Pending/Current status summary */}
      <div className="doc-verification-alert">
        <span className="material-icons">info</span>
        <span>
          You have {tabCounts.pending} pending documents waiting for review and {tabCounts.inreview} currently in review.
        </span>
      </div>

      {/* Tabs */}
      <div className="doc-tabs">
        <button className={activeTab === "all" ? "active" : ""} onClick={() => setActiveTab("all")}>
          All Requests <span className="doc-tab-count">{tabCounts.all}</span>
        </button>
        <button className={activeTab === "pending" ? "active" : ""} onClick={() => setActiveTab("pending")}>
          Pending <span className="doc-tab-count">{tabCounts.pending}</span>
        </button>
        <button className={activeTab === "inreview" ? "active" : ""} onClick={() => setActiveTab("inreview")}>
          In Review <span className="doc-tab-count">{tabCounts.inreview}</span>
        </button>
        <button className={activeTab === "approved" ? "active" : ""} onClick={() => setActiveTab("approved")}>
          Approved <span className="doc-tab-count">{tabCounts.approved}</span>
        </button>
        <button className={activeTab === "rejected" ? "active" : ""} onClick={() => setActiveTab("rejected")}>
          Rejected <span className="doc-tab-count">{tabCounts.rejected}</span>
        </button>
      </div>

      <div className="doc-verification-card">
        <div className="doc-verification-card-header">
          <span className="material-icons">description</span>
          <span className="doc-verification-card-title">Document Verification Requests</span>
        </div>
        <div className="doc-verification-card-sub">
          Showing {getFiltered().length} of {tabCounts.all} requests
        </div>
        <div className="doc-verification-table-header">
          <span>Student</span>
          <span>Document</span>
          <span>Type</span>
          <span>Status</span>
          <span>Submitted</span>
          <span>Actions</span>
        </div>

        {/* Requests list */}
        {getFiltered().length === 0 ? (
          <div className="doc-verification-empty">There are no document verification requests at this time</div>
        ) : (
          getFiltered().map((req, i) => (
            <div className="doc-verification-row" key={req.id || i}>
              <div>
                <div className="doc-student-name">
                  <span className="material-icons">person</span> <strong>{req.studentName}</strong>
                </div>
                <div className="doc-student-id">ID: {req.studentId}</div>
                <div className="doc-student-meta">{req.program} &bull; {req.year}</div>
              </div>
              <div>
                <div className="doc-doc-title"><strong>{req.documentTitle}</strong></div>
                <div className="doc-doc-filename">{req.fileName}</div>
                <div className="doc-doc-size">{req.fileSize}</div>
                <div className="doc-doc-desc">{req.note}</div>
              </div>
              <div>
                <span className="doc-doc-type">{req.documentType}</span>
              </div>
              <div>
                {statusBadge(req.status)}
              </div>
              <div>
                <div className="doc-doc-date">
                  <span className="material-icons">calendar_month</span> {req.date}
                </div>
                <div className="doc-doc-time">{req.time}</div>
              </div>
              <div className="doc-doc-actions">
                <button className="doc-doc-action">
                  <span className="material-icons">visibility</span> View
                </button>
                <button className="doc-doc-action doc-doc-action-review">
                  Review
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
