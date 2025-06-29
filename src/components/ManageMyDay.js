import React from "react";
import "../styles/managemyday.css";

export default function ManageMyDay() {
  // Dynamically get today's date in "Saturday, June 28, 2025" format
  const today = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString(undefined, options);

  return (
    <main className="manage-day-bg">
      <div className="dev-banner">
        This is a temporary development preview, and these links are not for public use.{" "}
        <a href="#" className="banner-link">Deploy your app</a> for secure sharing or use an invite link.
      </div>

      <section className="manage-day-section">
        <h1 className="manage-day-title">Manage My Day</h1>
        <p className="manage-day-subtitle">Plan and organize your daily recruiting activities.</p>
      </section>

      <section className="manage-day-content">
        {/* Calendar & Details */}
        <div className="manage-day-calendar-col">
          <div className="manage-day-card calendar-card">
            <div className="calendar-card-header">
              <span className="material-icons calendar-icon">calendar_month</span>
              <h2 className="calendar-title">Calendar</h2>
              <div className="calendar-controls">
                <select className="calendar-select"><option>June</option></select>
                <select className="calendar-select"><option>2025</option></select>
                <button className="calendar-nav">&lt;</button>
                <button className="calendar-nav">&gt;</button>
                <button className="calendar-sync">Sync</button>
                <button className="calendar-settings">Calendar Settings</button>
              </div>
            </div>
            <div className="calendar-grid-placeholder">
              Calendar grid here (UI only)
            </div>
          </div>
        </div>
        {/* Day/Week Details */}
        <div className="manage-day-details-col">
          <div className="manage-day-card day-detail-card">
            <div className="day-detail-header">
              <div>{formattedDate}</div>
              <button className="add-event-btn">+ Add Event</button>
            </div>
            <div className="no-events-placeholder">
              <span className="material-icons no-events-icon">calendar_today</span>
              <div>No events scheduled for this day</div>
              <button className="schedule-event-btn">+ Schedule Event</button>
            </div>
          </div>
          <div className="manage-day-card week-stats-card">
            <div className="week-stats-title">This Week</div>
            <div className="week-stats-list">
              <div className="week-stats-row"><span>Interviews</span><span>–</span></div>
              <div className="week-stats-row"><span>Follow-ups</span><span>–</span></div>
              <div className="week-stats-row"><span>Calls</span><span>–</span></div>
              <div className="week-stats-row week-stats-total"><span>Total Activities</span><span>–</span></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
