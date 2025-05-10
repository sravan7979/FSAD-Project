import React from "react";
import "../styles/TeacherLogin.css"; // Reuse the StudentLogin styles for consistency
import backgroundImage from "../images/backgroundlanding.jpeg"; // Import the background image

const TeacherLogin = () => {
    return (
        <div className="login-page">
            {/* Background Image */}
            <img src={backgroundImage} alt="Background" className="background-image" />

            {/* Main Login Content */}
            <div className="main-content">
                <div className="overlay">
                    <h2>Teacher Login</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="teacherID">Teacher ID</label>
                            <input
                                type="text"
                                id="teacherID"
                                placeholder="Enter your Teacher ID"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <button type="submit">Login</button>

                        <p className="register-prompt">
                            Don't have an account? <a href="/teacherregistration">Register here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TeacherLogin;