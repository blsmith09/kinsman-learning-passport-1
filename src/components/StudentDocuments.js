import React, { useState } from "react";
import "../styles/studentdocuments.css";

export default function StudentDocuments() {
  const [tab, setTab] = useState("upload");

  // Placeholder for document type options; replace with API/data as needed
  const documentTypeOptions = [
    { value: "", label: "Select document type" },
    { value: "transcript", label: "Transcript" },
    { value: "certificate", label: "Certificate" },
    { value: "research", label: "Research Paper" },
    // ...add or fetch real document types as needed
  ];

  // Form states (placeholder, not wired to backend)
  const [form, setForm] = useState({
    file: null,
    type: "",
    title: "",
    description: "",
  });

  // File input handler
  const handleFileChange = (e) => {
    setForm({ ...form, file: e.target.files[0] || null });
  };

  // Simple form change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Prevent submit, placeholder only
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add upload logic here later
    alert("Submission not yet implemented.");
  };

  return (
    <div className="student-documents-container">
      {/* Header */}
      <div className="documents-header">
        <div className="documents-title">Document Management</div>
        <div className="documents-subtitle">
          Upload and track verification status of your academic documents
        </div>
      </div>

      {/* Tabs and actions */}
      <div className="documents-tabs-bar">
        <div className="tabs-row">
          <button
            className={`documents-tab${tab === "upload" ? " active" : ""}`}
            onClick={() => setTab("upload")}
            type="button"
          >
            <span className="material-icons" style={{ fontSize: 18, marginRight: 8 }}>upload</span>
            Upload Document
          </button>
          <button
            className={`documents-tab${tab === "requests" ? " active" : ""}`}
            onClick={() => setTab("requests")}
            type="button"
          >
            <span className="material-icons" style={{ fontSize: 18, marginRight: 8 }}>list</span>
            My Requests
          </button>
        </div>
        <button className="documents-refresh-btn" title="Refresh" type="button">
          <span className="material-icons" style={{ fontSize: 20 }}>refresh</span> Refresh
        </button>
      </div>

      {/* Main content */}
      <div className="documents-main-row">
        {/* Left: Upload Form or Requests */}
        <div className="documents-main-col">
          {tab === "upload" ? (
            <div className="documents-card upload-card">
              <div className="documents-card-title">
                <span className="material-icons" style={{ marginRight: 8 }}>cloud_upload</span>
                Upload Document for Verification
              </div>
              <div className="documents-card-subtitle">
                Upload your academic documents to request official verification. Accepted formats: PDF, Word, PowerPoint, Images, Video, Audio (max 10MB).
              </div>
              <form className="documents-form" onSubmit={handleSubmit} autoComplete="off">
                {/* Document File */}
                <label className="documents-label">
                  Document File <span style={{ color: "#ec3848" }}>*</span>
                </label>
                <input
                  className="documents-input"
                  type="file"
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png,.gif,.mp4,.mov,.avi,.mp3,.wav,.m4a"
                  onChange={handleFileChange}
                  required
                />

                {/* Document Type */}
                <label className="documents-label">
                  Document Type <span style={{ color: "#ec3848" }}>*</span>
                </label>
                <select
                  className="documents-input"
                  name="type"
                  value={form.type}
                  onChange={handleInputChange}
                  required
                >
                  {documentTypeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>

                {/* Document Title */}
                <label className="documents-label">
                  Document Title <span style={{ color: "#ec3848" }}>*</span>
                </label>
                <input
                  className="documents-input"
                  name="title"
                  placeholder="e.g., BSc Computer Science Final Transcript"
                  value={form.title}
                  onChange={handleInputChange}
                  required
                />

                {/* Description */}
                <label className="documents-label">Description (Optional)</label>
                <textarea
                  className="documents-input"
                  name="description"
                  placeholder="Additional information about this document..."
                  value={form.description}
                  onChange={handleInputChange}
                  rows={3}
                />
                <button className="documents-submit-btn" type="submit">
                  <span className="material-icons" style={{ fontSize: 18, marginRight: 8 }}>upload</span>
                  Submit for Verification
                </button>
              </form>
            </div>
          ) : (
            // Requests tab
            <div className="documents-card requests-card">
              <div className="documents-card-title">
                <span className="material-icons" style={{ marginRight: 8 }}>description</span>
                Document Verification Requests
              </div>
              <div className="documents-card-subtitle">
                Track the status of your document verification requests
              </div>
              {/* Empty state, show this if there are no requests */}
              <div className="requests-empty-state">
                <span className="material-icons" style={{ fontSize: 58, color: "#d5dae5" }}>insert_drive_file</span>
                <div className="requests-empty-title">No verification requests yet</div>
                <div className="requests-empty-desc">Upload your first document to get started</div>
              </div>
            </div>
          )}
        </div>

        {/* Right: Process Sidebar */}
        {tab === "upload" && (
          <div className="documents-main-col right-sidebar">
            <div className="documents-card process-card">
              <div className="documents-card-title" style={{ fontSize: "1.17rem", marginBottom: 12 }}>
                <span className="material-icons" style={{ marginRight: 8 }}>task_alt</span>
                Verification Process
              </div>
              <div style={{ marginBottom: 18, color: "#56607b" }}>
                Track your document verification progress
              </div>
              <div className="documents-process-section">
                <div className="process-stage"><span className="process-dot dot-green" /> Submitted Successfully</div>
                <div className="process-stage"><span className="process-dot dot-yellow" /> Reviewing</div>
                <div className="process-stage"><span className="process-dot dot-blue" /> Reviewed</div>
                <div className="process-stage"><span className="process-dot dot-green" /> Verified</div>
              </div>
              <div className="documents-process-section">
                <div className="process-label">Document Types</div>
                <ul className="process-types-list">
                  <li>Project reports</li>
                  <li>Presentations</li>
                  <li>Research papers</li>
                  <li>Academic posters</li>
                  <li>Coursework assignments</li>
                  <li>Dissertations/thesis</li>
                  <li>Course projects</li>
                </ul>
              </div>
              <div className="documents-process-section">
                <div className="process-label">Accepted File Types</div>
                <ul className="process-types-list">
                  <li>Documents: PDF, Word (.doc, .docx)</li>
                  <li>Images: JPG, PNG, GIF</li>
                  <li>Video: MP4, MOV, AVI</li>
                  <li>Audio: MP3, WAV, M4A</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
