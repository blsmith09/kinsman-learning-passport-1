import React from "react";
import "../styles/studentnftdistributionrequests.css";

export default function StudentNFTDistributionRequests() {
  return (
    <div className="student-nft-container">
      {/* Page Header */}
      <div className="student-nft-header">
        <div className="student-nft-title">NFT Distribution Requests</div>
        <div className="student-nft-subtitle">
          Request immediate distribution of your verified documents as NFT credentials
        </div>
      </div>

      {/* Main Row */}
      <div className="student-nft-main-row">
        {/* Available for Distribution */}
        <div className="student-nft-card">
          <div className="student-nft-card-title">
            <span className="material-icons nft-bolt-icon">bolt</span>
            Available for Distribution
          </div>
          <div className="student-nft-card-subtitle">
            Verified documents that can be requested for NFT distribution
          </div>
          <div className="student-nft-empty-block">
            <span className="material-icons" style={{ fontSize: 50, color: "#c9cdd7" }}>
              insert_drive_file
            </span>
            <div className="student-nft-empty-title">
              No documents available for distribution
            </div>
            <div className="student-nft-empty-desc">
              All verified documents have been distributed or requested
            </div>
          </div>
        </div>

        {/* Request History */}
        <div className="student-nft-card">
          <div className="student-nft-card-title" style={{ color: "#301c67" }}>
            <span className="material-icons nft-history-icon">history</span>
            Request History
          </div>
          <div className="student-nft-card-subtitle">
            Your previous and current distribution requests
          </div>
          <div className="student-nft-empty-block">
            <span className="material-icons" style={{ fontSize: 52, color: "#d6dae5" }}>
              send
            </span>
            <div className="student-nft-empty-title">
              No distribution requests yet
            </div>
            <div className="student-nft-empty-desc">
              Submit your first request to get started
            </div>
          </div>
        </div>
      </div>

      {/* How NFT Distribution Works */}
      <div className="student-nft-how-section">
        <div className="student-nft-how-title">How NFT Distribution Works</div>
        <div className="student-nft-how-row">
          <div className="student-nft-how-step">
            <span className="material-icons nft-step-icon">description</span>
            <div>
              <span className="nft-step-bold">1. Select Document</span>
              <div className="nft-step-desc">
                Choose from your verified academic documents
              </div>
            </div>
          </div>
          <div className="student-nft-how-step">
            <span className="material-icons nft-step-icon">send</span>
            <div>
              <span className="nft-step-bold">2. Submit Request</span>
              <div className="nft-step-desc">
                Specify urgency and provide reason if needed
              </div>
            </div>
          </div>
          <div className="student-nft-how-step">
            <span className="material-icons nft-step-icon">link</span>
            <div>
              <span className="nft-step-bold">3. Receive NFT</span>
              <div className="nft-step-desc">
                Get blockchain-verified credential in your wallet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
