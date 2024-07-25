import React from 'react';
import './SelectedWork.css';
import styled from 'styled-components';
import WorkCard from './AltWorkCard';

const ProjectCategoryTitle = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primaryLight};
  text-align: left;
  width: 80cqw;
  padding-left: 2rem;

  @media (max-width: 50rem) {
    padding-left: 1rem;
  }
`;

const AutoGrid = styled.div`
  display: grid;
  --auto-grid-min-size: 24rem;
  grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
  gap: 3rem;
  box-sizing: border-box;
  margin: 0 auto;
  width: 100vw;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (max-width: 50rem) {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const AutoGridWrapper = styled.section`
  margin: 0 auto;
  padding: 0 1rem;
`;

const Projects = () => {
  return (
    <section className="selected-work">
      <ProjectCategoryTitle>Product / UX Design</ProjectCategoryTitle>
      <AutoGrid>
        <WorkCard 
          title="Increase ExpressVPN user renewal rate by 83%" 
          description="Increased renewal revenue by 83% within 7 days of testing by triangulating multiple pieces of data to provide a user-friendly design recommendation." 
          path="/case-study/evpn-increase-user-renewal-rate"
          image_path="https://github.com/kateyibozhou/react-portfolio/blob/main/src/assets/images/showcase/renewal.png?raw=true"
        />
        <WorkCard 
          title="Optimise ExpressVPN checkout page for mobile" 
          description="Created 6% uplift in average order value (AOV) of the checkout page by improving page design by having a mobile-first approach." 
          path="/case-study/evpn-mobile-conversion"
          image_path="https://github.com/kateyibozhou/react-portfolio/blob/main/src/assets/images/showcase/evpn-checkout.png?raw=true"
        />
        <WorkCard
          title="DBS Info Architecture" 
          description="Designed a new information architecture for DBS to improve user experience and increase user engagement." 
          path="/case-study/dbs-info-arch"
          image_path="https://github.com/kateyibozhou/react-portfolio/blob/main/src/assets/images/showcase/dbs.png?raw=true"
        />
        <WorkCard
          title="Evanagelise the use of customer journey maps" 
          description='Develop and promote the use of the customer journey map (CJM) in the design team as a single source of truth to understand user behaviour, team dependencies when working on designs.'
          path="/case-study/evpn-evangelise-customer-journey-maps"
          image_path='https://github.com/kateyibozhou/react-portfolio/blob/main/src/assets/images/showcase/evangelise.png?raw=true'
        />
        <WorkCard 
          title="Enterprise dashboard MVP" 
          description="Designed an easy to use ExpressVPN B2B admin panel as an MVP for Business Development to use for client pitch." 
          path="/case-study/evpn-enterprise-dashboard"
          image_path='https://github.com/kateyibozhou/react-portfolio/blob/main/src/assets/images/showcase/dashboard.png?raw=true'
        />
        <WorkCard 
          title="Shell mobile app APAC localisation" 
          description="Collaborated with user researchers to adapt Shell App for local markets and introduced a new payment model to users." 
          path="/case-study/shell-apac"
          image_path='https://github.com/kateyibozhou/react-portfolio/blob/main/src/assets/images/showcase/shell.png?raw=true'
        />
        <WorkCard 
          title="Shell Malaysia localisation" 
          description="Collaborated with user researchers to adapt Shell App for local markets and introduced a new payment model to users." 
          path="/case-study/shell-malaysia"
          image_path=''
        />
        </AutoGrid>
      <ProjectCategoryTitle>Service Design</ProjectCategoryTitle>
      <AutoGrid>
        <WorkCard 
          title="Designed B2B GTM launch campaign for Philips" 
          description="Designed a workshop to develop an omni-channel campaign strategy to help Philips Air purifier enter into 2 new B2B markets." 
          path="/case-study/philips-gtm"
          image_path='https://github.com/kateyibozhou/react-portfolio/blob/main/src/assets/images/showcase/philips.png?raw=true'
        />
        <WorkCard 
          title="Design B2C launch campaign for Philips Vacuum" 
          description="Write description here" 
          path="/case-study/philips-vacuum"
          image_path='https://github.com/kateyibozhou/react-portfolio/blob/main/src/assets/images/showcase/vacuum.png?raw=true'
        />
        <WorkCard 
          title="Xiamen Hospital Communications Design" 
          description="Write description here" 
          path="/case-study/xiamen-hospital"
          image_path=''
        />
      </AutoGrid>
      <ProjectCategoryTitle>Branding & Packaging</ProjectCategoryTitle>
      <AutoGrid>
        <WorkCard 
          title="Rejoice branding and packaging for GC and APAC" 
          description="Design shipped across GC and APAC, resulted in significant improvement in consumer visibility metrics and revenue" 
          path="/case-study/rejoice-branding"
          image_path=''
        />
        <WorkCard 
          title="SK-II Festive 2016" 
          description="Boosted consumer engagement and revenue, reduction in production costs and time-to-market" 
          path="/case-study/skii"
          image_path='https://github.com/kateyibozhou/react-portfolio/blob/main/src/assets/images/showcase/skii.png?raw=true'
        />
        <WorkCard 
          title="Sephora Campaign Management and Optimisation" 
          description="Streamlined campaign resulted in boost in ROI, consumer engagement, and reduction in campaign launch delays" 
          path="/case-study/sephora-campaign"
          image_path=''
        />
      </AutoGrid>
    </section>
  );
}

export default Projects;