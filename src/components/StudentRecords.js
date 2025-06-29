import React, { useState } from "react";
import "../styles/studentrecords.css";

export default function StudentRecords() {
  // Placeholder: You will fetch/filter real data later.
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");

  // For now, pretend there are no students.
  const students = []; // TODO: Replace with real student data from API

  return (
    <div className="student-records-container">
      {/* Header */}
      <div className="student-records-header">
        <div>
          <div className="student-records-title">Student Records</div>
          <div className="student-records-desc">
            Manage student data and academic records
          </div>
        </div>
        <div className="student-records-actions">
          <button className="import-btn">
            <span className="material-icons">upload</span> Import from Excel
          </button>
          <button className="bulk-btn">
            <span className="material-icons">edit</span> Bulk Update
          </button>
          <button className="add-btn">
            <span className="material-icons">add</span> Add Student
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="student-records-filters-row">
        <div className="student-records-search">
          <span className="material-icons">search</span>
          <input
            type="text"
            placeholder="Search students..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="student-records-filter-selects">
          <select
            className="student-records-filter"
            value={department}
            onChange={e => setDepartment(e.target.value)}
          >
            <option value="">All Departments</option>
            {/* Map departments if you have them */}
          </select>
          <select
            className="student-records-filter"
            value={year}
            onChange={e => setYear(e.target.value)}
          >
            <option value="">All Years</option>
            {/* Map years if you have them */}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="student-records-table-container">
        <table className="student-records-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>ID</th>
              <th>Department</th>
              <th>Year</th>
              <th>Status</th>
              <th>Wallet</th>
              <th>
                <span className="material-icons" title="Graduation">
                  school
                </span>
                Graduation
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan={8} className="student-records-empty-state">
                  You haven't added any student yet, upload to get started
                </td>
              </tr>
            ) : (
              // Render rows here when you have student data
              null
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
