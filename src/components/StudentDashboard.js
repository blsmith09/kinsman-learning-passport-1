import React from "react";
import "../styles/studentdashboard.css"; // <-- Correct path to CSS

// Example props you might pass in (replace these with real data sources as you connect up)
export default function StudentDashboard({
  academicRecords = [],
  credentials = [],
  activeShares = [],
  gradeDistributionData = null,
  modulePerformanceData = [],
  recentFeedback = [],
  academicProgressData = null,
  learningProgress = [],
  exportPlatforms = [],
  recentActivity = [],
  walletStatus = null,
  onConnectWallet = () => {},
}) {
  // Example empty/placeholder logic for future integration
  // You’ll wire these up to real backend/api data in production
  const hasRecords = academicRecords.length > 0;
  const hasCredentials = credentials.length > 0;
  const hasShares = activeShares.length > 0;
  const hasModulePerformance = modulePerformanceData.length > 0;
  const hasProgress = academicProgressData !== null;
  const hasWallet = walletStatus && walletStatus.connected;

  return (
    <div className="student-dashboard-container">
      {/* Page Title and Cards */}
      <h2 style={{ marginBottom: "1.25rem" }}>Manage your academic records and credentials</h2>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <div className="card-label">Academic Records</div>
          <div className="card-value">
            {hasRecords ? academicRecords.length : <span className="placeholder"></span>}
          </div>
        </div>
        <div className="dashboard-card">
          <div className="card-label">Credentials</div>
          <div className="card-value">
            {hasCredentials ? credentials.length : <span className="placeholder"></span>}
          </div>
        </div>
        <div className="dashboard-card">
          <div className="card-label">Active Shares</div>
          <div className="card-value">
            {hasShares ? activeShares.length : <span className="placeholder"></span>}
          </div>
        </div>
      </div>

      {/* Academic Performance and Progress */}
      <section className="academic-overview">
        <h3>Overview of your academic performance and progress</h3>
        <div className="overview-content">
          <div className="grade-distribution">
            {/* Insert a chart/visualization here if gradeDistributionData available */}
            {gradeDistributionData ? (
              <div>
                {/* Replace with chart component */}
                <div className="chart-placeholder">[Grade Chart]</div>
                <div className="avg-grade">{gradeDistributionData.avgGrade} <span>Avg Grade</span></div>
              </div>
            ) : (
              <div className="chart-placeholder">No data available</div>
            )}
          </div>
          <div className="module-performance">
            <div className="module-performance-header">
              <strong>Module Performance</strong>
              <a href="#" className="view-all-link">View All &rarr;</a>
            </div>
            <div className="module-list">
              {hasModulePerformance ? (
                modulePerformanceData.map((mod, idx) => (
                  <div key={mod.id || idx} className="module-row">
                    <div>{mod.name}</div>
                    <div>{mod.grade}</div>
                    <div>{mod.comment || ""}</div>
                  </div>
                ))
              ) : (
                <div className="placeholder">No module results yet.</div>
              )}
            </div>
            {/* Optionally a sparkline or mini-chart for trend */}
            <div className="performance-trend-placeholder">
              {/* Placeholder for performance trend chart */}
              [Performance Trend]
            </div>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="feedback-section">
        <h4>Recent Feedback Highlights</h4>
        <div className="feedback-list">
          {recentFeedback.length > 0 ? (
            recentFeedback.map((item, idx) => (
              <div key={item.id || idx} className="feedback-card">
                <div className="feedback-title">{item.title}</div>
                <div className="feedback-comment">{item.comment}</div>
                <div className="feedback-author">{item.author} • {item.date}</div>
              </div>
            ))
          ) : (
            <div className="placeholder">No feedback yet.</div>
          )}
        </div>
      </section>

      {/* Academic Progress Timeline */}
      <section className="academic-progress-section">
        <h4>Academic Progress</h4>
        {hasProgress ? (
          <div className="progress-bar-wrapper">
            {/* Replace this with a proper progress/timeline bar */}
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: `${academicProgressData.percentComplete || 0}%` }}></div>
            </div>
            <div className="progress-label">{academicProgressData.percentComplete || 0}% Complete</div>
          </div>
        ) : (
          <div className="placeholder">Progress not yet available.</div>
        )}
      </section>

      {/* Learning Progression & Milestones */}
      <section className="learning-progress-section">
        <h4>Your personalized learning progression and milestones</h4>
        <div className="milestones-list">
          {learningProgress.length > 0 ? (
            learningProgress.map((item, idx) => (
              <div key={item.id || idx} className="milestone-card">
                <div className="milestone-title">{item.title}</div>
                <ul>
                  {item.modules && item.modules.map((mod, i) => (
                    <li key={i}>{mod.name} - {mod.grade}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <div className="placeholder">No milestones available.</div>
          )}
        </div>
      </section>

      {/* Export/Sharing Options */}
      <section className="sharing-section">
        <h4>Share your verified achievements across professional platforms</h4>
        <div className="export-platforms">
          {exportPlatforms.length > 0 ? (
            exportPlatforms.map((platform, idx) => (
              <div key={platform.id || idx} className="platform-card">
                <div className="platform-label">{platform.label}</div>
                <button className="platform-action" onClick={platform.onExport || (() => {})}>
                  {platform.actionLabel}
                </button>
              </div>
            ))
          ) : (
            <div className="placeholder">No export options available.</div>
          )}
        </div>
        {/* Quick Export */}
        <div className="quick-export-options">
          <button className="quick-export-btn">Copy JSON</button>
          <button className="quick-export-btn">Export CSV</button>
          <button className="quick-export-btn">Portfolio Sites</button>
        </div>
      </section>

      {/* Recent Activity and Wallet */}
      <section className="recent-activity-section">
        <div className="activity-feed">
          <h4>Recent Activity</h4>
          {recentActivity.length > 0 ? (
            <ul>
              {recentActivity.map((act, idx) => (
                <li key={act.id || idx}>{act.activity} <span className="activity-date">{act.date}</span></li>
              ))}
            </ul>
          ) : (
            <div className="placeholder">No recent activity.</div>
          )}
        </div>
        <div className="wallet-panel">
          {hasWallet ? (
            <div>
              <div>Wallet Connected</div>
              {/* More wallet info/actions */}
            </div>
          ) : (
            <div>
              <div className="wallet-icon-placeholder">[Wallet Icon]</div>
              <div>Connect Your Wallet</div>
              <div>Connect your MetaMask or other Web3 wallet to access your blockchain credentials and academic records securely.</div>
              <button className="connect-wallet-btn" onClick={onConnectWallet}>
                Connect Wallet
              </button>
              <div style={{ marginTop: 16, color: "#888" }}>
                Don&apos;t have a wallet?{" "}
                <a href="https://metamask.io/download.html" target="_blank" rel="noopener noreferrer">
                  Create a MetaMask wallet →
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
