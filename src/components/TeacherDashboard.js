import React, { useState } from "react";
import "../styles/TeacherDashboard.css";
import avatarImg from "../images/backgroundlanding.jpeg"; // Placeholder avatar

const sampleStudents = [
  { id: "STU001", name: "Alice Smith" },
  { id: "STU002", name: "Bob Johnson" },
  { id: "STU003", name: "Charlie Lee" },
];

const sampleGrades = [
  { studentId: "STU001", subject: "Math", grade: "A" },
  { studentId: "STU001", subject: "Science", grade: "B+" },
  { studentId: "STU001", subject: "English", grade: "A-" },
  { studentId: "STU002", subject: "Math", grade: "B" },
  { studentId: "STU002", subject: "Science", grade: "A" },
  { studentId: "STU002", subject: "English", grade: "B+" },
  { studentId: "STU003", subject: "Math", grade: "C" },
  { studentId: "STU003", subject: "Science", grade: "B-" },
  { studentId: "STU003", subject: "English", grade: "B" },
];

const sampleAttendance = [
  { studentId: "STU001", date: "2024-05-01", status: "Present" },
  { studentId: "STU001", date: "2024-05-02", status: "Absent" },
  { studentId: "STU001", date: "2024-05-03", status: "Present" },
  { studentId: "STU002", date: "2024-05-01", status: "Present" },
  { studentId: "STU002", date: "2024-05-02", status: "Present" },
  { studentId: "STU002", date: "2024-05-03", status: "Absent" },
  { studentId: "STU003", date: "2024-05-01", status: "Absent" },
  { studentId: "STU003", date: "2024-05-02", status: "Present" },
  { studentId: "STU003", date: "2024-05-03", status: "Present" },
];

const sampleRemarks = [
  { date: "2024-05-01", remark: "Great improvement." },
  { date: "2024-05-03", remark: "Needs to participate more." },
];

const sampleProgress = [
  { student: "Alice Smith", progress: "Excellent" },
  { student: "Bob Johnson", progress: "Good" },
  { student: "Charlie Lee", progress: "Average" },
];

const TeacherDashboard = () => {
  const [activeSection, setActiveSection] = useState("List of Students");
  const [selectedStudent, setSelectedStudent] = useState(sampleStudents[0]);
  const teacherId = "TEA12345";

  const sidebarOptions = [
    "List of Students",
    "Current Student Grades",
    "Add Grades",
    "Current Attendance",
    "Check & Add Attendance",
    "Add Remarks",
    "Monitor Academic Progress",
  ];

  const handleLogout = () => {
    window.location.href = "/login";
  };

  return (
    <div className="dashboard-container">
      <header className="top-navbar">
        <div className="profile-info">
          <img src={avatarImg} alt="Avatar" className="profile-avatar" />
          <span className="profile-id">{teacherId}</span>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <div className="dashboard-layout">
        <nav className="sidebar">
          <ul className="menu">
            {sidebarOptions.map((item) => (
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
          {activeSection === "List of Students" && (
            <div className="dashboard-box">
              <h2>List of Students</h2>
              <ul className="student-list">
                {sampleStudents.map((student) => (
                  <li
                    key={student.id}
                    className={selectedStudent.id === student.id ? "selected" : ""}
                    onClick={() => setSelectedStudent(student)}
                  >
                    {student.name} ({student.id})
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeSection === "Current Student Grades" && (
            <div className="dashboard-box">
              <h2>Current Student Grades</h2>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="student-select" style={{ marginRight: '0.5rem' }}><b>Select Student:</b></label>
                <select
                  id="student-select"
                  className="form-control"
                  value={selectedStudent.id}
                  onChange={e => {
                    const stu = sampleStudents.find(s => s.id === e.target.value);
                    if (stu) setSelectedStudent(stu);
                  }}
                  style={{ width: 'auto', display: 'inline-block' }}
                >
                  {sampleStudents.map(student => (
                    <option key={student.id} value={student.id}>{student.name}</option>
                  ))}
                </select>
              </div>
              <p><b>Student:</b> {selectedStudent.name}</p>
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleGrades
                    .filter(row => row.studentId === selectedStudent.id)
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
          {activeSection === "Add Grades" && (
            <div className="dashboard-box">
              <h2>Add Grades</h2>
              <form className="dashboard-form">
                <select className="form-control">
                  {sampleStudents.map((student) => (
                    <option key={student.id}>{student.name}</option>
                  ))}
                </select>
                <input className="form-control" placeholder="Subject" />
                <input className="form-control" placeholder="Grade" />
                <button className="dashboard-btn" type="submit">Add Grade</button>
              </form>
            </div>
          )}
          {activeSection === "Current Attendance" && (
            <div className="dashboard-box">
              <h2>Current Attendance</h2>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="attendance-student-select" style={{ marginRight: '0.5rem' }}><b>Select Student:</b></label>
                <select
                  id="attendance-student-select"
                  className="form-control"
                  value={selectedStudent.id}
                  onChange={e => {
                    const stu = sampleStudents.find(s => s.id === e.target.value);
                    if (stu) setSelectedStudent(stu);
                  }}
                  style={{ width: 'auto', display: 'inline-block' }}
                >
                  {sampleStudents.map(student => (
                    <option key={student.id} value={student.id}>{student.name}</option>
                  ))}
                </select>
              </div>
              {/* Calculate attendance percentage (Present/Total) */}
              {(() => {
                const studentAttendance = sampleAttendance.filter(a => a.studentId === selectedStudent.id);
                const total = studentAttendance.length;
                const present = studentAttendance.filter(a => a.status === "Present").length;
                const percent = total > 0 ? Math.round((present / total) * 100) : 0;
                return (
                  <div style={{ marginBottom: '1rem' }}>
                    <b>Attendance Percentage:</b> {percent}% ({present} / {total} days Present)
                  </div>
                );
              })()}
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleAttendance
                    .filter(row => row.studentId === selectedStudent.id)
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
          {activeSection === "Check & Add Attendance" && (
            <div className="dashboard-box">
              <h2>Check & Add Attendance</h2>
              <form className="dashboard-form">
                <select className="form-control">
                  {sampleStudents.map((student) => (
                    <option key={student.id}>{student.name}</option>
                  ))}
                </select>
                <input className="form-control" placeholder="Date (YYYY-MM-DD)" />
                <select className="form-control">
                  <option>Present</option>
                  <option>Absent</option>
                </select>
                <button className="dashboard-btn" type="submit">Add Attendance</button>
              </form>
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
          {activeSection === "Add Remarks" && (
            <div className="dashboard-box">
              <h2>Add Remarks</h2>
              <form className="dashboard-form">
                <select className="form-control">
                  {sampleStudents.map((student) => (
                    <option key={student.id}>{student.name}</option>
                  ))}
                </select>
                <input className="form-control" placeholder="Date (YYYY-MM-DD)" />
                <textarea className="form-control" placeholder="Remark" />
                <button className="dashboard-btn" type="submit">Add Remark</button>
              </form>
              <ul className="remarks-list">
                {sampleRemarks.map((item, idx) => (
                  <li key={idx}>
                    <span className="remarks-date">{item.date}:</span> {item.remark}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeSection === "Monitor Academic Progress" && (
            <div className="dashboard-box">
              <h2>Monitor Academic Progress</h2>
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleProgress.map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.student}</td>
                      <td>{row.progress}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard; 