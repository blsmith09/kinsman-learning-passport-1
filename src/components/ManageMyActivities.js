import React from "react";
import "../styles/activities.css";

export default function ManageMyActivities() {
  return (
    <main className="activities-main">
      <div className="dev-banner">
        This is a temporary development preview, and these links are not for public use.{" "}
        <a href="#" className="banner-link">Deploy your app</a> for secure sharing or use an invite link.
      </div>

      <section className="activities-header">
        <h1>Manage My Activities</h1>
        <p>Track and manage your daily recruitment activities and candidate interactions.</p>
      </section>

      {/* Top Stats */}
      <section className="activities-top-stats">
        <div className="activities-stat-card">
          <span className="activities-stat-icon">📅</span>
          <div>
            <div className="activities-stat-title">Today's Schedule</div>
            <div className="activities-stat-value">–</div>
            <div className="activities-stat-desc">activities planned</div>
          </div>
        </div>
        <div className="activities-stat-card">
          <span className="activities-stat-icon">📞</span>
          <div>
            <div className="activities-stat-title">Calls Scheduled</div>
            <div className="activities-stat-value">–</div>
            <div className="activities-stat-desc">interviews today</div>
          </div>
        </div>
        <div className="activities-stat-card">
          <span className="activities-stat-icon">👥</span>
          <div>
            <div className="activities-stat-title">Active Candidates</div>
            <div className="activities-stat-value">–</div>
            <div className="activities-stat-desc">in pipeline</div>
          </div>
        </div>
        <div className="activities-stat-card">
          <span className="activities-stat-icon">📈</span>
          <div>
            <div className="activities-stat-title">This Week</div>
            <div className="activities-stat-value">–</div>
            <div className="activities-stat-desc">activities completed</div>
          </div>
        </div>
      </section>

      {/* Activity Grids */}
      <section className="activities-grid-row">
        {/* Recent Activities */}
        <div className="activities-grid-col">
          <div className="activities-card">
            <div className="activities-card-title">Recent Activities</div>
            <div className="activities-placeholder-list">
              <div className="activities-placeholder-row"></div>
              <div className="activities-placeholder-row"></div>
              <div className="activities-placeholder-row"></div>
            </div>
          </div>
        </div>
        {/* Upcoming Activities */}
        <div className="activities-grid-col">
          <div className="activities-card">
            <div className="activities-card-title">Upcoming Activities</div>
            <div className="activities-placeholder-list">
              <div className="activities-placeholder-row"></div>
              <div className="activities-placeholder-row"></div>
              <div className="activities-placeholder-row"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="activities-grid-row">
        {/* Create New Activity */}
        <div className="activities-grid-col">
          <div className="activities-card">
            <div className="activities-card-title">Create New Activity</div>
            <div className="activities-create-list">
              <div className="activities-create-row"><span>📞</span> Schedule Call</div>
              <div className="activities-create-row"><span>👥</span> Client Meeting</div>
              <div className="activities-create-row"><span>📝</span> Follow-up Task</div>
              <button className="activities-add-btn">
                <span className="material-icons" style={{ fontSize: 18, verticalAlign: "middle" }}>calendar_today</span>
                &nbsp; Add to Calendar
              </button>
            </div>
          </div>
        </div>
        {/* Overdue Activities */}
        <div className="activities-grid-col">
          <div className="activities-card">
            <div className="activities-card-title">Overdue Activities</div>
            <div className="activities-placeholder-list">
              <div className="activities-placeholder-row"></div>
              <div className="activities-placeholder-row"></div>
              <div className="activities-placeholder-row"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Bars */}
      <section className="activities-progress-row">
        <div className="activities-progress-card">
          <div className="activities-progress-title">This Week's Progress</div>
          <div className="activities-progress-label">Calls Completed</div>
          <div className="activities-progress-bar-bg">
            <div className="activities-progress-bar"></div>
          </div>
        </div>
        <div className="activities-progress-card">
          <div className="activities-progress-title">Lead Generation</div>
          <div className="activities-progress-label">New Leads</div>
          <div className="activities-progress-bar-bg">
            <div className="activities-progress-bar green"></div>
          </div>
        </div>
        <div className="activities-progress-card">
          <div className="activities-progress-title">Placement Target</div>
          <div className="activities-progress-label">Monthly Goal</div>
          <div className="activities-progress-bar-bg">
            <div className="activities-progress-bar purple"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
