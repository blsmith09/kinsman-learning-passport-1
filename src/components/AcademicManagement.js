import React, { useState } from "react";
import "../styles/academicmanagement.css"; // Use the updated CSS provided earlier

export default function AcademicManagement() {
  const [activeTab, setActiveTab] = useState("departments");

  // You can add "showInactive" functionality later
  // const [showInactive, setShowInactive] = useState(false);

  // ---- Tab Content Placeholders ----
  function renderDepartments() {
    // TODO: Replace with real list when you have data
    return (
      <div className="academic-mgmt-empty-state">
        No Departments Added
      </div>
    );
  }

  function renderCourses() {
    // TODO: Replace with real list when you have data
    return (
      <div className="academic-mgmt-empty-state">
        No Courses Added
      </div>
    );
  }

  function renderModules() {
    // TODO: Replace with real list when you have data
    return (
      <div className="academic-mgmt-empty-state">
        No Modules Added
      </div>
    );
  }

  // ---- Main Render ----
  return (
    <div className="academic-mgmt-container">
      <div className="academic-mgmt-header">Academic Management</div>
      <div className="academic-mgmt-subheader">
        Manage departments, courses, and modules
      </div>
      {/* Tabs Row */}
      <div className="academic-mgmt-tabs-row">
        <div className="academic-mgmt-tabs-group">
          <button
            className={
              "academic-mgmt-tab-btn" +
              (activeTab === "departments" ? " active" : "")
            }
            onClick={() => setActiveTab("departments")}
          >
            <span className="material-icons">apartment</span> Departments
          </button>
          <button
            className={
              "academic-mgmt-tab-btn" +
              (activeTab === "courses" ? " active" : "")
            }
            onClick={() => setActiveTab("courses")}
          >
            <span className="material-icons">menu_book</span> Courses
          </button>
          <button
            className={
              "academic-mgmt-tab-btn" +
              (activeTab === "modules" ? " active" : "")
            }
            onClick={() => setActiveTab("modules")}
          >
            <span className="material-icons">description</span> Modules
          </button>
        </div>
        {/* Right side Show Inactive button */}
        <button
          className="academic-mgmt-inactive-btn"
          // onClick={() => setShowInactive((v) => !v)}
        >
          <span className="material-icons">visibility</span> Show Inactive
        </button>
      </div>

      {/* Tab Content */}
      <div style={{ marginTop: "30px" }}>
        {activeTab === "departments" && renderDepartments()}
        {activeTab === "courses" && renderCourses()}
        {activeTab === "modules" && renderModules()}
      </div>
    </div>
  );
}
