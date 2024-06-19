import React from "react";
import { Flex, Tag } from "antd";
import { useNavigate } from "react-router-dom";
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
      {/* <Flex gap="4px 0" wrap>
        {tags?.map((t) => (
          <Tag bordered={false} color="green">
            {t}
          </Tag>
        ))}
      </Flex> */}
    </div>
  );
};

export default WorkCard;
