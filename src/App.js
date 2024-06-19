import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Project1 from "./pages/Projects/Project1/Project1";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project1" element={<Project1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
