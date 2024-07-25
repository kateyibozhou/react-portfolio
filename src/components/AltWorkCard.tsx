/* TODO: Merge this and WorkCard.js implementation */
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.workCardDarkText};
  text-align: left;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.4);
    transform: translateY(-0.5rem);
  }
`;

const CardTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.primary};
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  font-size: 1.5rem;
  line-height: 1.3;
  margin-bottom: 0.25rem;
`;

const CardImageContainer = styled.div<{ image_path: string }>`
  background-image: url(${(props) => props.image_path});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 24rem;
  border-radius: 1rem 1rem 0 0;

  @media (max-width: 50rem) {
    height: 20rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-bottom: 1rem;
`;

interface WorkCardProps {
  title: string;
  description: string;
  path: string;
  image_path: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ title, description, path, image_path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <CardContainer onClick={handleClick}>
      <CardImageContainer image_path={image_path} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default WorkCard;