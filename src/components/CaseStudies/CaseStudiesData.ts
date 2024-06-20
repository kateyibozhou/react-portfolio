import { CaseStudyType } from './CaseStudyType';

const caseStudies: Record<string, CaseStudyType> = {
  'evpn-increase-user-renewal-rate': {
    slug: 'evpn-increase-user-renewal-rate',
    onePager: {
      title: 'Increase user renewal rate for ExpressVPN',
      subtitle: 'Objective is to conduct an A/B experiment with new renewal messages. Reframed the initial problem to deliver a design recommendation that increased user renewal rate by 83%.',
      image: 'path/to/image.jpg',
      duration: '3 months',
      role: 'Product Designer',
      activities: [
        'Research',
        'Wireframing',
        'Prototyping'
      ],
      impact: [
        'Increased user engagement by 20%',
        'Reduced bounce rate by 15%'
      ]
    },
    steps: [
      {
        insights: [
          'Insight 1',
          'Insight 2'
        ],
        process: [
          {
            text: 'Step 1',
            subTasks: ['Sub-step 1', 'Sub-step 2']
          },
          {
            text: 'Step 2',
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
  },
  // Add more case studies with their respective slugs
};

export default caseStudies;