import React from 'react';
import WorkCard from './WorkCard';
import './SelectedWork.css';

const SelectedWork = () => {
  return (
    <section className="selected-work">
      <h2>Selected work</h2>
      <div className="work-cards">
        <WorkCard title="Increase ExpressVPN user renewal rate by 83%" description="Increased renewal revenue by 83% within 7 days of testing by triangulating multiple pieces of data to provide a user-friendly design recommendation." />
        <WorkCard title="Optimise ExpressVPN checkout page for mobile" description="Created 6% uplift in average order value (AOV) of the checkout page by improving page design by having a mobile-first approach." />
        <WorkCard title="Enterprise dashboard MVP" description="Designed an easy to use ExpressVPN B2B admin panel as an MVP for Business Development to use for client pitch." />
        <WorkCard title="Shell mobile app APAC localisation" description="Collaborated with user researchers to adapt Shell App for local markets and introduced a new payment model to users." />
        <WorkCard title="Designed B2B GTM launch campaign for Philips" description="Designed a workshop to develop an omni-channel campaign strategy to help Philips Air purifier enter into 2 new B2B markets." />
        <WorkCard title="Evangeline the use of customer journey maps" description="Improve work efficiency and understanding of customer experiences through building a single source of truth for the business." />
      </div>
      <a href="/projects" className="all-projects">ALL PROJECTS</a>
    </section>
  );
}

export default SelectedWork;