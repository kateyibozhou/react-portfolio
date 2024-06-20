import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"; 
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import CoreSkills from "./components/CoreSkills";
import SelectedWork from "./components/SelectedWork";
import CaseStudy from "./components/CaseStudy";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  document.title = "Yibo Zhou's Portfolio";
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                <About />
                <CoreSkills />
                <SelectedWork />
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
