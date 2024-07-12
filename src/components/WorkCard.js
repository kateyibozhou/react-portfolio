import React from "react";
import { Flex, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { TagColors } from "../utils/SelectedWorkTags";

import "./WorkCard.css";

const WorkCard = ({ title, description, tags, path, image_path }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <div
      className="work-card"
      onClick={handleClick}
      style={{
        backgroundImage: `url(${image_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="name">{title}</div>
      <div className="description">{description}</div>
      <div className="tags">
        {tags?.map((t) => (
          <Tag key={t} style={{ color: "black" }} bordered={false} color={TagColors[t]}>
            {t}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;