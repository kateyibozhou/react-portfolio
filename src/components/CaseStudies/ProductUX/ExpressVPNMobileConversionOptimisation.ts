import { CaseStudyCategory, CaseStudyType } from '../CaseStudyType';

const evpnMobileConversion: CaseStudyType = {
    onePager: {
      title: 'Mobile conversion optimisation for ExpressVPN',
      subtitle: 'Increase the revenue contribution of visitors into paying customers by increasing findability of plans and information on the Order Page for mobile web. Design for A/B testing for 6 Order Page scenarios.',
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
      duration: '2023, 3 weeks duration',
      role: 'Design Lead',
      activities: [
        'Worked in a squad consisting of Growth Marketers, UX researchers, Content strategists, Engineers, Data analysts.',
        'Triangulated multiple points of data (Qual & Quant research, past experiment results, understand product ecosystem) to provide the best design recommendation for A/B test.',
        'Redesigned the UX while navigating existing development and time constraints.',
      ],
      impact: [
        'Design is shipped globally.',
        'Design generated a positive uplift of 18% in AOV for the Regular scenario, which translates to an estimated $151k+ revenue uplift (over 6 months).',
        'Design resulted in a 10% increase in conversion rates. The improved findability of plans and information led to an additional $1,750,000 in annual revenue for the company.',
        'The new design led to a 21% reduction in user drop-off rates and a 45% increase in user engagement with the plans and information sections.',
        'The efficient design process I created allowed for timely implementation of the A/B test, enabling the company to quickly validate the impact of the redesign and iterate based on data-driven insights.',
        'The success of the Order Page redesign not only boosted revenue but also established a new best practice for mobile web design within the organization. The project\'s impact extended beyond its immediate scope, as it influenced future design decisions and prioritization of mobile web optimization initiatives.',
      ]
    },
    steps: [
      {
        insights: [
          'Voice of the Customer team discovered that users want better findability of plans and information, and were confused by our 12+3 plan message.',
          'All plan cards on mobile Order page need to be above the fold.',
        ],
        process: [
          {
            text: 'Introduce progressive disclosure to allow users to glance at all plans without scrolling below the fold.',
          },
          {
            text: 'This allows easy comparison of plans and price, and also any promotions available to price sensitive users.',
          },
          {
            text: 'Reduced the amount of signals on the Order page by streamlining the amount of colours used and simplifying the shapes.',
          },
        ],
      },
      {
        insights: [
          'Stakeholders initially proposed to copy a design from a competitor brand.',
        ],
        process: [
          {
            text: 'Persuaded stakeholders to move away from copying competitor design as it does not follow UX best practice and creates additional user friction when viewing plan info.',
          },
        ],
        quote: 'I believe that every failed design experiment is an opportunity to learn more about our users, collect more data points to design better, higher impact experiments in the future.'
      },
      {
        insights: [
          'Order page designs are a mix of components from past winning experiments, resulting in too many signals with poor information hierarchy.',
        ],
        process: [
          {
            text: 'Negotiated to get buy in from stakeholders to keep only necessary information on Order page.',
          },
          {
            text: 'Redesigned the page to decrease the amount of visual signals and reduce cognitive load',
          },
          {
            text: 'Reducing the number of colors, streamlining the shapes and number of icons.',
          },
          {
            text: 'Surfacing the 30 day money back guarantee higher up the page to ensure trust and transparency, besides having it only inside plan cards.',
          }
        ],
        quote: 'The next iteration resulted in a 2.5% AOV uplift and projected revenue uplift of $573k+ because design is more optimised for 12+3 scenario users.',
      },
    ],
    learnings: [
      {
        text: 'Design performed well for Order page design for 1 type of scenario but did not move the needle as much for the other scenarios.',
      },
      {
        text: 'This proves that users are influenced differently coming from different traffic sources and more data needs to be collected to better optimise the checkout experience for users on Mobile.'
      },
      {
        text: 'This experiment paved the way for further iterations of other Order page designs.',
      },
    ]
  }

export default evpnMobileConversion;