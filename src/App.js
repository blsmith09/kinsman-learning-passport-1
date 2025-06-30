import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import StudentSidebar from "./components/StudentSidebar";
import AdministratorSidebar from "./components/AdministratorSidebar";
import RecruiterDashboard from "./components/RecruiterDashboard";
import StudentDashboard from "./components/StudentDashboard";
import AcademicRecords from "./components/AcademicRecords";
import AcademicManagement from "./components/AcademicManagement";
import StudentRecords from "./components/StudentRecords";
import NFTDiplomaManagement from "./components/NFTDiplomaManagement";
import AdminDocumentManagement from "./components/AdminDocumentManagement";
import DocumentVerificationReview from "./components/DocumentVerificationReview";
import TokenQueueManagement from "./components/TokenQueueManagement";
import DistributionRequests from "./components/DistributionRequests";
import OrganizationMembers from "./components/OrganizationMembers"; // <-- NEW
import MyWallet from "./components/MyWallet";
import ManageMyDay from "./components/ManageMyDay";
import ManageMyPipeline from "./components/ManageMyPipeline";
import ManageMyActivities from "./components/ManageMyActivities";
import ManageMyOpportunities from "./components/ManageMyOpportunities";
import MyEmployment from "./components/MyEmployment";
import TalentSearch from "./components/TalentSearch";
import AccessRequests from "./components/AccessRequests";
import StudentManageAccess from "./components/StudentManageAccess";
import StudentDocuments from "./components/StudentDocuments";
import StudentNFTDistributionRequests from "./components/StudentNFTDistributionRequests";
import AdministratorDashboard from "./components/AdministratorDashboard";
import "./styles/dashboard.css";
import "./styles/studentdocuments.css";
import "./styles/studentnftdistributionrequests.css";
import "./styles/administratordashboard.css";
import "./styles/academicmanagement.css";
import "./styles/studentrecords.css";
import "./styles/nftdiplomamanagement.css";
import "./styles/admindocumentmanagement.css";
import "./styles/documentverificationreview.css";
import "./styles/tokenqueuemanagement.css";
import "./styles/distributionrequests.css";
import "./styles/organizationmembers.css"; // <-- NEW

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(() =>
    sessionStorage.getItem("isLoggedIn") === "true"
  );
  const [role, setRole] = React.useState(() =>
    sessionStorage.getItem("userRole") || "recruiter"
  );
  const [isTestUser, setIsTestUser] = React.useState(() =>
    sessionStorage.getItem("isTestUser") === "true"
  );

  React.useEffect(() => {
    const handler = () => {
      setRole(sessionStorage.getItem("userRole") || "recruiter");
      setIsTestUser(sessionStorage.getItem("isTestUser") === "true");
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  // --------- FIXED handleLogin -------------
  const handleLogin = (loginRole) => {
    sessionStorage.setItem("isLoggedIn", "true");
    if (loginRole) sessionStorage.setItem("userRole", loginRole);
    setIsLoggedIn(true);
    setRole(loginRole || "recruiter");
    setIsTestUser(sessionStorage.getItem("isTestUser") === "true");
  };
  // -----------------------------------------

  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("userRole");
    sessionStorage.removeItem("isTestUser");
    setIsLoggedIn(false);
    setRole("recruiter");
    setIsTestUser(false);
  };

  const handleConnectWallet = () => {
    alert("Wallet connect coming soon!");
  };

  function getSidebarByRole(role, onLogout) {
    if (role === "student") return <StudentSidebar onLogout={onLogout} />;
    if (role === "admin" || isTestUser) return <AdministratorSidebar onLogout={onLogout} />;
    return <Sidebar onLogout={onLogout} />;
  }

  function getDashboardByRole(role) {
    if (role === "student") return <StudentDashboard />;
    if (role === "admin" || isTestUser) return <AdministratorDashboard />;
    return <RecruiterDashboard />;
  }

  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">{getDashboardByRole(role)}</main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Academic Records */}
        <Route
          path="/academic-records"
          element={
            isLoggedIn ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">
                  <AcademicRecords />
                </main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Academic Management (ADMIN ONLY) */}
        <Route
          path="/academic-management"
          element={
            isLoggedIn && (role === "admin" || isTestUser) ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">
                  <AcademicManagement />
                </main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Student Records (ADMIN ONLY) */}
        <Route
          path="/student-records"
          element={
            isLoggedIn && (role === "admin" || isTestUser) ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">
                  <StudentRecords />
                </main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* NFT Diploma Management (ADMIN ONLY) */}
        <Route
          path="/nft-diplomas"
          element={
            isLoggedIn && (role === "admin" || isTestUser) ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">
                  <NFTDiplomaManagement />
                </main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Admin Document Management (ADMIN ONLY) */}
        <Route
          path="/upload-documents"
          element={
            isLoggedIn && (role === "admin" || isTestUser) ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">
                  <AdminDocumentManagement />
                </main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Document Verification Review (ADMIN ONLY) */}
        <Route
          path="/document-review"
          element={
            isLoggedIn && (role === "admin" || isTestUser) ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">
                  <DocumentVerificationReview requests={[]} />
                </main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Token Queue Management (ADMIN ONLY) */}
        <Route
          path="/token-queue"
          element={
            isLoggedIn && (role === "admin" || isTestUser) ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">
                  <TokenQueueManagement />
                </main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Distribution Requests (ADMIN ONLY) */}
        <Route
          path="/distribution-requests"
          element={
            isLoggedIn && (role === "admin" || isTestUser) ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">
                  <DistributionRequests />
                </main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Organization Members (ADMIN ONLY) */}
        <Route
          path="/organization-members"
          element={
            isLoggedIn && (role === "admin" || isTestUser) ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">
                  <OrganizationMembers members={[]} /> {/* <-- Replace with actual member data */}
                </main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* My Wallet */}
        <Route
          path="/wallet"
          element={
            isLoggedIn ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">
                  <MyWallet onConnectWallet={handleConnectWallet} />
                </main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Student Manage Access */}
        <Route
          path="/manage-access"
          element={
            isLoggedIn ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">
                  {role === "student" ? <StudentManageAccess /> : <AccessRequests />}
                </main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* My Employment */}
        <Route
          path="/my-employment"
          element={
            isLoggedIn ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">
                  <MyEmployment />
                </main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Student Documents */}
        <Route
          path="/documents"
          element={
            isLoggedIn ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">
                  <StudentDocuments />
                </main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* NFT Distribution Requests */}
        <Route
          path="/nft-distribution"
          element={
            isLoggedIn ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">
                  <StudentNFTDistributionRequests />
                </main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin-dashboard"
          element={
            isLoggedIn && (role === "admin" || isTestUser) ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">
                  <AdministratorDashboard />
                </main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Manage My Day */}
        <Route
          path="/manage-my-day"
          element={
            isLoggedIn ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">
                  <ManageMyDay />
                </main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Manage My Pipeline */}
        <Route
          path="/manage-my-pipeline"
          element={
            isLoggedIn ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">
                  <ManageMyPipeline />
                </main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Manage My Activities */}
        <Route
          path="/manage-my-activities"
          element={
            isLoggedIn ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">
                  <ManageMyActivities />
                </main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Manage My Opportunities */}
        <Route
          path="/manage-my-opportunities"
          element={
            isLoggedIn ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">
                  <ManageMyOpportunities />
                </main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Talent Search */}
        <Route
          path="/talent-search"
          element={
            isLoggedIn ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">
                  <TalentSearch />
                </main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Access Requests */}
        <Route
          path="/access-requests"
          element={
            isLoggedIn ? (
              <div className="app-layout">
                {getSidebarByRole(role, handleLogout)}
                <main className="main-content">
                  <AccessRequests />
                </main>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Catch-all */}
        <Route
          path="*"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
