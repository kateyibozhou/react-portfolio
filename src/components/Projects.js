import React from 'react';
import './SelectedWork.css';
import styled from 'styled-components';
import WorkCard from './WorkCard';

const ProjectCategoryTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primaryLight};
  text-align: left;
  width: 80cqw;
`;

const AutoGrid = styled.div`
  display: grid;
  --auto-grid-min-size: 16rem;
  grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
  gap: 1rem;
  width: 100%;
`;

const AutoGridWrapper = styled.section`
  max-width: 65rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Projects = () => {
  return (
    <section className="selected-work">
      <ProjectCategoryTitle>Product/UX Design</ProjectCategoryTitle>
      <AutoGridWrapper>
      <AutoGrid>
        <WorkCard 
          title="Increase ExpressVPN user renewal rate by 83%" 
          description="Increased renewal revenue by 83% within 7 days of testing by triangulating multiple pieces of data to provide a user-friendly design recommendation." 
          path="/case-study/evpn-increase-user-renewal-rate"
        />
        <WorkCard 
          title="Optimise ExpressVPN checkout page for mobile" 
          description="Created 6% uplift in average order value (AOV) of the checkout page by improving page design by having a mobile-first approach." 
          path="/case-study/evpn-mobile-conversion"
        />
        <WorkCard 
          title="Enterprise dashboard MVP" 
          description="Designed an easy to use ExpressVPN B2B admin panel as an MVP for Business Development to use for client pitch." 
          path="/case-study/evpn-enterprise-dashboard"
        />
        <WorkCard 
          title="Shell mobile app APAC localisation" 
          description="Collaborated with user researchers to adapt Shell App for local markets and introduced a new payment model to users." 
          path="/case-study/shell-apac"
        />
        <WorkCard 
          title="Shell Malaysia localisation" 
          description="Collaborated with user researchers to adapt Shell App for local markets and introduced a new payment model to users." 
          path="/case-study/shell-malaysia"
        />
        </AutoGrid>
      </AutoGridWrapper>
      <ProjectCategoryTitle>Service Design</ProjectCategoryTitle>
      <AutoGridWrapper>
      <AutoGrid>
        <WorkCard 
          title="Designed B2B GTM launch campaign for Philips" 
          description="Designed a workshop to develop an omni-channel campaign strategy to help Philips Air purifier enter into 2 new B2B markets." 
          path="/case-study/philips-b2b-gtm-campaign"
        />
        <WorkCard 
          title="Evangelise the use of customer journey maps" 
          description="Improved work efficiency and understanding of customer experiences through building a single source of truth for the business." 
          path="/case-study/customer-journey-maps"
        />
        <WorkCard 
          title="Design B2C launch campaign for Philips Vacuum" 
          description="Write description here" 
          path="/case-study/philips-b2-vacuum"
        />
        <WorkCard 
          title="Xiamen Hospital Communications Design" 
          description="Write description here" 
          path="/case-study/xiamen-hospital"
        />
      </AutoGrid>
      </AutoGridWrapper>
      <ProjectCategoryTitle>Branding & Packaging</ProjectCategoryTitle>
      <AutoGridWrapper>
      <AutoGrid>
        <WorkCard 
          title="Rejoice branding and packaging for GC and APAC" 
          description="Design shipped across GC and APAC, resulted in significant improvement in consumer visibility metrics and revenue" 
          path="/case-study/rejoice-branding"
        />
        <WorkCard 
          title="SK-II Festive 2016" 
          description="Boosted consumer engagement and revenue, reduction in production costs and time-to-market" 
          path="/case-study/skii"
        />
        <WorkCard 
          title="Sephora Campaign Management and Optimisation" 
          description="Streamlined campaign resulted in boost in ROI, consumer engagement, and reduction in campaign launch delays" 
          path="/case-study/sephora-campaign"
        />
      </AutoGrid>
      </AutoGridWrapper>
    </section>
  );
}

export default Projects;