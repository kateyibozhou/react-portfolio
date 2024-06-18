import React from "react";
// import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import CoreSkills from "./components/CoreSkills";
import SelectedWork from "./components/SelectedWork";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <LandingPage />
      <About />
      <CoreSkills />
      <SelectedWork />
      <Footer />
    </div>
  );
}

export default App;
