import React from "react";
import "../styles/StudentRegistration.css";
import backgroundImage from "../images/backgroundlanding.jpeg"; // Import the background image

const StudentRegistration = () => {
    return (
        <div className="registration-page">
            {/* Background Image */}
            <img src={backgroundImage} alt="Background" className="background-image" />

            {/* Registration Form */}
            <div className="main-content">
                <div className="overlay">
                    <h2>Student Registration</h2>
                    <form>
                        {/* ID Field */}
                        <div className="form-group">
                            <label htmlFor="studentID">Student ID</label>
                            <input
                                type="text"
                                id="studentID"
                                placeholder="Enter your Student ID"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" id="fullname" placeholder="Enter your full name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="section">Section</label>
                            <input type="text" id="section" placeholder="Enter your section" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phno">Phone Number</label>
                            <input type="tel" id="phno" placeholder="Enter your phone number" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Create a password" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <select id="gender" required>
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <button type="submit">Register</button>

                        <p className="login-prompt">
                            Already have an account? <a href="/studentlogin">Login here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StudentRegistration;