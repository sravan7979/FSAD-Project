import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const ParentLogin = () => {
  const [parentId, setParentId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Sample credentials for authentication
    const sampleParentId = "P12345";
    const samplePassword = "password123";

    if (parentId === sampleParentId && password === samplePassword) {
      navigate("/parentdashboard");
    } else {
      setError("Invalid Parent ID or password. Please try again.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h2>Welcome Back, Parent!</h2>
          <p>Please login to access your dashboard</p>
        </div>

        <form className="auth-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="parentId">Parent ID</label>
            <input
              type="text"
              id="parentId"
              className="form-control"
              placeholder="Enter your Parent ID"
              value={parentId}
              onChange={(e) => setParentId(e.target.value)}
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
            <Link to="/parentregistration">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParentLogin;