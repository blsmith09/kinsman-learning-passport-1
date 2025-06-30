import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/administratorsidebar.css";

export default function AdministratorSidebar({ onLogout }) {
  const navigate = useNavigate();
  const isTestUser = sessionStorage.getItem("isTestUser") === "true";

  // Test/dev mode switches
  const switchToStudentView = () => {
    sessionStorage.setItem("userRole", "student");
    sessionStorage.removeItem("isTestUser"); // Reset if leaving test user
    window.location.href = "/dashboard";
  };
  const switchToRecruiterView = () => {
    sessionStorage.setItem("userRole", "recruiter");
    sessionStorage.removeItem("isTestUser");
    window.location.href = "/dashboard";
  };

  const handleLogout = () => {
    sessionStorage.removeItem("isTestUser");
    if (onLogout) onLogout();
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo-circle">
          <span className="material-icons">account_balance</span>
        </div>
        <div>
          <div className="sidebar-title">Learning</div>
          <div className="sidebar-title passport">Passport</div>
        </div>
      </div>
      <div className="sidebar-profile">
        <div className="sidebar-avatar">
          <span className="material-icons">person</span>
        </div>
        <div>
          <div className="sidebar-role">Admin User</div>
          <div className="sidebar-org">State University</div>
        </div>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li onClick={() => navigate("/dashboard")} className="nav-item">
            <span className="material-icons">dashboard</span> Dashboard
          </li>
          <li onClick={() => navigate("/academic-management")} className="nav-item">
            <span className="material-icons">apartment</span> Academic Management
          </li>
          <li onClick={() => navigate("/student-records")} className="nav-item">
            <span className="material-icons">school</span> Student Records
          </li>
          <li onClick={() => navigate("/nft-diplomas")} className="nav-item">
            <span className="material-icons">smart_display</span> NFT Diplomas
          </li>
          <li onClick={() => navigate("/upload-documents")} className="nav-item">
            <span className="material-icons">cloud_upload</span> Upload Documents
          </li>
          <li onClick={() => navigate("/document-review")} className="nav-item">
            <span className="material-icons">checklist</span> Document Verification Review
          </li>
          <li onClick={() => navigate("/token-queue")} className="nav-item">
            <span className="material-icons">account_tree</span> Token Queue
          </li>
          <li onClick={() => navigate("/distribution-requests")} className="nav-item">
            <span className="material-icons">send</span> Distribution Requests
          </li>
          <li onClick={() => navigate("/organization-members")} className="nav-item">
            <span className="material-icons">groups</span> Organization Members
          </li>
        </ul>
      </nav>
      <div className="sidebar-bottom">
        <button className="sidebar-btn" onClick={handleLogout}>
          <span className="material-icons">logout</span> Logout
        </button>
        <button className="sidebar-btn">
          <span className="material-icons">settings</span> Theme
          <span className="material-icons">dark_mode</span>
        </button>
        {isTestUser && (
          <>
            <button className="sidebar-btn" onClick={switchToStudentView}>
              <span className="material-icons">school</span> Switch to Student View
            </button>
            <button className="sidebar-btn" onClick={switchToRecruiterView}>
              <span className="material-icons">business</span> Switch to Recruiter View
            </button>
          </>
        )}
      </div>
    </aside>
  );
}
