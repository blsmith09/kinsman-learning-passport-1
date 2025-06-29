import React from "react";
import "../styles/academicrecords.css";  // <-- Corrected path!

// Utility function (placeholder) to fetch real data in future
// Replace with your Web3 or backend hooks/APIs!
const useAcademicRecords = () => {
  // All these are empty/defaults for now. Populate via props or fetch as needed!
  return {
    student: {
      id: "",
      name: "",
      program: "",
      currentYear: "",
      currentAverage: null,
      classification: "",
    },
    degreeProgress: {
      completedCredits: 0,
      totalCredits: 0,
      completedCourses: 0,
      inProgressCourses: 0,
    },
    currentTermModules: [],
    nftCredentials: [],
    credentialTabs: [
      { label: "All", count: 0 },
      { label: "In Wallet", count: 0 },
      { label: "Available", count: 0 },
      { label: "Pending", count: 0 },
    ],
    credentialSections: [],
    courseHistoryTabs: [
      { label: "Completed", count: 0 },
      { label: "In Progress", count: 0 },
      { label: "Planned", count: 0 },
    ],
    courseHistory: [],
  };
};

export default function AcademicRecords() {
  // For now, this just provides structure. Replace these hooks with your data!
  const {
    student,
    degreeProgress,
    currentTermModules,
    nftCredentials,
    credentialTabs,
    credentialSections,
    courseHistoryTabs,
    courseHistory,
  } = useAcademicRecords();

  return (
    <div className="academic-records-container">
      {/* Page Header */}
      <div className="academic-header-card">
        <div>
          <span className="header-icon" role="img" aria-label="Academic">🎓</span>
          <h2>Academic Records & NFT Credentials</h2>
          <div className="subtitle">
            View your academic transcript and blockchain-verified credentials
          </div>
        </div>
        <div className="nft-credentials-link">
          NFT Credentials <span className="nft-count">{nftCredentials.length}</span>
        </div>
      </div>

      {/* Academic Summary and Degree Progress */}
      <div className="summary-row">
        {/* Academic Summary Card */}
        <div className="card summary-card">
          <h3>
            <span role="img" aria-label="Summary">📝</span> Academic Summary
          </h3>
          <div className="summary-details">
            <div>
              <strong>Student ID</strong><br />
              <span>{student.id || "—"}</span>
            </div>
            <div>
              <strong>Programme</strong><br />
              <span>{student.program || "—"}</span>
            </div>
            <div>
              <strong>Current Year</strong><br />
              <span>{student.currentYear || "—"}</span>
            </div>
            <div>
              <strong>Current Average</strong><br />
              <span className="current-average">{student.currentAverage ?? "—"}</span>
            </div>
            <div>
              <strong>Classification</strong><br />
              <span className="classification">{student.classification || "—"}</span>
            </div>
          </div>
        </div>

        {/* Degree Progress Card */}
        <div className="card degree-progress-card">
          <h3>
            <span role="img" aria-label="Progress">📈</span> Degree Progress
          </h3>
          <div className="progress-details">
            <div className="progress-bar-bg">
              <div
                className="progress-bar-fg"
                style={{
                  width: degreeProgress.totalCredits
                    ? `${(degreeProgress.completedCredits / degreeProgress.totalCredits) * 100}%`
                    : "0%",
                }}
              ></div>
            </div>
            <div className="progress-stats">
              <span>
                {degreeProgress.completedCredits}/{degreeProgress.totalCredits} Credits Completed
              </span>
              <span>
                <strong>{degreeProgress.completedCourses}</strong> Completed
              </span>
              <span>
                <strong>{degreeProgress.inProgressCourses}</strong> In Progress
              </span>
            </div>
          </div>
        </div>

        {/* Current Term Card */}
        <div className="card term-card">
          <h3>
            <span role="img" aria-label="Calendar">🗓️</span> Current Term
          </h3>
          <div className="term-modules-list">
            {currentTermModules.length > 0 ? (
              currentTermModules.map((mod, i) => (
                <div className="term-module-row" key={i}>
                  <div>
                    <strong>{mod.code}</strong>
                    <span className="module-title">{mod.title}</span>
                  </div>
                  <span className="module-credits">{mod.credits} credits</span>
                </div>
              ))
            ) : (
              <div className="empty-state">No modules in progress.</div>
            )}
          </div>
        </div>
      </div>

      {/* NFT Credentials & Blockchain Certificates */}
      <div className="card nft-section">
        <h3>
          <span role="img" aria-label="NFT">🪙</span> NFT Credentials & Blockchain Certificates
        </h3>
        {/* Tabs for filtering credentials */}
        <div className="credentials-tabs">
          {credentialTabs.map((tab, i) => (
            <button className="tab-btn" key={i}>
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Credential Sections (Certificates, Diplomas, Papers, etc.) */}
        <div className="credentials-list">
          {credentialSections.length === 0 && (
            <div className="empty-state">No blockchain credentials yet.</div>
          )}
          {credentialSections.map((section, idx) => (
            <div className="credential-section" key={idx}>
              <div className="section-title">
                <span>{section.icon}</span> {section.title} <span className="section-count">({section.items.length})</span>
              </div>
              <div className="section-items">
                {section.items.map((item, j) => (
                  <div className="credential-card" key={j}>
                    <div>
                      <strong>{item.title}</strong>
                      {item.status && (
                        <span className={`status-badge status-${item.status.toLowerCase()}`}>
                          {item.status}
                        </span>
                      )}
                    </div>
                    <div className="credential-meta">
                      {item.issued && <div>Issued: {item.issued}</div>}
                      {item.hash && <div>Hash: {item.hash}</div>}
                      {/* Add blockchain explorer link etc. here */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course History */}
      <div className="card course-history-section">
        <h3>
          <span role="img" aria-label="History">📚</span> Course History
        </h3>
        <div className="course-history-tabs">
          {courseHistoryTabs.map((tab, i) => (
            <button className="tab-btn" key={i}>
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
        <div className="course-history-list">
          {courseHistory.length === 0 && (
            <div className="empty-state">No course history available.</div>
          )}
          {courseHistory.map((course, idx) => (
            <div className="course-row" key={idx}>
              <div>
                <strong>{course.code}</strong> {course.title}
                <div className="course-meta">{course.term} • {course.credits} credits</div>
              </div>
              <div className="course-result">
                {course.grade && (
                  <span className="grade-badge">{course.grade}</span>
                )}
                {typeof course.mark === "number" && (
                  <span className="mark-badge">{course.mark}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
