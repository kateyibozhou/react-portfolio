import { CaseStudyCategory, CaseStudyType } from '../CaseStudyType';

const xiamenHospital: CaseStudyType = {
    onePager: {
      title: 'Increase user renewal rate for ExpressVPN',
      subtitle: 'Objective is to conduct an A/B experiment with new renewal messages. Reframed the initial problem to deliver a design recommendation that increased user renewal rate by 83%.',
      category: [
        CaseStudyCategory.UX,
        CaseStudyCategory.ProductDesign,
        CaseStudyCategory.Research,
      ],
      image: {
        relativePath: '../../assets/images/case-studies/product-ux/desktop/hero.svg',
        altText: 'Example Image',
        caption: 'This is an example image'
      },
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
  }

export default xiamenHospital;