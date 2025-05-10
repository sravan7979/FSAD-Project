import React, { useState } from "react";
import "../styles/ParentDashboard.css";
import avatarImg from "../images/backgroundlanding.jpeg"; // Use a placeholder avatar image

// Sample data for a parent with one child (can be expanded for multiple children)
const sampleChildren = [
  { id: "STU001", name: "Alice Smith" },
];

const sampleAttendance = [
  { studentId: "STU001", date: "2024-05-01", status: "Present" },
  { studentId: "STU001", date: "2024-05-02", status: "Absent" },
  { studentId: "STU001", date: "2024-05-03", status: "Present" },
];

const sampleGrades = [
  { studentId: "STU001", subject: "Math", grade: "A" },
  { studentId: "STU001", subject: "Science", grade: "B+" },
  { studentId: "STU001", subject: "English", grade: "A-" },
];

const sampleRemarks = [
  { studentId: "STU001", date: "2024-05-01", remark: "Excellent participation." },
  { studentId: "STU001", date: "2024-05-03", remark: "Needs improvement in homework." },
];

const ParentDashboard = () => {
  const [activeSection, setActiveSection] = useState("Overview");
  const [selectedChild, setSelectedChild] = useState(sampleChildren[0]);
  const parentId = "PAR12345";

  const handleLogout = () => {
    window.location.href = "/login";
  };

  return (
    <div className="dashboard-container">
      <header className="top-navbar">
        <div className="profile-info">
          <img src={avatarImg} alt="Avatar" className="profile-avatar" />
          <span className="profile-id">{parentId}</span>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <div className="dashboard-layout">
        <nav className="sidebar">
          <ul className="menu">
            {[
              "Overview",
              "Attendance",
              "Grades",
              "Remarks",
              "Contact Teacher",
            ].map((item) => (
              <li
                key={item}
                className={activeSection === item ? "active" : ""}
                onClick={() => setActiveSection(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <main className="main-content">
          {activeSection === "Overview" && (
            <div className="dashboard-box">
              <h2>Overview</h2>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="child-select" style={{ marginRight: '0.5rem' }}><b>Select Child:</b></label>
                <select
                  id="child-select"
                  className="form-control"
                  value={selectedChild.id}
                  onChange={e => {
                    const child = sampleChildren.find(c => c.id === e.target.value);
                    if (child) setSelectedChild(child);
                  }}
                  style={{ width: 'auto', display: 'inline-block' }}
                >
                  {sampleChildren.map(child => (
                    <option key={child.id} value={child.id}>{child.name}</option>
                  ))}
                </select>
              </div>
              <div className="overview-stats">
                <div className="stat-box">
                  <h3>Attendance</h3>
                  {(() => {
                    const studentAttendance = sampleAttendance.filter(a => a.studentId === selectedChild.id);
                    const total = studentAttendance.length;
                    const present = studentAttendance.filter(a => a.status === "Present").length;
                    const percent = total > 0 ? Math.round((present / total) * 100) : 0;
                    return <p>{percent}% Present</p>;
                  })()}
                </div>
                <div className="stat-box">
                  <h3>Average Grade</h3>
                  {(() => {
                    const grades = sampleGrades.filter(g => g.studentId === selectedChild.id);
                    const gradeValues = {
                      'A+': 4.3, 'A': 4.0, 'A-': 3.7,
                      'B+': 3.3, 'B': 3.0, 'B-': 2.7,
                      'C+': 2.3, 'C': 2.0, 'C-': 1.7,
                      'D+': 1.3, 'D': 1.0, 'D-': 0.7,
                      'F': 0.0
                    };
                    const avg = grades.reduce((sum, g) => sum + (gradeValues[g.grade] || 0), 0) / grades.length;
                    return <p>{avg.toFixed(1)} GPA</p>;
                  })()}
                </div>
                <div className="stat-box">
                  <h3>Recent Remarks</h3>
                  {(() => {
                    const remarks = sampleRemarks.filter(r => r.studentId === selectedChild.id);
                    return <p>{remarks.length} Remarks</p>;
                  })()}
                </div>
              </div>
            </div>
          )}
          {activeSection === "Attendance" && (
            <div className="dashboard-box">
              <h2>Attendance</h2>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="attendance-child-select" style={{ marginRight: '0.5rem' }}><b>Select Child:</b></label>
                <select
                  id="attendance-child-select"
                  className="form-control"
                  value={selectedChild.id}
                  onChange={e => {
                    const child = sampleChildren.find(c => c.id === e.target.value);
                    if (child) setSelectedChild(child);
                  }}
                  style={{ width: 'auto', display: 'inline-block' }}
                >
                  {sampleChildren.map(child => (
                    <option key={child.id} value={child.id}>{child.name}</option>
                  ))}
                </select>
              </div>
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleAttendance
                    .filter(row => row.studentId === selectedChild.id)
                    .map((row, idx) => (
                      <tr key={idx}>
                        <td>{row.date}</td>
                        <td>{row.status}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
          {activeSection === "Grades" && (
            <div className="dashboard-box">
              <h2>Grades</h2>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="grades-child-select" style={{ marginRight: '0.5rem' }}><b>Select Child:</b></label>
                <select
                  id="grades-child-select"
                  className="form-control"
                  value={selectedChild.id}
                  onChange={e => {
                    const child = sampleChildren.find(c => c.id === e.target.value);
                    if (child) setSelectedChild(child);
                  }}
                  style={{ width: 'auto', display: 'inline-block' }}
                >
                  {sampleChildren.map(child => (
                    <option key={child.id} value={child.id}>{child.name}</option>
                  ))}
                </select>
              </div>
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleGrades
                    .filter(row => row.studentId === selectedChild.id)
                    .map((row, idx) => (
                      <tr key={idx}>
                        <td>{row.subject}</td>
                        <td>{row.grade}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
          {activeSection === "Remarks" && (
            <div className="dashboard-box">
              <h2>Remarks</h2>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="remarks-child-select" style={{ marginRight: '0.5rem' }}><b>Select Child:</b></label>
                <select
                  id="remarks-child-select"
                  className="form-control"
                  value={selectedChild.id}
                  onChange={e => {
                    const child = sampleChildren.find(c => c.id === e.target.value);
                    if (child) setSelectedChild(child);
                  }}
                  style={{ width: 'auto', display: 'inline-block' }}
                >
                  {sampleChildren.map(child => (
                    <option key={child.id} value={child.id}>{child.name}</option>
                  ))}
                </select>
              </div>
              <ul className="remarks-list">
                {sampleRemarks
                  .filter(row => row.studentId === selectedChild.id)
                  .map((item, idx) => (
                    <li key={idx}>
                      <span className="remarks-date">{item.date}:</span> {item.remark}
                    </li>
                  ))}
              </ul>
            </div>
          )}
          {activeSection === "Contact Teacher" && (
            <div className="dashboard-box">
              <h2>Contact Teacher</h2>
              <form className="contact-form">
                <select className="form-control">
                  <option>Select Subject</option>
                  <option>Mathematics</option>
                  <option>Science</option>
                  <option>English</option>
                </select>
                <textarea
                  className="form-control"
                  placeholder="Type your message..."
                  rows={5}
                ></textarea>
                <button className="dashboard-btn" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ParentDashboard; 