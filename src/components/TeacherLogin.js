import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const TeacherLogin = () => {
  const [teacherId, setTeacherId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    // Always navigate to dashboard for demo/testing
    navigate("/teacherdashboard");
  };

    return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h2>Welcome Back, Teacher!</h2>
          <p>Please login to access your dashboard</p>
        </div>

        <form className="auth-form" onSubmit={handleLogin}>
                        <div className="form-group">
            <label htmlFor="teacherId">Teacher ID</label>
                            <input
                                type="text"
              id="teacherId"
              className="form-control"
              placeholder="Enter your Teacher ID"
              value={teacherId}
              onChange={(e) => setTeacherId(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
              className="form-control"
                                placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="auth-button">
            Login
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?{" "}
            <Link to="/teacherregistration">Register here</Link>
                        </p>
                </div>
            </div>
        </div>
    );
};

export default TeacherLogin;
