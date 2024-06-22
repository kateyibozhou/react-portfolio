import React from "react";
import SkillCard from "./SkillCard";
import { ReactComponent as SDLogo } from "../assets/SD.svg";
import { ReactComponent as GrowthLogo } from "../assets/growth.svg";
import { ReactComponent as UXLogo } from "../assets/UX.svg";

import "./CoreSkills.css";

const CoreSkills = () => {
  return (
    <section className="core-skills">
      <div className="title">Core Skills</div>
      <div className="skills-table">
        <SkillCard
          icon={<UXLogo />}
          title="User Experience"
          description="Advocating for end users is just as important as designing for business needs. I strive to design products and experiences that are delightful and easy to use."
        />
        <SkillCard
          icon={<SDLogo />}
          title="Service Design"
          description="I take an ecosystems view of the product and understand the user journey in my design processes. I make sure I’m solving the right problems before delving into the solutions."
        />
        <SkillCard
          icon={<GrowthLogo />}
          title="Growth Design"
          description="I make sure that design solutions always fulfil business needs, and lead to optimisation, retention and conversion."
        />
      </div>
      <div>
        <p>Other skills I am fluent in:</p>
        <div className="other-skills">Branding & Packaging / Illustration</div>
      </div>
    </section>
  );
};

export default CoreSkills;
