import React from "react";
import "../styles/Contact.css";
import backgroundImage from "../images/backgroundlanding.jpeg";

const Contact = () => {
    return (
        <div className="contact-page">

            <img src={backgroundImage} alt="Background" className="background-image" />

            <section className="contact-section">
                <div className="contact-box">
                    <h2>Contact Us</h2>
                    <form>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" placeholder="Enter your name" required />
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" placeholder="Subject of your message" required />
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Write your message here..." required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;