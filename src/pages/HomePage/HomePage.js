import React from "react";
import LandingPage from "../../components/LandingPage";
import About from "../../components/About";
import CoreSkills from "../../components/CoreSkills";
import SelectedWork from "../../components/SelectedWork";

function HomePage() {
  return (
    <>
      <LandingPage />
      <About />
      <CoreSkills />
      <SelectedWork />
    </>
  );
}

export default HomePage;
