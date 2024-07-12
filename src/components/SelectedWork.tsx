import React from "react";
import WorkCard from "./WorkCard";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Tags } from "../utils/SelectedWorkTags";

import "./SelectedWork.css";

const SelectedWork = () => {
  const projects = [
    {
      title: "Increase ExpressVPN user renewal rate by 83%",
      description:
        "Increased renewal revenue by 83% within 7 days of testing by triangulating multiple points of data to provide a user friendly design recommendation.",
      tags: [Tags.UX, Tags.growth],
      image_path: "/product-ux/evpn-increase-user-renewal-rate/desktop/hero.png",
      path: "/increase-user-renewal-rate",
    },
    {
      title: "Optimise ExpressVPN checkout page for mobile",
      description:
        "Created 8% uplift in average order value (AOV) of the Regular mobile checkout page design by understanding the user journey.",
      tags: [Tags.UX, Tags.growth],
      image_path: "/product-ux/evpn-increase-user-renewal-rate/desktop/hero.png",
      path: "/optimise-checkout-page",
    },
    {
      title: "Enterprise dashboard MVP",
      description:
        "Designed an easy to use ExpressVPN B2B admin panel as an MVP while navigating ambiguities and tight timelines.",
      tags: [Tags.UX],
      image_path: "/product-ux/evpn-increase-user-renewal-rate/desktop/hero.png",
      path: "/enterprise-dashboard-mvp",
    },
    {
      title: "Shell mobile app APAC localisation",
      description:
        "Collaborated with user researchers to adapt Shell App for local markets and introduced a new payment model to users.",
      tags: [Tags.UX],
      image_path: "/product-ux/evpn-increase-user-renewal-rate/desktop/hero.png",
      path: "/shell-mobile-app",
    },
    {
      title: "Designed B2B GTM launch campaign for Philips",
      description:
        "Designed a workshop to develop an omni-channel campaign strategy to help Philips Air purifier enter into 2 new B2B markets.",
      tags: [Tags.strategy, Tags.SD],
      image_path: "/product-ux/evpn-increase-user-renewal-rate/desktop/hero.png",
      path: "/philips-gtm-launch-campaign",
    },
    {
      title: "Evangelise the use of customer journey maps",
      description:
        "Improve work efficiency and understanding of customer experiences through building a single source of truth.",
      tags: [Tags.SD],
      image_path: "/product-ux/evpn-increase-user-renewal-rate/desktop/hero.png",
      path: "/customer-journey-maps",
    },
  ];

  return (
    <section className="selected-work">
      <div className="title" data-aos="fade-right">Selected work</div>
      <div className="work-cards" data-aos="fade-left">
        {projects.map((project) => (
          <WorkCard
            title={project.title}
            description={project.description}
            tags={project.tags}
            path={project.path}
            image_path={project.image_path}
          />
        ))}
      </div>
      <a href="/projects" className="all-projects" data-aos="fade-up">
        all projects <ArrowRightOutlined />
      </a>
    </section>
  );
};

export default SelectedWork;
