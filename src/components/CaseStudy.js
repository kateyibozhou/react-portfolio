import React from 'react';
import { useParams } from 'react-router-dom';
import './CaseStudy.css'; // Import the CSS file

// Define your case studies here
const caseStudies = {
  '1': {
    title: 'Increase ExpressVPN user renewal rate by 83%',
    description: 'Increased renewal revenue by 83% within 7 days of testing by triangulating multiple pieces of data to provide a user-friendly design recommendation.',
    // Add other case study data here
  },
  '2': {
    title: 'Case Study 2',
    description: 'Description for Case Study 2',
    // Add other case study data here
  },
  // Add more case studies as needed
};

const CaseStudy = () => {
  const { id } = useParams(); // Get the id from the URL

  // Fetch the case study data based on the id
  const caseStudyData = caseStudies[id];

  // If there's no case study for the given id, return a 404 message
  if (!caseStudyData) {
    return <h1>404: Case Study Not Found</h1>;
  }

  return (
    <div className="case-study">
      <h1>{caseStudyData.title}</h1>
      <p>{caseStudyData.description}</p>
      {/* Display other case study data here */}
    </div>
  );
}

export default CaseStudy;