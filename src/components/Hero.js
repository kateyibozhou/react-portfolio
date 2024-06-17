import React from "react";
import "./Hero.css";
import { ArrowDownOutlined } from "@ant-design/icons";

const Hero = () => {
  const handleClick = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="hero">
      <div className="title">Zhou Yibo</div>
      <div className="subtitle">UX / Service Design / Growth Design</div>
      <div className="see-more">
        <button onClick={handleClick}>
          SEE MORE
          <ArrowDownOutlined />
        </button>
      </div>
    </section>
  );
};

export default Hero;
