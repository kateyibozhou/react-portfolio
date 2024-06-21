import { CaseStudyCategory, CaseStudyType } from '../CaseStudyType';

const evpnIncreaseUserRenewalRate: CaseStudyType = {
    onePager: {
      title: 'Increase user renewal rate for ExpressVPN',
      subtitle: 'Objective is to conduct an A/B experiment with new renewal messages. Reframed the initial problem to deliver a design recommendation that increased user renewal rate by 83%.',
      category: [
        CaseStudyCategory.UX,
        CaseStudyCategory.ProductDesign,
        CaseStudyCategory.Research,
      ],
      image: {
        relativePath: '../../../assets/images/case-studies/product-ux/evpn-increase-user-renewal-rate/desktop/hero.svg',
        altText: 'Example Image',
        caption: 'This is an example image'
      },
      duration: '2023, 3 weeks duration',
      role: 'Design Lead, User Researcher',
      activities: [
        'Worked in a squad consisting of Growth Marketers, UX researchers, Content strategists, Engineers, Data analysts.',
        'Triangulated multiple points of data and proactively advised stakeholders on the best page for experiment.',
        'Redesigned the renewal banner on desktop web and mobile web pages accounting for 4 renewal scenarios.',
      ],
      impact: [
        'Design increased renewal revenue by 83%.',
        'This research identified the Edit Subscription page as the optimal location for the experiment. This data-driven approach helped focus the team\'s efforts and resources on the most impactful area',
        'Variant design generated +127k after 7 days of experiment compared to control design (69k).',
        'Design is shipped globally.'
      ]
    },
    steps: [
      {
        insights: [
          'Growth marketers want to design on the Edit Subscription page, but it is too low down the funnel to create much impact on user behavior.',
        ],
        process: [
          {
            text: 'Triangulating multiple data points (from Google Analytics, Customer Journey Map screen flows and VOTC research), I convinced them to conduct the experimentation on Dashboard because of higher volumes of traffic.',
          },
          {
            text: 'Looked at screen flows to determine location in the sale funnel.',
            images: [
              {
                relativePath: 'path/to/image.jpg',
                altText: 'Example Image',
                caption: 'This is an example image'
              }
            ]
          }
        ],
        quote: 'Quote from this step'
      },
      // Add more steps if necessary
    ],
    learnings: [
      {
        text: 'Learning 1',
        subTasks: ['Sub-learning 1', 'Sub-learning 2']
      },
      {
        text: 'Learning 2'
      }
    ]
  }

export default evpnIncreaseUserRenewalRate;