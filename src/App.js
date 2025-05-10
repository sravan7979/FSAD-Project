import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Login from "./components/Login";
import StudentLogin from "./components/StudentLogin";
import StudentRegistration from "./components/StudentRegistration";
import TeacherLogin from "./components/TeacherLogin";
import TeacherRegistration from "./components/TeacherRegistration";
import ParentLogin from "./components/ParentLogin"; // Import ParentLogin
import ParentRegistration from "./components/ParentRegistration"; // Import ParentRegistration

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/studentregistration" element={<StudentRegistration />} />
        <Route path="/teacherlogin" element={<TeacherLogin />} />
        <Route path="/teacherregistration" element={<TeacherRegistration />} />
        <Route path="/parentlogin" element={<ParentLogin />} />
        <Route path="/parentregistration" element={<ParentRegistration />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;