import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import CoreSkills from "./components/CoreSkills";
import SelectedWork from "./components/SelectedWork";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <CoreSkills />
      <SelectedWork />
      <Footer />
    </div>
  );
}

export default App;
