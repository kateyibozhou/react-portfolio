import React from "react";
import { Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { TagColors } from "../utils/SelectedWorkTags";
import styled from "styled-components";

import "./WorkCard.css";
const WorkCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-color-light);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0.5rem 0.5rem 1.2rem rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: translateY(-0.5rem);
  }
`;
const ImageContainer = styled.div`
  height: 30rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  backgroundrepeat: "no-repeat";
  backgroundsize: "cover";
  backgroundposition: "center";
  background: ${(props) => `url(${props.image_path})`};
`;

const ContentContainer = styled.div`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-bottom: 1rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: "Work Sans", sans-serif;
`;
const WorkCard = ({ title, description, tags, path, image_path }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <WorkCardContainer onClick={handleClick}>
      <ImageContainer
        image_path={image_path}
      />
      <div className="content-container">
        <h2 className="name">{title}</h2>
        <p className="description">{description}</p>
        <div className="tags">
          {tags?.map((t) => (
            <Tag
              key={t}
              style={{ color: "black", borderRadius: "8px", padding: "8px" }}
              bordered={false}
              color={TagColors[t]}
            >
              {t}
            </Tag>
          ))}
        </div>
      </div>
    </WorkCardContainer>
  );
};

export default WorkCard;
