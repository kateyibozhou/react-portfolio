import React from "react";
import LandingPage from "../../components/LandingPage";
import About from "../../components/About";
import CoreSkills from "../../components/CoreSkills";
import SelectedWork from "../../components/SelectedWork";
import Footer from "../../components/Footer";

function HomePage() {
  return (
    <>
      <LandingPage />
      <About />
      <CoreSkills />
      <SelectedWork />
      <Footer />
    </>
  );
}

export default HomePage;
