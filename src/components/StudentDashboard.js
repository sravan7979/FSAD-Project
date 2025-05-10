import React, { useState } from "react";
import "../styles/StudentDashboard.css";
import avatarImg from "../images/backgroundlanding.jpeg"; // Use a placeholder avatar image

const sampleAttendance = [
  { date: "2024-05-01", status: "Present" },
  { date: "2024-05-02", status: "Absent" },
  { date: "2024-05-03", status: "Present" },
];

const sampleGrades = [
  { subject: "Math", grade: "A" },
  { subject: "Science", grade: "B+" },
  { subject: "English", grade: "A-" },
];

const sampleRemarks = [
  { date: "2024-05-01", remark: "Excellent participation." },
  { date: "2024-05-03", remark: "Needs improvement in homework." },
];

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState("Attendance");
  const studentId = "STU12345";

  const handleLogout = () => {
    // Placeholder for logout logic
    window.location.href = "/login";
  };

  return (
    <div className="dashboard-container">
      <header className="top-navbar">
        <div className="profile-info">
          <img src={avatarImg} alt="Avatar" className="profile-avatar" />
          <span className="profile-id">{studentId}</span>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <div className="dashboard-layout">
        <nav className="sidebar">
          <ul className="menu">
            {[
              "Attendance",
              "Grades",
              "Remarks",
              "Report Issue",
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
          {activeSection === "Attendance" && (
            <div className="dashboard-box">
              <h2>Attendance</h2>
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleAttendance.map((row, idx) => (
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
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleGrades.map((row, idx) => (
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
              <ul className="remarks-list">
                {sampleRemarks.map((item, idx) => (
                  <li key={idx}>
                    <span className="remarks-date">{item.date}:</span> {item.remark}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeSection === "Report Issue" && (
            <div className="dashboard-box">
              <h2>Report an Issue</h2>
              <form className="report-form">
                <textarea
                  className="form-control"
                  placeholder="Describe your issue..."
                  rows={5}
                ></textarea>
                <button className="dashboard-btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard; 