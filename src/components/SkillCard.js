import React from "react";
import "./SkillCard.css";

const SkillCard = ({ icon, title, description }) => {
  return (
    <div className="skill-card">
      {icon}
      <div className="name">{title}</div>
      <p>{description}</p>
    </div>
  );
};

export default SkillCard;
