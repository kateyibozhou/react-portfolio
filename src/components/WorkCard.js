import React from "react";
import { Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { TagColors } from "../utils/SelectedWorkTags";
import styled from "styled-components";

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
  background-image: url(${(props) => props.image_path});
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

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0; /* Ensure no extra margin */
    font-size: 1rem;
    line-height: 1.5;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: auto;
  }
`;
const WorkCard = ({ title, description, tags, path, image_path }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <WorkCardContainer onClick={handleClick}>
      <ImageContainer image_path={image_path} />
      <ContentContainer>
        <h2>{title}</h2>
        <p>{description}</p>
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
      </ContentContainer>
    </WorkCardContainer>
  );
};

export default WorkCard;
