import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/sidebar.css";

export default function Sidebar({ onLogout }) {
  const navigate = useNavigate();
  const isTestUser = sessionStorage.getItem("isTestUser") === "true";

  const handleLogout = () => {
    sessionStorage.removeItem("isTestUser");
    if (onLogout) onLogout();
  };

  // Use navigate (no reload needed, keeps you logged in)
  const switchToStudentView = () => {
    sessionStorage.setItem("userRole", "student");
    navigate("/dashboard");
    window.location.reload(); // Optional: Only needed if sidebar doesn't re-render
  };

  const switchToAdminView = () => {
    sessionStorage.setItem("userRole", "admin");
    navigate("/dashboard");
    window.location.reload(); // Optional: Only needed if sidebar doesn't re-render
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
          <div className="sidebar-role">Recruiter</div>
          <div className="sidebar-org">Russell Group Recruiter</div>
        </div>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li onClick={() => navigate("/dashboard")} className="nav-item">
            <span className="material-icons">dashboard</span> Dashboard
          </li>
          <li onClick={() => navigate("/manage-my-day")} className="nav-item">
            <span className="material-icons">event_note</span> Manage My Day
          </li>
          <li onClick={() => navigate("/manage-my-pipeline")} className="nav-item">
            <span className="material-icons">trending_up</span> Manage My Pipeline
          </li>
          <li onClick={() => navigate("/manage-my-activities")} className="nav-item">
            <span className="material-icons">checklist</span> Manage My Activities
          </li>
          <li onClick={() => navigate("/manage-my-opportunities")} className="nav-item">
            <span className="material-icons">business_center</span> Manage My Opportunities
          </li>
          <li onClick={() => navigate("/talent-search")} className="nav-item">
            <span className="material-icons">search</span> Talent Search
          </li>
          <li onClick={() => navigate("/access-requests")} className="nav-item">
            <span className="material-icons">assignment</span> Access Requests
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
            <button className="sidebar-btn" onClick={switchToStudentView}>
              <span className="material-icons">school</span> Switch to Student View
            </button>
          </>
        )}
      </div>
    </aside>
  );
}
