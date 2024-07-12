import React from "react";
import SkillCard from "./SkillCard";
import AnimatedServiceDesignSVG from "./AnimatedServiceDesignSVG";
import AnimatedUXDesignSVG from "./AnimatedUXDesignSVG";
import AnimatedGrowthDesignSVG from "./AnimatedGrowthDesignSVG";
import { ReactComponent as SDLogo } from "../assets/SD.svg";
import { ReactComponent as GrowthLogo } from "../assets/growth.svg";
import { ReactComponent as UXLogo } from "../assets/UX.svg";

import "./CoreSkills.css";

const CoreSkills = () => {
  return (
    <section className="core-skills">
      <div className="title" data-aos="fade-right">Core Skills</div>
      <div className="skills-table" data-aos="zoom-in-up">
        <SkillCard
          icon={<AnimatedUXDesignSVG />}
          title="User Experience"
          description="Advocating for end users is just as important as designing for business needs. I strive to design products and experiences that are delightful and easy to use."
        />
        <SkillCard
          icon={<AnimatedServiceDesignSVG />}
          title="Service Design"
          description="I take an ecosystems view of the product and understand the user journey in my design processes. I make sure I’m solving the right problems before delving into the solutions."
        />
        <SkillCard
          icon={<AnimatedGrowthDesignSVG />}
          title="Growth Design"
          description="I make sure that design solutions always fulfil business needs, and lead to optimisation, retention and conversion."
        />
      </div>
      <div data-aos="zoom-in-up">
        <p>Other skills I am fluent in:</p>
        <div className="other-skills">Branding & Packaging / Illustration</div>
      </div>
    </section>
  );
};

export default CoreSkills;
