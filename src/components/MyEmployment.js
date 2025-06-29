import React, { useState } from "react";
import "../styles/myemployment.css";

export default function MyEmployment() {
  // Placeholder: Replace with real opportunity data via props or hooks
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Leave empty array to test the "No Current Opportunities" message
  const opportunities = [
    // Example: Uncomment for test
    // {
    //   role: "[Job Title Placeholder]",
    //   company: "[Company Name]",
    //   status: "[Status Label]",
    //   statusClass: "opportunity-status",
    //   date: "[YYYY-MM-DD]",
    // },
  ];

  // Placeholder: Stepper
  const steps = [
    { label: "Prepare" },
    { label: "Perform" },
    { label: "Inform" },
    { label: "Improve" },
  ];

  // Placeholder: Interview/Stage detail area
  const renderStageDetails = () => (
    <div className="employment-stage-details">
      <h3 style={{ fontWeight: 700, fontSize: "1.18rem", marginBottom: 8 }}>
        {selectedIndex + 1}. {steps[selectedIndex].label} – [Stage Name/Overview Placeholder]
      </h3>
      <div style={{ color: "#56607b", marginBottom: 10 }}>
        Opportunity Details
      </div>
      <div style={{
        background: "#f7fafd",
        borderRadius: 8,
        padding: "1rem 1.1rem",
        color: "#43496b",
        fontSize: "1.03rem"
      }}>
        [Description or requirements/details placeholder]
      </div>
    </div>
  );

  return (
    <div className="my-employment-container">
      {/* Header */}
      <div className="my-employment-header">
        <div className="my-employment-header-icon">
          <span className="material-icons" style={{ fontSize: 28 }}>work_outline</span>
        </div>
        <div>
          <div className="my-employment-title">My Employment</div>
          <div className="my-employment-subtitle">
            Manage your interview workflow from preparation to improvement with comprehensive tracking and feedback.
          </div>
        </div>
      </div>

      {/* Opportunities Section */}
      <div className="employment-opportunities-section">
        <div className="employment-opportunities-title">Current Opportunities</div>
        <div className="opportunity-list">
          {opportunities.length === 0 ? (
            <div
              style={{
                color: "#8b97ab",
                textAlign: "center",
                padding: "2.2rem 0",
                fontWeight: 500,
                fontSize: "1.08rem"
              }}
            >
              No Current Opportunities at this time.
            </div>
          ) : (
            opportunities.map((op, idx) => (
              <div
                key={idx}
                className={`opportunity-card${selectedIndex === idx ? " selected" : ""}`}
                onClick={() => setSelectedIndex(idx)}
              >
                <div className="opportunity-card-info">
                  <div className="opportunity-role">{op.role}</div>
                  <div className="opportunity-company">{op.company}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <span className={op.statusClass}>{op.status}</span>
                  <span className="opportunity-date">{op.date}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Stepper Section (still visible for design consistency, but can hide if you prefer) */}
      <div className="employment-steps-section">
        <div className="steps-row">
          {steps.map((step, idx) => (
            <React.Fragment key={step.label}>
              <div className={`step-indicator${selectedIndex === idx ? " active" : ""}`}>
                <div className="step-circle">{idx + 1}</div>
                <div className="step-label">{step.label}</div>
              </div>
              {idx !== steps.length - 1 && <div className="step-bar"></div>}
            </React.Fragment>
          ))}
        </div>
        {renderStageDetails()}
      </div>
    </div>
  );
}
