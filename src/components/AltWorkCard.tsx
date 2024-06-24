import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.workCardDarkText};
  text-align: left;
  border-radius: 0.8rem;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.4);
    transform: translateY(-0.5rem);
  }
`;

const CardTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const CardDescription = styled.p`
  font-size: 0.5rem;
`;

interface WorkCardProps {
  title: string;
  description: string;
  path: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ title, description, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <CardContainer onClick={handleClick}>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default WorkCard;