import React, { useState } from "react";
import "../styles/talentsearch.css"; // Create a new CSS file or add to your global styles

export default function TalentSearch() {
  // --- Filters (real filter logic will come with backend integration) ---
  const [filters, setFilters] = useState({
    graduationYear: "All",
    specialization: "All",
    outcome: "All",
    trajectory: "All",
    minGrade: 60,
  });

  // --- Placeholder: No candidates (dynamic list will come from API/backend) ---
  const candidates = []; // Empty = no results

  // --- Handlers for filters (expand as needed) ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleMinGrade = (e) => setFilters(prev => ({ ...prev, minGrade: e.target.value }));

  return (
    <div className="talentsearch-main" style={{ padding: "0 2rem" }}>
      {/* HEADER */}
      <div style={{ margin: "2rem 0 1.5rem 0" }}>
        <h2 style={{ marginBottom: 0 }}>Talent Search</h2>
        <div style={{ fontSize: "1rem", color: "#555" }}>
          Discover qualified candidates through blockchain-verified credentials.
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="ts-filter-bar" style={{
        display: "flex",
        gap: "1.5rem",
        marginBottom: "2.2rem",
        flexWrap: "wrap",
        alignItems: "flex-end",
        background: "#fff",
        borderRadius: "10px",
        padding: "1.5rem",
        boxShadow: "0 2px 10px #e4f1f9"
      }}>
        <div style={{ flex: 1, minWidth: 180 }}>
          <label className="ts-label">Graduation Year</label>
          <select
            name="graduationYear"
            value={filters.graduationYear}
            onChange={handleChange}
            className="ts-input"
          >
            <option>All</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
            {/* add more years */}
          </select>
        </div>
        <div style={{ flex: 1, minWidth: 180 }}>
          <label className="ts-label">Specialization</label>
          <select
            name="specialization"
            value={filters.specialization}
            onChange={handleChange}
            className="ts-input"
          >
            <option>All</option>
            <option>Computer Science</option>
            <option>Data Science</option>
            <option>Software Engineering</option>
            <option>Cybersecurity</option>
            {/* add more */}
          </select>
        </div>
        <div style={{ flex: 1, minWidth: 180 }}>
          <label className="ts-label">Degree Outcome</label>
          <select
            name="outcome"
            value={filters.outcome}
            onChange={handleChange}
            className="ts-input"
          >
            <option>All</option>
            <option>First Class Honours</option>
            <option>Upper Second Class</option>
            <option>Second Class</option>
            {/* add more */}
          </select>
        </div>
        <div style={{ flex: 1, minWidth: 180 }}>
          <label className="ts-label">Trajectory</label>
          <select
            name="trajectory"
            value={filters.trajectory}
            onChange={handleChange}
            className="ts-input"
          >
            <option>All</option>
            <option>Academic</option>
            <option>Professional</option>
            <option>Entrepreneurial</option>
            {/* add more */}
          </select>
        </div>
        <div style={{ flex: 1, minWidth: 180 }}>
          <label className="ts-label">Min Grade</label>
          <input
            type="range"
            min={50}
            max={100}
            value={filters.minGrade}
            onChange={handleMinGrade}
            className="ts-slider"
          />
          <div style={{ fontSize: "0.95em", color: "#2476a8", marginTop: 2 }}>
            {filters.minGrade}%+
          </div>
        </div>
      </div>

      {/* RESULT LIST */}
      {candidates.length === 0 ? (
        <div
          style={{
            marginTop: "5rem",
            textAlign: "center",
            color: "#6b7b91"
          }}
        >
          <span className="material-icons" style={{ fontSize: 56, color: "#bbd6e4" }}>
            sentiment_dissatisfied
          </span>
          <h2 style={{ fontWeight: 700, color: "#344e60", margin: "1rem 0 0.5rem 0" }}>
            0 Candidates Found
          </h2>
          <div>
            No blockchain-verified candidates meet your filters.<br />
            Try adjusting your search to discover available talent!
          </div>
        </div>
      ) : (
        <div className="ts-candidate-list" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(370px, 1fr))",
          gap: "2rem"
        }}>
          {/* Example Candidate Card (for reference, will come from backend/API) */}
        </div>
      )}
      <div style={{ marginTop: "2rem", color: "#758ea1", fontSize: "0.98em" }}>
        Showing verified graduates from the last 5 years who opted in for recruitment
      </div>
    </div>
  );
}
