import React from "react";
import "../styles/ParentRegistration.css"; // Create a new CSS file for ParentRegistration
import backgroundImage from "../images/backgroundlanding.jpeg"; // Import the background image

const ParentRegistration = () => {
    return (
        <div className="registration-page">
            {/* Background Image */}
            <img src={backgroundImage} alt="Background" className="background-image" />

            {/* Registration Form */}
            <div className="main-content">
                <div className="overlay">
                    <h2>Parent Registration</h2>
                    <form>
                        {/* Parent ID Field */}
                        <div className="form-group">
                            <label htmlFor="parentID">Parent ID</label>
                            <input
                                type="text"
                                id="parentID"
                                placeholder="Enter your Parent ID"
                                required
                            />
                        </div>

                        {/* Full Name Field */}
                        <div className="form-group">
                            <label htmlFor="fullname">Full Name</label>
                            <input
                                type="text"
                                id="fullname"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* Phone Number Field */}
                        <div className="form-group">
                            <label htmlFor="phno">Phone Number</label>
                            <input
                                type="tel"
                                id="phno"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        {/* Student ID Field */}
                        <div className="form-group">
                            <label htmlFor="studentID">Student ID</label>
                            <input
                                type="text"
                                id="studentID"
                                placeholder="Enter your child's Student ID"
                                required
                            />
                        </div>

                        {/* Student Name Field */}
                        <div className="form-group">
                            <label htmlFor="studentName">Student Name</label>
                            <input
                                type="text"
                                id="studentName"
                                placeholder="Enter your child's name"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Create a password"
                                required
                            />
                        </div>

                        <button type="submit">Register</button>

                        <p className="login-prompt">
                            Already have an account? <a href="/parentlogin">Login here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ParentRegistration;