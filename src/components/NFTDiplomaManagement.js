import React from "react";
import "../styles/nftdiplomamanagement.css";

export default function NFTDiplomaManagement() {
  // Placeholder for real template and diploma data (fetched from API in the future)
  const nftTemplates = []; // ← Should be fetched via API call
  const recentDiplomas = []; // ← Should be fetched via API call

  return (
    <div className="nftdiploma-container">
      <div className="nftdiploma-header-row">
        <div>
          <div className="nftdiploma-title">NFT Diplomas</div>
          <div className="nftdiploma-desc">Create and manage blockchain-verified diplomas</div>
        </div>
        <button className="nftdiploma-create-btn" disabled>
          <span className="material-icons">add</span> Create New NFT
        </button>
      </div>

      <div className="nftdiploma-section">
        <div className="nftdiploma-section-title">Diploma Templates</div>
        <div className="nftdiploma-section-desc">
          Select a template to use for new diplomas
        </div>
        <div className="nftdiploma-templates-row">
          {nftTemplates.length === 0 ? (
            <div className="nftdiploma-empty-state">No NFT templates added yet</div>
          ) : (
            // When real data, map over nftTemplates
            nftTemplates.map((tpl) => (
              <div key={tpl.id} className="nftdiploma-template-card">
                {/* Render template content */}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="nftdiploma-section">
        <div className="nftdiploma-section-title">Recently Created NFT Diplomas</div>
        <div className="nftdiploma-recent-list">
          {recentDiplomas.length === 0 ? (
            <div className="nftdiploma-empty-state">No diplomas minted yet</div>
          ) : (
            // When real data, map over recentDiplomas
            recentDiplomas.map((dip) => (
              <div key={dip.id} className="nftdiploma-recent-card">
                {/* Render diploma content */}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
