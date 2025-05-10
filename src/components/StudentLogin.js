import React from "react";
import "../styles/StudentLogin.css";
import backgroundImage from "../images/backgroundlanding.jpeg"; // Import the background image

const StudentLogin = () => {
    return (
        <div className="login-page">
            {/* Background Image */}
            <img src={backgroundImage} alt="Background" className="background-image" />

            {/* Main Login Content */}
            <div className="main-content">
                <div className="overlay">
                    <h2>Student Login</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" required />
                        </div>

                        <button type="submit">Login</button>

                        <p className="register-prompt">
                            Don't have an account? <a href="/studentregistration">Register here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StudentLogin;