import React from "react";
import "./LandingPage.css";
import "../utils/TextFocusIn.css";
import { ArrowDownOutlined } from "@ant-design/icons";

const LandingPage = () => {
  const handleClick = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="landingPage">
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
