import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"; 
import CaseStudy from "./components/CaseStudy";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";

function App() {
  document.title = "Yibo Zhou's Portfolio";
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
