import React from "react";
import { Flex, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { TagColors } from "../utils/SelectedWorkTags";

import "./WorkCard.css";

const WorkCard = ({ title, description, tags, path }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <div className="work-card" onClick={handleClick}>
      <div className="name">{title}</div>
      <div className="description">{description}</div>
      <div className="tags">
        {tags?.map((t) => (
          <Tag style={{ color: "black" }} bordered={false} color={TagColors[t]}>
            {t}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
