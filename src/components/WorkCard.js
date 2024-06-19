import React from "react";
import "./WorkCard.css";

const WorkCard = ({ title, description }) => {
  const handleClick = () => {
    console.log("clicked", title);
  };
  return (
    <div className="work-card" onClick={handleClick}>
      <div className="name">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default WorkCard;
