import { CaseStudyCategory, CaseStudyType } from '../CaseStudyType';

const shellMalaysia: CaseStudyType = {
    onePager: {
      title: 'Localisation for Shell Malaysia',
      subtitle: 'After the conclusion of the Shell APAC project, Shell Malaysia came to us with a UI request. They wanted to introduce a new fuel subsidy program for users.',
      category: [
        CaseStudyCategory.CampaignManagement,
        CaseStudyCategory.BrandingPackaging,
        CaseStudyCategory.GrowthDesign
      ],
      image: {
        relativePath: '/product-ux/evpn-increase-user-renewal-rate/desktop/hero.png',
        altText: '',
        caption: ''
      },
      duration: '3 months',
      role: 'Sole Designer',
      activities: [
        'Designed an intuitive redemption process without too much development effort.',
        '',
        '',
        ''
      ],
      impact: [
        '',
        '',
        '',
        '',
        '',      
      ]
    },
    steps: [
      {
        insights: [
          'Minimal disruption to the current flow and screen designs because this was an additional feature to existing design.',
        ],
        process: [
          {
            text: 'Showed key information to reduce cognitive load, while additional info were hidden in secondary layers.',
          },
        ],
      },
      {
        insights: [
          'No visibility to Shell’s backend systems.',
          'New updates on redemption process were given during every check-in, which demands swift pivoting of design direction.',
        ],
        process: [
          {
            text: 'When backend capability was undecided by client, or there were no contact time with developers, I provided multiple scenarios but recommended the option with the smoothest user journey.',
          },
        ],
      },
    ],
    learnings: [
      {
        text:       'As no client side engineers were involved in our meetings, it proved to be difficult to understand backend capabilities. Moving forwards, we will involve engineers to milestone meetings to reduce design effort and second guessing.',
      },
    ]
  }

export default shellMalaysia;