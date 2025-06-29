import React from "react";
import "../styles/dashboard.css";

const SUGGESTIONS = [
  {
    icon: "🧑‍🤝‍🧑",
    title: "Create your first contact",
    desc: "Contacts are the livelihood of your business, let's get started",
    link: "#",
    linkLabel: "Create your first contact",
  },
  {
    icon: "🎯",
    title: "Create your first lead",
    desc: "It’s easy to convert your leads into contacts, accounts, opportunities, or a combination of all three. Let’s get started",
    link: "#",
    linkLabel: "Create your first lead",
  },
  {
    icon: "🔍",
    title: "Talent Search",
    desc: "Finding the right role for the right student has never been easier, head over to the Talent Search page to get started.",
    link: "#",
    linkLabel: "Talent Search",
  },
];

const IMPACT_DATA = [
  {
    color: "green",
    value: 0,
    label: "Students Placed",
    sublabel: "This quarter",
  },
  {
    color: "blue",
    value: "£0",
    label: "Value Added",
    sublabel: "Above minimum pay",
  },
  {
    color: "purple",
    value: 0,
    label: "Skilled Roles",
    sublabel: "Professional positions",
  },
  {
    color: "orange",
    value: 0,
    label: "Opportunities Filled",
    sublabel: "Client positions",
  },
];

export default function RecruiterDashboard() {
  return (
    <div className="dashboard-content">

      {/* Top dev banner */}
      <div className="dev-banner">
        This is a temporary development preview, and these links are not for public use.{" "}
        <a href="#" className="banner-link">Deploy your app</a> for secure sharing or use an invite link.
      </div>

      {/* Welcome Suggestions */}
      <section className="welcome-section">
        <h1>Welcome, Darion</h1>
        <p>Check out these suggestions to kick off your day.</p>
        <div className="suggestion-row">
          {SUGGESTIONS.map((s, i) => (
            <div className="suggestion-card" key={i}>
              <span className="suggestion-icon">{s.icon}</span>
              <div>
                <a href={s.link} className="suggestion-link">{s.linkLabel}</a>
                <div className="suggestion-desc">{s.desc}</div>
              </div>
              <button className="close-suggestion" tabIndex={-1} aria-label="Close">×</button>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Cards */}
      <section className="impact-section">
        <h2 className="impact-title">Impact</h2>
        <div className="impact-row">
          {IMPACT_DATA.map((c, i) => (
            <div className={`impact-card ${c.color}`} key={i}>
              <div className="impact-value">{c.value}</div>
              <div className="impact-label">{c.label}</div>
              <div className="impact-sublabel">{c.sublabel}</div>
            </div>
          ))}
        </div>
        <div className="impact-summary-row">
          <div>
            <strong>Quarterly Impact Summary</strong>
            <span style={{ marginLeft: 12 }}>
              You've successfully placed X students in meaningful careers, adding £Y in value above minimum wage expectations. 90% of placements are in skilled roles, demonstrating exceptional matching quality.
            </span>
          </div>
          <div className="impact-success-rate">90% <span>Success Rate</span></div>
        </div>
      </section>

      {/* Dashboard Cards */}
      <section className="dashboard-grid">

        <div className="dashboard-row">
          <div className="dashboard-card leads">
            <div className="card-icon green">📈</div>
            <div className="card-title">My Leads</div>
            <div className="card-number">0</div>
            <input className="card-input" placeholder="Search leads..." />
            <button className="card-btn blue">+ Create New Lead</button>
          </div>
          <div className="dashboard-card contacts">
            <div className="card-icon blue">🧑‍🤝‍🧑</div>
            <div className="card-title">My Contacts</div>
            <div className="card-number">0</div>
            <input className="card-input" placeholder="Search contacts..." />
            <button className="card-btn blue">+ Create New Contact</button>
          </div>
          <div className="dashboard-card opportunities">
            <div className="card-icon orange">📅</div>
            <div className="card-title">Open Opportunities</div>
            <div className="card-number">0</div>
            <input className="card-input" placeholder="Search opportunities..." />
            <button className="card-btn blue">+ Create New Opportunity</button>
          </div>
        </div>

        <div className="dashboard-row">
          <div className="dashboard-card records">
            <div className="card-icon purple">📄</div>
            <div className="card-title">Recently Accessed Records</div>
            <div className="card-subtitle">View your recent record activity</div>
            <button className="card-btn white">View Records</button>
          </div>
          <div className="dashboard-card followups">
            <div className="card-icon blue">⏰</div>
            <div className="card-title">Open Client Followups</div>
            <div className="card-subtitle">Manage pending client interactions</div>
            <button className="card-btn white">View Followups</button>
          </div>
          <div className="dashboard-card expiring">
            <div className="card-icon orange">⏳</div>
            <div className="card-title">Talent Access Expiring this Week</div>
            <div className="card-subtitle">Monitor access permissions set to expire soon</div>
            <button className="card-btn white">Follow Up with Students</button>
          </div>
        </div>
      </section>
    </div>
  );
}

