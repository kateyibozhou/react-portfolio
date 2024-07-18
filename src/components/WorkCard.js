import React from "react";
import { Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { TagColors } from "../utils/SelectedWorkTags";

import "./WorkCard.css";

const WorkCard = ({ title, description, tags, path, image_path }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <div className="work-card" onClick={handleClick}>
      <div 
        className="image-container"
        style={{
          backgroundImage: `url(${image_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="content-container">
        <h2 className="name">{title}</h2>
        <p className="description">{description}</p>
        <div className="tags">
          {tags?.map((t) => (
            <Tag key={t} style={{ color: "black", borderRadius: "8px", padding: "8px" }} bordered={false} color={TagColors[t]}>
              {t}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;