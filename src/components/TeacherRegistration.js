import React from "react";
import "../styles/TeacherRegistration.css"; // Reuse the StudentRegistration styles for consistency
import backgroundImage from "../images/backgroundlanding.jpeg";

const TeacherRegistration = () => {
    return (
        <div className="registration-page">
            <img src={backgroundImage} alt="Background" className="background-image" />

            <div className="main-content">
                <div className="overlay">
                    <h2>Teacher Registration</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="employeeID">Employee ID</label>
                            <input
                                type="text"
                                id="employeeID"
                                placeholder="Enter your Employee ID"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="fullname">Full Name</label>
                            <input
                                type="text"
                                id="fullname"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phno">Phone Number</label>
                            <input
                                type="tel"
                                id="phno"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Create a password"
                                required
                            />
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
                            Already have an account? <a href="/teacherlogin">Login here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TeacherRegistration;