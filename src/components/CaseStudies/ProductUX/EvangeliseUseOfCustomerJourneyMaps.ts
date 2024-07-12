import { CaseStudyCategory, CaseStudyType } from '../CaseStudyType';

const evpnEvangeliseCustomerJourneyMaps: CaseStudyType = {
    onePager: {
      title: 'Evangalise the use of Customer Journey Maps for ExpressVPN',
      subtitle: 'Develop and promote the use of the customer journey map (CJM) in the design team as a single source of truth to understand user behaviour, team dependencies when working on designs.',
      category: [
        CaseStudyCategory.UX,
        CaseStudyCategory.ProductDesign,
        CaseStudyCategory.Research,
      ],
      image: {
        relativePath: "/product-ux/evpn-increase-user-renewal-rate/desktop/hero.png",
        altText: 'Example Image',
        caption: 'This is an example image'
      },
      duration: '2023, ongoing',
      role: 'Design Evangelist',
      activities: [
        'Led and promoted the use case of CJM to multiple design stakeholders and collaborators of the design team.',
        'Embedded the CJM into design process and shared best practices with other Kape brands (Cyber Ghost, Private Internet Access).',
      ],
      impact: [
        'Created a more efficient way of working for designers.',
        'Helped designers build stronger design recommendations when pitching solutions to business stakeholders.',
        'Secondary stakeholders like Growth Marketers and Researchers benefited from having an ecosystems view.',
      ]
    },
    steps: [
      {
        insights: [
          'When I joined ExpressVPN, I realised information (qual and quant data, web screens) were scattered in multiple locations when designers worked on design tickets, which increased time spent looking for evidence to support design recommendations.',
          'Teams generally works in silos as each team owns part of the web experience. Often, gaps in user experience were not found out due to no visibility. Eg. Customer Web Experience team takes care of all Login and Subscription flows. Payments and Accounts team looks at Onboarding flows. The journey from Onboarding to Login is not a smooth one and this is not discovered.',
        ],
        process: [
          {
            text: 'Mapped out Organic user journey and Affiliates user journey, as well as detailed Sub journeys with both Happy and Unhappy screens.',
          },
          {
            text: 'Established the CJM as a source of truth for designers to look for any screen on the website user journey from pre-purchase to purchase to renewal to cancellation.',
          },
          {
            text: 'Inconsistent user experiences discovered through mapping the CJM are flagged to stakeholders and put in design backlog.',
          },
          {
            text: 'While it is not possible to embed quantitative data into the CJM as it is constantly fluctuating on Google Analytics, the approach is to take a slice of it during a certain time frame to give a general view of how a particular page performed in a particular week (Eg. first week of Aug).',
          },
          {
            text: 'I Embedded the CJM into design templates for easy access by designers, marking out',
          },
          {
            text: 'Promoted the CJM to Growth Marketers, UX Researchers, Content Strategists as a document to cross check the latest screens, ensure copy consistency, ensure the correct screens are targeted for A/B testing.',
          },
        ],
        quote: 'The CJM is now embedded into the design process and the document serves multiple business functions - Design, Research, Growth Marketing.'
      },
    ],
  }

export default evpnEvangeliseCustomerJourneyMaps;