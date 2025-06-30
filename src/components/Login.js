import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [role, setRole] = React.useState("recruiter");

  // Handler for normal login
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("isTestUser");
    sessionStorage.setItem("userRole", role);
    if (onLogin) onLogin(role);    // <-- Pass role here!
    navigate("/dashboard");
  };

  // Handler for Test Login
  const handleTestLogin = (e) => {
    e.preventDefault();
    sessionStorage.setItem("isTestUser", "true");
    sessionStorage.removeItem("userRole"); // No role set, will default to recruiter
    if (onLogin) onLogin("recruiter");     // <-- Explicitly pass "recruiter"
    navigate("/dashboard");
  };

  // Placeholder actions
  const handleCreateAccount = () => {
    alert("Account creation is not available in this preview.");
  };
  const handleScheduleCall = () => {
    window.open("mailto:info@yourdomain.com?subject=Onboarding%20Request", "_blank");
  };

  return (
    <div className="login-bg">
      <div className="dev-banner">
        This is a temporary development preview, and these links are not for public use.{" "}
        <a href="#" target="_blank" rel="noopener noreferrer" className="banner-link">
          Deploy your app
        </a>{" "}
        for secure sharing or use an invite link.
      </div>
      <div className="login-center">
        <div className="login-card">
          <div className="login-title">
            <span className="login-logo">L</span>
            <div>
              <h1>Kinsman Learning Passport</h1>
              <p style={{ fontSize: "1em", color: "#3a5973", marginBottom: 0 }}>
                Secure, blockchain-powered credential management
              </p>
            </div>
          </div>
          <h2 className="login-header">Login</h2>
          <p className="login-desc">Access your account to manage your credentials</p>
          <form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="Enter your email" required autoComplete="off" />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Enter your password" required autoComplete="off" />
            <label htmlFor="org">Organization</label>
            <select id="org" required>
              <option value="">Select your organization</option>
              {/* Populate options dynamically if you want */}
            </select>
            <label htmlFor="role" style={{ marginTop: 12 }}>Role</label>
            <select
              id="role"
              value={role}
              onChange={e => setRole(e.target.value)}
              required
              style={{ marginBottom: 12 }}
            >
              <option value="recruiter">Recruiter</option>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
            <button type="submit" className="login-btn">Sign In</button>
          </form>
          <div className="or-divider">OR</div>
          <button className="create-account-btn" onClick={handleCreateAccount}>
            Create New Account
          </button>
        </div>
        <div className="org-call-card">
          <div className="org-call-icon">📅</div>
          <div>
            <strong>Organization not listed?</strong>
            <p>Schedule a call to get your institution onboarded</p>
            <button className="schedule-call-btn" onClick={handleScheduleCall}>
              Schedule a Call
            </button>
          </div>
        </div>
        {/* Test login link (bottom right) */}
        <a
          href="#"
          className="test-login-link"
          style={{
            position: "fixed",
            bottom: 10,
            right: 16,
            fontSize: "1em",
            color: "#9ca6b5",
            textDecoration: "underline",
            zIndex: 50
          }}
          onClick={handleTestLogin}
        >
          Test Login
        </a>
      </div>
    </div>
  );
}