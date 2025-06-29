import React from "react";
import "../styles/organizationmembers.css";

export default function OrganizationMembers({ members = [] }) {
  // Group/Count roles for summary cards
  const counts = members.reduce(
    (acc, m) => {
      if (m.role === "admin") acc.admins++;
      else if (m.role === "student") acc.students++;
      else if (m.role === "recruiter") acc.recruiters++;
      acc.total++;
      return acc;
    },
    { admins: 0, students: 0, recruiters: 0, total: 0 }
  );

  const getRoleBadge = (role) => {
    switch (role) {
      case "admin":
        return <span className="member-badge admin">Admin</span>;
      case "student":
        return <span className="member-badge student">Student</span>;
      case "recruiter":
        return <span className="member-badge recruiter">Recruiter</span>;
      default:
        return null;
    }
  };

  return (
    <div className="org-members-container">
      <div className="org-members-title">Organization Members</div>
      <div className="org-members-desc">
        View all members and their roles in your organization
      </div>
      {/* Stats cards */}
      <div className="org-members-stats-row">
        <div className="org-members-stat-card">
          <div className="org-members-stat-value">{counts.total}</div>
          <div className="org-members-stat-label">
            Total Members <span className="material-icons">groups</span>
          </div>
        </div>
        <div className="org-members-stat-card">
          <div className="org-members-stat-value">{counts.admins}</div>
          <div className="org-members-stat-label">
            Administrators <span className="material-icons admin">security</span>
          </div>
        </div>
        <div className="org-members-stat-card">
          <div className="org-members-stat-value">{counts.students}</div>
          <div className="org-members-stat-label">
            Students <span className="material-icons student">person</span>
          </div>
        </div>
        <div className="org-members-stat-card">
          <div className="org-members-stat-value">{counts.recruiters}</div>
          <div className="org-members-stat-label">
            Recruiters <span className="material-icons recruiter">group</span>
          </div>
        </div>
      </div>
      {/* All Members list */}
      <div className="org-members-list-card">
        <div className="org-members-list-title">
          <span className="material-icons">groups</span> All Members
        </div>
        {members.length === 0 ? (
          <div className="org-members-empty">
            <span className="material-icons org-members-empty-icon">person_off</span>
            <div className="org-members-empty-title">
              There are no members yet, invite your team to get started
            </div>
          </div>
        ) : (
          <ul className="org-members-list">
            {members.map((member) => (
              <li
                key={member.id}
                className={`org-member-row ${
                  member.role === "admin"
                    ? "admin"
                    : member.role === "student"
                    ? "student"
                    : member.role === "recruiter"
                    ? "recruiter"
                    : ""
                }`}
              >
                <span className="material-icons org-member-avatar">
                  {member.role === "admin"
                    ? "security"
                    : member.role === "recruiter"
                    ? "groups"
                    : "person"}
                </span>
                <div className="org-member-info">
                  <div className="org-member-name">{member.name}</div>
                  <div className="org-member-id">ID: {member.id}</div>
                </div>
                <div className="org-member-role">{getRoleBadge(member.role)}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
