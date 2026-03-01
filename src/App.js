import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layouts/Header"; 
import Footer from "./components/Layouts/Footer"; 
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact"; // path must be correct
import Menu from "./pages/Menu/Menu";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
        <ScrollToTop />

      <Header />  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>

      <Footer />  
    </Router>
  );
}

export default App;
 