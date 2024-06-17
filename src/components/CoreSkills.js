import React from 'react';
import SkillCard from './SkillCard';
import './CoreSkills.css';

const CoreSkills = () => {
  return (
    <section className="core-skills">
      <h2>Core skills</h2>
      <div className="skills">
        <SkillCard title="User Experience" description="Advocating for end users is just as important as designing for business needs." />
        <SkillCard title="Growth Design" description="I make sure that design solutions always fulfil business needs, and lead to optimisation, retention and conversion." />
        <SkillCard title="Service Design" description="I take an ecosystem view of the product and understand the user journey in my design processes." />
      </div>
      <p>Other skills I am fluent in: <strong>Branding & Packaging / Illustration / Ecommerce Campaign</strong></p>
    </section>
  );
}

export default CoreSkills;
