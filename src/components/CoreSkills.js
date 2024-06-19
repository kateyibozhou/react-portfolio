import React from "react";
import SkillCard from "./SkillCard";
import { ReactComponent as growthLogo } from "../assets/growth.svg";
import { ReactComponent as SDLogo } from "../assets/SD.svg";
import { ReactComponent as UXLogo } from "../assets/UX.svg";

import "./CoreSkills.css";

const CoreSkills = () => {
  return (
    <section className="core-skills">
      <div className="title">Core Skills</div>
      <div className="skills-table">
        <SkillCard
          icons={<SDLogo />}
          title="User Experience"
          description="Advocating for end users is just as important as designing for business needs."
        />
        <SkillCard
          icon={<growthLogo />}
          title="Growth Design"
          description="I make sure that design solutions always fulfil business needs, and lead to optimisation, retention and conversion."
        />
        <SkillCard
          icon={<SDLogo />}
          title="Service Design"
          description="I take an ecosystem view of the product and understand the user journey in my design processes."
        />
      </div>
      <p>
        Other skills I am fluent in:{" "}
        <strong>
          Branding & Packaging / Illustration / Ecommerce Campaign
        </strong>
      </p>
    </section>
  );
};

export default CoreSkills;
