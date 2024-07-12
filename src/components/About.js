import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []); // The empty array ensures this effect runs only once after the initial render

  return (
    <section className="about" id="about">
      <div className="description">
        <div data-aos="fade-up-left">
        I've been working at the intersection of{" "}
        UX, Service Design and Conversion Design for over a
        decade.
        </div>
        <div data-aos="fade-up-right">
        I believe that adopting a{" "}
        user-centred approach in design is critical in crafting
        a holistic brand experience to{" "}
        drive customer LTV for the business.
        </div>
      </div>
    </section>
  );
};

export default About;