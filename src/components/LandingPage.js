import React from "react";
import "./LandingPage.css";
import "../utils/TextFocusIn.css";
import { ArrowDownOutlined } from "@ant-design/icons";
import Snowfall from 'react-snowfall';

const LandingPage = () => {
  const handleClick = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="landingPage">
        <div style={{ height: '100%', width: '100%', position: 'absolute' }}>
          <Snowfall />
        </div>
      <div className="background-animation">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Angled lines */}
          <line x1="0" y1="0" x2="500" y2="500" stroke="#cccccc" strokeWidth="0.5" />
          <line x1="50" y1="0" x2="550" y2="500" stroke="#cccccc" strokeWidth="0.5" />
          <line x1="100" y1="0" x2="600" y2="500" stroke="#cccccc" strokeWidth="0.5" />
          <line x1="150" y1="0" x2="650" y2="500" stroke="#cccccc" strokeWidth="0.5" />
          <line x1="200" y1="0" x2="700" y2="500" stroke="#cccccc" strokeWidth="0.5" />
          <line x1="250" y1="0" x2="750" y2="500" stroke="#cccccc" strokeWidth="0.5" />
          <line x1="300" y1="0" x2="800" y2="500" stroke="#cccccc" strokeWidth="0.5" />
          <line x1="350" y1="0" x2="850" y2="500" stroke="#cccccc" strokeWidth="0.5" />
          <line x1="400" y1="0" x2="900" y2="500" stroke="#cccccc" strokeWidth="0.5" />
          <line x1="450" y1="0" x2="950" y2="500" stroke="#cccccc" strokeWidth="0.5" />

          {/* Central Orbit */}
          <circle cx="250" cy="250" r="100" stroke="#cccccc" strokeWidth="0.5" fill="none" />

          {/* Small Orbiting Circles */}
          <circle id="planet1" cx="350" cy="250" r="10" fill="#cccccc" />
          <circle id="planet2" cx="350" cy="250" r="5" fill="#cccccc" />

          {/* Animation for the first planet */}
          <animateTransform
            xlinkHref="#planet1"
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 250 250"
            to="360 250 250"
            dur="10s"
            repeatCount="indefinite"
          />

          {/* Animation for the second planet */}
          <animateTransform
            xlinkHref="#planet2"
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 250 250"
            to="360 250 250"
            dur="7s"
            repeatCount="indefinite"
          />
        </svg>
      </div>
      <div className="hero">
        <div className="title text-focus-in">Zhou Yibo</div>
        <div className="subtitle text-focus-in">UX / Service Design / Growth Design</div>
        <div className="see-more">
          <button onClick={handleClick}>
            SEE MORE
            <ArrowDownOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;