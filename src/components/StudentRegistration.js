import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";
import "../styles/StudentRegistration.css";
import backgroundImage from "../images/backgroundlanding.jpeg"; // Import the background image

const StudentRegistration = () => {
    const [formData, setFormData] = useState({
        studentId: "",
        fullName: "",
        email: "",
        section: "",
        phoneNumber: "",
        password: "",
        gender: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        // Here you would typically make an API call to register the student
        // For now, we'll just simulate a successful registration
        console.log("Registration data:", formData);
        navigate("/studentlogin");
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-header">
                    <h2>Student Registration</h2>
                    <p>Create your student account</p>
                </div>

                <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                        <label htmlFor="studentId">Student ID</label>
                            <input
                                type="text"
                            id="studentId"
                            className="form-control"
                                placeholder="Enter your Student ID"
                            value={formData.studentId}
                            onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            className="form-control"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="form-group">
                            <label htmlFor="section">Section</label>
                        <input
                            type="text"
                            id="section"
                            className="form-control"
                            placeholder="Enter your section"
                            value={formData.section}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            className="form-control"
                            placeholder="Enter your phone number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                        <select
                            id="gender"
                            className="form-control"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="auth-button">
                        Register
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        Already have an account?{" "}
                        <Link to="/studentlogin">Login here</Link>
                        </p>
                </div>
            </div>

            {/* Background Image */}
            <img src={backgroundImage} alt="Background" className="background-image" />
        </div>
    );
};

export default StudentRegistration;