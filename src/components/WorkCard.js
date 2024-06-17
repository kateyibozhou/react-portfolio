import React from 'react';
import './WorkCard.css';

const WorkCard = ({ title, description }) => {
  return (
    <div className="work-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default WorkCard;
