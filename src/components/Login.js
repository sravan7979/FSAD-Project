import React from "react";
import "../styles/Login.css";
import backgroundImage from "../images/backgroundlanding.jpeg"; // Import the background image

const Login = () => {
    return (
        <div className="login-page">
            {/* Background Image */}
            <img src={backgroundImage} alt="Background" className="background-image" />

            {/* Login Section */}
            <section className="login-section">
                <div className="login-overlay"></div>
                <div className="login-content">
                    <h2 className="login-heading">Login As</h2>
                    <div className="login-options">
                        <div className="login-card">
                            <i className="fas fa-user-graduate"></i>
                            <h3>Student</h3>
                            <a href="/studentlogin">Login</a>
                        </div>
                        <div className="login-card">
                            <i className="fas fa-chalkboard-teacher"></i>
                            <h3>Teacher</h3>
                            <a href="/teacherlogin">Login</a>
                        </div>
                        <div className="login-card">
                            <i className="fas fa-user-friends"></i>
                            <h3>Parent</h3>
                            <a href="/parentlogin">Login</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;