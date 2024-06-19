import React from "react";
import WorkCard from "./WorkCard";
import { ArrowRightOutlined } from "@ant-design/icons";

import "./SelectedWork.css";

const skills = {
  UX: "UX | Product Design",
  growth: "Growth Design",
  strategy: "Strategy",
  SD: "Service Design",
};
const SelectedWork = () => {
  const projects = [
    {
      title: "Increase ExpressVPN user renewal rate by 83%",
      description:
        "Increased renewal revenue by 83% within 7 days of testing by triangulating multiple points of data to provide a user friendly design recommendation.",
      tags: [skills.UX, skills.growth],
      path: "/increase-user-renewal-rate",
    },
    {
      title: "Optimise ExpressVPN checkout page for mobile",
      description:
        "Created 8% uplift in average order value (AOV) of the Regular mobile checkout page design by improving design of the plan cards.",
      tags: [skills.UX, skills.growth],
      path: "/optimise-checkout-page",
    },
    {
      title: "Enterprise dashboard MVP",
      description:
        "Designed an easy to use ExpressVPN B2B admin panel as an MVP to use for client pitch.",
      tags: [skills.UX],
      path: "/enterprise-dashboard-mvp",
    },
    {
      title: "Shell mobile app APAC localisation",
      description:
        "Collaborated with user researchers to adapt Shell App for local markets and introduced a new payment model to users.",
      tags: [skills.UX],
      path: "/shell-mobile-app",
    },
    {
      title: "Designed B2B GTM launch campaign for Philips",
      description:
        "Designed a workshop to develop an omni-channel campaign strategy to help Philips Air purifier enter into 2 new B2B markets.",
      tags: [skills.strategy, skills.SD],
      path: "/philips-gtm-launch-campaign",
    },
    {
      title: "Evangelise the use of customer journey maps",
      description:
        "Improve work efficiency and understanding of customer experiences through building a single source of truth.",
      tags: [skills.SD],
      path: "/customer-journey-maps",
    },
  ];

  return (
    <section className="selected-work">
      <div className="title">Selected work</div>
      <div className="work-cards">
        {projects.map((project) => (
          <WorkCard
            title={project.title}
            description={project.description}
            tags={project.tags}
            path={project.path}
          />
        ))}
      </div>
      <a href="/projects" className="all-projects">
        all projects <ArrowRightOutlined />
      </a>
    </section>
  );
};

export default SelectedWork;
