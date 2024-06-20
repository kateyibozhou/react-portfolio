import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import caseStudies from './CaseStudies/CaseStudiesData';
import { CaseStudyType, CaseStudyWork } from './CaseStudies/CaseStudyType';
import './CaseStudy.css';

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

const CaseStudy: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [caseStudy, setCaseStudy] = useState<CaseStudyType | null>(null);

  useEffect(() => {
    setCaseStudy(caseStudies[id] || null);
  }, [id]);

  if (!caseStudy) {
    return <div className="case-study"><h1>404: Case Study Not Found</h1></div>;
  }

  const renderProcess = (process: CaseStudyWork[]) => {
    return process.map((processItem, idx) => (
      <li key={idx}>
        {processItem.text}
        {processItem.subTasks && (
          <ul>
            {processItem.subTasks.map((subTask, subIdx) => (
              <li key={subIdx}>{subTask}</li>
            ))}
          </ul>
        )}
        {processItem.images && processItem.images.map((image, imgIdx) => (
          <div key={imgIdx}>
            <img src={image.relativePath} alt={image.altText} />
            <p className="caption">{image.caption}</p>
          </div>
        ))}
      </li>
    ));
  };

  const renderLearnings = (learnings: CaseStudyWork[]) => {
    return learnings.map((learning, index) => (
      <li key={index}>
        {learning.text}
        {learning.subTasks && (
          <ul>
            {learning.subTasks.map((subLearning, subIdx) => (
              <li key={subIdx}>{subLearning}</li>
            ))}
          </ul>
        )}
        {learning.images && learning.images.map((image, imgIdx) => (
          <div key={imgIdx}>
            <img src={image.relativePath} alt={image.altText} />
            <p className="caption">{image.caption}</p>
          </div>
        ))}
      </li>
    ));
  };

  return (
    <div className="case-study">
      <div className="one-pager-summary">
        <div className="header">
          <span>{caseStudy.onePager.duration}</span>
          <h1>{caseStudy.onePager.title}</h1>
          <h2>{caseStudy.onePager.subtitle}</h2>
        </div>
        <img src={caseStudy.onePager.image} alt={caseStudy.onePager.title} className="main-image" />
        <div className="details">
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
        </div>
      </div>
      <div className="steps">
        {caseStudy.steps.map((step, index) => (
          <div key={index} className="step">
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
          </div>
        ))}
      </div>
      <div className="learnings">
        <h4>Learnings</h4>
        <ul>{renderLearnings(caseStudy.learnings)}</ul>
      </div>
    </div>
  );
};

export default CaseStudy;