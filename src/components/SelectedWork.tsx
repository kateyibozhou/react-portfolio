import React from "react";
import WorkCard from "./WorkCard";
import "./SelectedWork.css";

const SelectedWork = () => {
  const projects = [
    {
      title: "Increase ExpressVPN user renewal rate by 83%",
      description:
        "Increased renewal revenue by 83% within 7 days of testing by triangulating multiple points of data to provide a user friendly design recommendation.",
    },
    {
      title: "Optimise ExpressVPN checkout page for mobile",
      description:
        "Created 8% uplift in average order value (AOV) of the Regular mobile checkout page design by improving design of the plan cards.",
    },
    {
      title: "Enterprise dashboard MVP",
      description:
        "Designed an easy to use ExpressVPN B2B admin panel as an MVP to use for client pitch.",
    },
    {
      title: "Shell mobile app APAC localisation",
      description:
        "Collaborated with user researchers to adapt Shell App for local markets and introduced a new payment model to users.",
    },
    {
      title: "Designed B2B GTM launch campaign for Philips",
      description:
        "Designed a workshop to develop an omni-channel campaign strategy to help Philips Air purifier enter into 2 new B2B markets.",
    },
    {
      title: "Evangelise the use of customer journey maps",
      description:
        "Improve work efficiency and understanding of customer experiences through building a single source of truth.",
    },
  ];

  return (
    <section className="selected-work">
      <div className="title">Selected work</div>
      <div className="work-cards">
        {projects.map((project) => (
          <WorkCard title={project.title} description={project.description} />
        ))}
      </div>
      <a href="#projects" className="all-projects">
        ALL PROJECTS
      </a>
    </section>
  );
};

export default SelectedWork;
