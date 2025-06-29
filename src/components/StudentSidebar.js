import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/sidebar.css"; // or studentsidebar.css if you want different styles

export default function StudentSidebar({ onLogout, student }) {
  const navigate = useNavigate();
  const isTestUser = sessionStorage.getItem("isTestUser") === "true";

  const handleLogout = () => {
    sessionStorage.removeItem("isTestUser");
    if (onLogout) onLogout();
  };

  // For switching roles in test/dev mode
  const switchToRecruiterView = () => {
    sessionStorage.setItem("userRole", "recruiter");
    window.location.href = "/dashboard"; // Force reload for clean sidebar swap
  };
  const switchToAdminView = () => {
    sessionStorage.setItem("userRole", "admin");
    window.location.href = "/dashboard";
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo-circle">
          <span className="material-icons">gavel</span>
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
          <div className="sidebar-role">Student User</div>
          <div className="sidebar-org">
            {/* Display student's name if available, fallback to generic */}
            {student?.name || "Student Name"}
          </div>
        </div>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li onClick={() => navigate("/dashboard")} className="nav-item">
            <span className="material-icons">dashboard</span> My Dashboard
          </li>
          <li onClick={() => navigate("/academic-records")} className="nav-item">
            <span className="material-icons">description</span> Academic Records
          </li>
          <li onClick={() => navigate("/wallet")} className="nav-item">
            <span className="material-icons">account_balance_wallet</span> My Wallet
          </li>
          <li onClick={() => navigate("/manage-access")} className="nav-item">
            <span className="material-icons">share</span> Manage Access
          </li>
          <li onClick={() => navigate("/my-employment")} className="nav-item">
            <span className="material-icons">work</span> My Employment
          </li>
          <li onClick={() => navigate("/documents")} className="nav-item">
            <span className="material-icons">folder</span> Documents
          </li>
          <li onClick={() => navigate("/nft-distribution")} className="nav-item">
            <span className="material-icons">send</span> NFT Distribution
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
            <button className="sidebar-btn" onClick={switchToAdminView}>
              <span className="material-icons">admin_panel_settings</span> Switch to Admin View
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
