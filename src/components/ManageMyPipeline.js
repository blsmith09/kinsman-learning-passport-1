import React from "react";
import "../styles/pipeline.css";

export default function ManageMyPipeline() {
  return (
    <main className="pipeline-main">
      <div className="dev-banner">
        This is a temporary development preview, and these links are not for public use.{" "}
        <a href="#" className="banner-link">Deploy your app</a> for secure sharing or use an invite link.
      </div>

      <section className="pipeline-header-section">
        <h1>Manage My Pipeline</h1>
        <p>Track and manage your recruitment pipeline and candidate progress.</p>
      </section>

      {/* Talent Acquisition Process */}
      <section className="pipeline-process-section">
        <h2 className="pipeline-process-title">Talent Acquisition Process</h2>
        <div className="pipeline-process-grid">
          <div className="pipeline-process-step">
            <span className="process-icon">🔍</span>
            <div>
              <div className="step-title">1. Talent Search</div>
              <div className="step-desc">Discover qualified candidates through blockchain-verified credentials</div>
            </div>
          </div>
          <div className="pipeline-process-step">
            <span className="process-icon">🛡️</span>
            <div>
              <div className="step-title">2. Request Access to Student Chain</div>
              <div className="step-desc">Request permission to view detailed academic records and achievements</div>
            </div>
          </div>
          <div className="pipeline-process-step">
            <span className="process-icon">👤</span>
            <div>
              <div className="step-title">3. Create Lead</div>
              <div className="step-desc">Add promising candidates to your recruitment database</div>
            </div>
          </div>
          <div className="pipeline-process-step">
            <span className="process-icon">🎯</span>
            <div>
              <div className="step-title">4. Match to Opportunity</div>
              <div className="step-desc">Align candidate skills with available positions and requirements</div>
            </div>
          </div>
          <div className="pipeline-process-step">
            <span className="process-icon">📞</span>
            <div>
              <div className="step-title">5. Schedule Call</div>
              <div className="step-desc">Arrange initial screening calls and interviews</div>
            </div>
          </div>
          <div className="pipeline-process-step">
            <span className="process-icon">✅</span>
            <div>
              <div className="step-title">6. Qualify Lead</div>
              <div className="step-desc">Assess candidate fit through structured evaluation process</div>
            </div>
          </div>
          <div className="pipeline-process-step">
            <span className="process-icon">📝</span>
            <div>
              <div className="step-title">7. Present as Candidate</div>
              <div className="step-desc">Submit qualified candidates to client organizations</div>
            </div>
          </div>
          <div className="pipeline-process-step">
            <span className="process-icon">🎉</span>
            <div>
              <div className="step-title">8. Place</div>
              <div className="step-desc">Successfully place candidate in the right role</div>
            </div>
          </div>
          <div className="pipeline-process-step">
            <span className="process-icon">❤️</span>
            <div>
              <div className="step-title">9. Retain</div>
              <div className="step-desc">Ongoing support to ensure successful long-term placement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Management Cards (Summary Placeholders) */}
      <section className="pipeline-summary-section">
        <div className="pipeline-summary-row">
          <div className="pipeline-summary-card">
            <div className="summary-title">Active Pipeline</div>
            {/* Empty for now */}
          </div>
          <div className="pipeline-summary-card">
            <div className="summary-title">This Month</div>
            {/* Empty for now */}
          </div>
          <div className="pipeline-summary-card">
            <div className="summary-title">Performance</div>
            {/* Empty for now */}
          </div>
        </div>
      </section>
    </main>
  );
}
