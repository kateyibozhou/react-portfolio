import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"; // Import your Header component
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import CoreSkills from "./components/CoreSkills";
import SelectedWork from "./components/SelectedWork";
import CaseStudy from "./components/CaseStudy";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Add this line */}
        <Routes>
          <Route path="/" element={
            <>
              <LandingPage />
              <About />
              <CoreSkills />
              <SelectedWork />
              <Footer />
            </>
          } />
          <Route path="/case-study/:id" element={<CaseStudy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;