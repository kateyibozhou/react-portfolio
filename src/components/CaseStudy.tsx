import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import caseStudies from "./CaseStudies/CaseStudiesData";
import { CaseStudyType, CaseStudyWork } from "./CaseStudies/CaseStudyType";
interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

const FullViewPortContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: stretch;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primaryDark};
  margin: 0 auto;
`;

const CaseStudyContainer = styled.div`
  text-align: left;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin: calc(0.5rem + 2vw);
  padding: calc(0.5rem + 2vw);
  border-radius: 8px;
  max-width: 50rem;
`;

const OnePagerSummary = styled.div`
  padding: calc(1rem + 4vw);
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: space-between;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.primaryLight};
`;

const CaseStudyHeader = styled.div`
  span {
    display: block;
    font-size: 1em;
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  h1 {
    margin: 0.6rem 0;
    font-size: 3em;
    font-weight: bold;
  }

  h2 {
    margin: 0.6rem 0;
    font-size: 1.3em;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  margin: 20px 0;
  border-radius: 8px;
`;

const NumberedList = styled.ul`
  list-style-type: decimal;
`;

const IndentedParagraph = styled.p`
  margin-left: 0; /* Adjust the margin as needed */
  padding-left: 0; /* Adjust the padding as needed */
`;

const Details = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  gap: 32px;
  @media only screen and (max-width: 50em) {
    flex-direction: column;
  }

  > div {
    flex: 1;
    margin: 0 10px;
  }

  h3 {
    margin-top: 0;
    font-size: 1.2em;
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  p,
  ul {
    margin: 0;
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  .role {
    flex-grow: 1;
  }

  .activities {
    flex-grow: 2;
  }
  .impact {
    flex-grow: 2;
  }
`;

const Steps = styled.div`
  max-width: 50rem;
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
    padding-left: 20px;
  }

  blockquote {
    margin: 20px 0;
    padding: 10px 20px;
    border-left: 5px solid ${({ theme }) => theme.colors.quote};
    font-style: italic;
    font-size: 1.5em;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const ImageContainer = styled.div`
  margin: 1.25rem auto;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 60vh;
  border-radius: 0.5rem;
  margin: 0 auto;
  display: block;
`;

const Caption = styled.p`
  margin: 0 auto;
  display: block;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.workCardDarkText};
  margin-top: 0.3rem;
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
  font-style: italic;
`;

const Learnings = styled.div`
  margin-top: 40px;
  max-width: 50rem;

    h5 {
    margin-top: 20px;
    font-size: 1.2em;
  }
`;

const CaseStudy: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [caseStudy, setCaseStudy] = useState<CaseStudyType | null>(null);

  useEffect(() => {
    setCaseStudy(caseStudies[id] || null);
  }, [id]);
  console.log(caseStudy);
  if (!caseStudy) {
    return (
      <CaseStudyContainer>
        <h1>404: Case Study Not Found</h1>
      </CaseStudyContainer>
    );
  }

  const renderWork = (work: CaseStudyWork[] | undefined) => {
    return (work ?? []).map((item, index) => (
      item.isParagraph ? (
        <IndentedParagraph key={index}>{item.text}</IndentedParagraph>
      ) : (
      <li key={index}>
      <p>{item.text}</p>
      {item.subTasks && (
        <NumberedList>
        {item.subTasks.map((subItem, subIdx) => (
          <li key={subIdx}>{subItem}</li>
        ))}
        </NumberedList>
      )}
      {item.images &&
        item.images.map((image, imgIdx) => (
        <ImageContainer key={imgIdx}>
          <Image
          src={require(`../assets/images/case-studies${image.relativePath}`)}
          alt={image.altText}
          />
          <Caption>{image.caption}</Caption>
        </ImageContainer>
        ))}
      {item.videos &&
        item.videos.map((video, videoIdx) => (
        <div key={videoIdx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem' }}>
          <video
          key={videoIdx}
          controls
          autoPlay
          loop
          muted
          style={{ maxWidth: '100%', maxHeight: '60vh' }}
          >
          <source
            src={require(`../assets/images/case-studies${video.relativePath}`)}
            type="video/mp4"
          />
          </video>
          <Caption>{video.caption}</Caption>
        </div>
        ))}
      </li>
    )));
  };

  const renderProcess = renderWork;
  const renderLearnings = renderWork;
  return (
    <FullViewPortContainer>
      <OnePagerSummary>
        <CaseStudyHeader>
          <span>{caseStudy.onePager.duration}</span>
          <h1>{caseStudy.onePager.title}</h1>
          <h2>{caseStudy.onePager.subtitle}</h2>
        </CaseStudyHeader>
        <HeroImage
          src={require(`../assets/images/case-studies${caseStudy.onePager.image.relativePath}`)}
          alt={caseStudy.onePager.image.altText}
        />
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
          {caseStudy.steps &&
            caseStudy.steps.map((step, index) => (
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
                {step.quote && <blockquote>{step.quote}</blockquote>}
              </Step>
            ))}
        </Steps>
        {caseStudy.learnings && (
          <Learnings>
            <h5>Learnings</h5>
            <ul>{renderLearnings(caseStudy.learnings)}</ul>
          </Learnings>
        )}
      </CaseStudyContainer>
      {/* example of inserting video */}
      {/* <video controls autoPlay loop muted>
        <source
          src={require("../assets/images/case-studies${caseStudy.onePager.video.relativePath}")}
          type="video/mp4"
        />
      </video> */}
    </FullViewPortContainer>
  );
};

export default CaseStudy;
