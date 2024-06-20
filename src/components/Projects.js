import React from 'react';
import WorkCard from './WorkCard';
import './SelectedWork.css';

const Projects = () => {
  return (
    <section className="selected-work">
      <h2>Product Design</h2>
      <div className="work-cards">
        <WorkCard 
          title="Increase ExpressVPN user renewal rate by 83%" 
          description="Increased renewal revenue by 83% within 7 days of testing by triangulating multiple pieces of data to provide a user-friendly design recommendation." 
          link="/case-study/evpn-increase-user-renewal-rate"
        />
        <WorkCard 
          title="Optimise ExpressVPN checkout page for mobile" 
          description="Created 6% uplift in average order value (AOV) of the checkout page by improving page design by having a mobile-first approach." 
          link="/case-study/optimise-expressvpn-checkout"
        />
        <WorkCard 
          title="Enterprise dashboard MVP" 
          description="Designed an easy to use ExpressVPN B2B admin panel as an MVP for Business Development to use for client pitch." 
          link="/case-study/enterprise-dashboard-mvp"
        />
        <WorkCard 
          title="Shell mobile app APAC localisation" 
          description="Collaborated with user researchers to adapt Shell App for local markets and introduced a new payment model to users." 
          link="/case-study/shell-app-apac-localisation"
        />
        <WorkCard 
          title="Designed B2B GTM launch campaign for Philips" 
          description="Designed a workshop to develop an omni-channel campaign strategy to help Philips Air purifier enter into 2 new B2B markets." 
          link="/case-study/philips-b2b-gtm-campaign"
        />
        <WorkCard 
          title="Evangeline the use of customer journey maps" 
          description="Improve work efficiency and understanding of customer experiences through building a single source of truth for the business." 
          link="/case-study/customer-journey-maps"
        />
      </div>
    </section>
  );
}

export default Projects;