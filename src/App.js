import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layouts/Header"; 
import Footer from "./components/Layouts/Footer"; 
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Technology from "./pages/Technology/Technology";
import Project from "./pages/Project/Project";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />  
      <Routes>
        <Route path="/" element={<Home/>} />        {/* ✅ yeh add kiya */}
        <Route path="/Home" element={<Home/>} />
        <Route path="/Technology" element={<Technology/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project/>} />
      </Routes>
      <Footer />  
    </Router>
  );
}

export default App;