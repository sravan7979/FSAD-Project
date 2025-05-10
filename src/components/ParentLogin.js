import React from "react";
import "../styles/ParentLogin.css";
import backgroundImage from "../images/backgroundlanding.jpeg";

const ParentLogin = () => {
    return (
        <div className="login-page">
            {/* Background Image */}
            <img src={backgroundImage} alt="Background" className="background-image" />

            {/* Main Login Content */}
            <div className="main-content">
                <div className="overlay">
                    <h2>Parent Login</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="parentID">Parent ID</label>
                            <input
                                type="text"
                                id="parentID"
                                placeholder="Enter your Parent ID"
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
                            Don't have an account? <a href="/parentregistration">Register here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ParentLogin;