import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import caseStudies from './CaseStudies/CaseStudiesData';
import { CaseStudyType, CaseStudyWork } from './CaseStudies/CaseStudyType';

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

const CaseStudyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const OnePagerSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.primaryLight};
  padding: 40px 20px;
`;

const Header = styled.div`
  span {
    display: block;
    font-size: 1em;
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  h1 {
    margin: 10px 0;
    font-size: 3em;
    font-weight: bold;
  }

  h2 {
    margin: 10px 0;
    font-size: 1.5em;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  margin: 20px 0;
  border-radius: 8px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  text-align: left;
  width: 100%;

  > div {
    flex: 1;
    margin: 0 10px;
  }

  h3 {
    margin-top: 0;
    font-size: 1.2em;
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  p, ul {
    margin: 0;
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
`;

const Steps = styled.div`
  margin-top: 40px;
`;

const Step = styled.div`
  margin-bottom: 40px;

  h4 {
    margin-bottom: 10px;
    font-size: 1.8em;
    border-bottom: 2px solid ${({ theme }) => theme.colors.border};
    padding-bottom: 5px;
  }

  h5 {
    margin-top: 20px;
    font-size: 1.2em;
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  blockquote {
    margin: 20px 0;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.background};
    border-left: 5px solid ${({ theme }) => theme.colors.quote};
    font-style: italic;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ImageContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Caption = styled.p`
  font-size: 0.85em;
  color: ${({ theme }) => theme.colors.darkGray};
  margin-top: 5px;
`;

const Learnings = styled.div`
  margin-top: 40px;
`;

const CaseStudy: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [caseStudy, setCaseStudy] = useState<CaseStudyType | null>(null);

  useEffect(() => {
    setCaseStudy(caseStudies[id] || null);
  }, [id]);

  if (!caseStudy) {
    return <CaseStudyContainer><h1>404: Case Study Not Found</h1></CaseStudyContainer>;
  }

  const renderProcess = (process: CaseStudyWork[]) => {
    return process.map((processItem, idx) => (
      <li key={idx}>
        <p>{processItem.text}</p>
        {processItem.subTasks && (
          <ul>
            {processItem.subTasks.map((subTask, subIdx) => (
              <li key={subIdx}>{subTask}</li>
            ))}
          </ul>
        )}
        {processItem.images && processItem.images.map((image, imgIdx) => (
          <ImageContainer key={imgIdx}>
            <Image src={image.relativePath} alt={image.altText} />
            <Caption>{image.caption}</Caption>
          </ImageContainer>
        ))}
      </li>
    ));
  };

  const renderLearnings = (learnings: CaseStudyWork[]) => {
    return learnings.map((learning, index) => (
      <li key={index}>
        <p>{learning.text}</p>
        {learning.subTasks && (
          <ul>
            {learning.subTasks.map((subLearning, subIdx) => (
              <li key={subIdx}>{subLearning}</li>
            ))}
          </ul>
        )}
        {learning.images && learning.images.map((image, imgIdx) => (
          <ImageContainer key={imgIdx}>
            <Image src={image.relativePath} alt={image.altText} />
            <Caption>{image.caption}</Caption>
          </ImageContainer>
        ))}
      </li>
    ));
  };

  return (
    <div>
      <OnePagerSummary>
        <Header>
          <span>{caseStudy.onePager.duration}</span>
          <h1>{caseStudy.onePager.title}</h1>
          <h2>{caseStudy.onePager.subtitle}</h2>
        </Header>
        <MainImage src={caseStudy.onePager.image} alt={caseStudy.onePager.title} />
        <Details>
          <div className="role">
            <h3>Role</h3>
            <p>{caseStudy.onePager.role}</p>
          </div>
          <div className="activities">
            <h3>Activities</h3>
            <ul>
              {caseStudy.onePager.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
          <div className="impact">
            <h3>Impact</h3>
            <ul>
              {caseStudy.onePager.impact.map((impact, index) => (
                <li key={index}>{impact}</li>
              ))}
            </ul>
          </div>
        </Details>
      </OnePagerSummary>
      <CaseStudyContainer>
        <Steps>
          {caseStudy.steps.map((step, index) => (
            <Step key={index}>
              <h4>Step {index + 1}</h4>
              <h5>Insights</h5>
              <ul>
                {step.insights.map((insight, idx) => (
                  <li key={idx}>{insight}</li>
                ))}
              </ul>
              <h5>Process</h5>
              <ul>{renderProcess(step.process)}</ul>
              <blockquote>{step.quote}</blockquote>
            </Step>
          ))}
        </Steps>
        <Learnings>
          <h4>Learnings</h4>
          <ul>{renderLearnings(caseStudy.learnings)}</ul>
        </Learnings>
      </CaseStudyContainer>
    </div>
  );
};

export default CaseStudy;