import React, { useState } from "react";
import "../styles/admindocumentmanagement.css";
// import { ReactComponent as UploadIcon } from "../assets/upload.svg"; // Uncomment when you have the SVG

export default function AdminDocumentManagement() {
  // Local states (for demo—connect to API/data in production)
  const [pendingUploads, setPendingUploads] = useState([]);
  const [recentUploads, setRecentUploads] = useState([]);
  const [bulkFiles, setBulkFiles] = useState([]);
  const [singleFile, setSingleFile] = useState(null);

  // For select options
  const departments = [
    { value: "", label: "All departments" },
    // Populate with actual department options
  ];
  const documentTypes = [
    { value: "", label: "Select document type" },
    // Populate with actual types
  ];

  // Handlers
  const handleBulkFileChange = (e) => setBulkFiles([...e.target.files]);
  const handleSingleFileChange = (e) => setSingleFile(e.target.files[0]);
  const handleClearBulk = () => setBulkFiles([]);
  const handleClearSingle = () => setSingleFile(null);

  // Fallback icon while upload.svg is missing
  const UploadIcon = () => (
    <span className="material-icons" style={{ fontSize: 40, opacity: 0.6 }}>
      cloud_upload
    </span>
  );

  return (
    <div className="admin-documents-container">
      {/* --- Top Search --- */}
      <div className="admin-documents-search-row">
        <input
          type="text"
          className="admin-documents-search"
          placeholder="Search and select student"
        />
      </div>

      {/* --- Main Card --- */}
      <div className="admin-documents-main-card">
        {/* --- Add Documents Header --- */}
        <div className="admin-documents-form-row">
          <div className="admin-documents-form-col">
            <label className="admin-documents-label">Document Type</label>
            <select className="admin-documents-select">
              {documentTypes.map(dt => (
                <option key={dt.value} value={dt.value}>{dt.label}</option>
              ))}
            </select>
          </div>
          <div className="admin-documents-form-col">
            <label className="admin-documents-label">Document Title</label>
            <input className="admin-documents-input" placeholder="Enter document title" />
          </div>
        </div>
        {/* --- Upload Section --- */}
        <div className="admin-documents-upload-row">
          <div className="admin-documents-upload-box">
            <div className="admin-documents-upload-center">
              <UploadIcon />
              <div>
                <span className="admin-documents-upload-link">Upload a file</span> or drag and drop
              </div>
              <div className="admin-documents-upload-note">PDF, JPG, PNG up to 10MB</div>
              <input
                type="file"
                className="admin-documents-upload-input"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleSingleFileChange}
                style={{ display: "none" }}
                id="singleFileInput"
              />
              <label htmlFor="singleFileInput" className="admin-documents-upload-btn">
                {singleFile ? singleFile.name : "Choose File"}
              </label>
              {singleFile && (
                <button className="admin-documents-clear-btn" onClick={handleClearSingle}>Remove</button>
              )}
            </div>
          </div>
        </div>
        {/* --- Add Document Button --- */}
        <button className="admin-documents-primary-btn" disabled>
          Add Document
        </button>
        {/* --- Notify Checkbox --- */}
        <div className="admin-documents-checkbox-row">
          <input type="checkbox" id="notifyCheckbox" />
          <label htmlFor="notifyCheckbox">Notify student automatically when documents are uploaded</label>
        </div>
        {/* --- Bulk Upload Button --- */}
        <button className="admin-documents-primary-btn" style={{ marginTop: 12 }} disabled>
          Upload 0 Documents to Blockchain
        </button>
      </div>

      {/* --- Two Columns: Single + Bulk Upload --- */}
      <div className="admin-documents-split-row">
        {/* --- Single Upload --- */}
        <div className="admin-documents-card">
          <div className="admin-documents-card-title">Single Document Upload</div>
          <div className="admin-documents-card-desc">
            Upload a document to a specific student's record
          </div>
          <div className="admin-documents-form-row">
            <input className="admin-documents-input" placeholder="Search and select student" />
            <select className="admin-documents-select">
              {documentTypes.map(dt => (
                <option key={dt.value} value={dt.value}>{dt.label}</option>
              ))}
            </select>
          </div>
          <input className="admin-documents-input" placeholder="Enter document title" />
          {/* --- Single File Upload Area --- */}
          <div className="admin-documents-upload-box">
            <div className="admin-documents-upload-center">
              <UploadIcon />
              <div>
                <span className="admin-documents-upload-link">Upload a file</span> or drag and drop
              </div>
              <div className="admin-documents-upload-note">PDF, JPG, PNG up to 10MB</div>
              <input
                type="file"
                className="admin-documents-upload-input"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleSingleFileChange}
                style={{ display: "none" }}
                id="singleFileInput2"
              />
              <label htmlFor="singleFileInput2" className="admin-documents-upload-btn">
                {singleFile ? singleFile.name : "Choose File"}
              </label>
              {singleFile && (
                <button className="admin-documents-clear-btn" onClick={handleClearSingle}>Remove</button>
              )}
            </div>
          </div>
          <div className="admin-documents-checkbox-row">
            <input type="checkbox" id="notifyCheckbox2" />
            <label htmlFor="notifyCheckbox2">
              Notify student when document is uploaded
            </label>
          </div>
          <button className="admin-documents-primary-btn" disabled>
            Upload Document to Blockchain
          </button>
        </div>
        {/* --- Bulk Upload --- */}
        <div className="admin-documents-card">
          <div className="admin-documents-card-title">Bulk Document Upload</div>
          <div className="admin-documents-card-desc">
            Upload multiple documents and assign to individual students
          </div>
          <div className="admin-documents-form-row">
            <select className="admin-documents-select">
              <option>Leave blank for individual…</option>
            </select>
            <select className="admin-documents-select">
              {departments.map(d => (
                <option key={d.value} value={d.value}>{d.label}</option>
              ))}
            </select>
            <select className="admin-documents-select">
              <option>Choose for each document</option>
            </select>
          </div>
          <div className="admin-documents-upload-box">
            <div className="admin-documents-upload-center">
              <UploadIcon />
              <div>
                <span className="admin-documents-upload-link">Upload files</span> or drag and drop
              </div>
              <div className="admin-documents-upload-note">
                PDF, DOC, DOCX files up to 100MB each
              </div>
              <input
                type="file"
                className="admin-documents-upload-input"
                multiple
                accept=".pdf,.doc,.docx"
                onChange={handleBulkFileChange}
                style={{ display: "none" }}
                id="bulkFileInput"
              />
              <label htmlFor="bulkFileInput" className="admin-documents-upload-btn">
                {bulkFiles.length > 0 ? `${bulkFiles.length} files selected` : "Choose Files"}
              </label>
              {bulkFiles.length > 0 && (
                <button className="admin-documents-clear-btn" onClick={handleClearBulk}>Remove All</button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* --- Pending Uploads --- */}
      <div className="admin-documents-card" style={{ marginTop: 32 }}>
        <div className="admin-documents-card-title">Pending Uploads</div>
        <div className="admin-documents-card-desc">
          Documents being processed for blockchain storage
        </div>
        <div className="admin-documents-empty-state">
          <span className="admin-documents-empty-icon">
            <span className="material-icons">schedule</span>
          </span>
          <div className="admin-documents-empty-title">No pending uploads</div>
          <div className="admin-documents-empty-desc">
            All documents have been processed
          </div>
        </div>
      </div>

      {/* --- Recent Uploads --- */}
      {/* Add your "Recent Uploads" component or section here as needed */}
    </div>
  );
}
