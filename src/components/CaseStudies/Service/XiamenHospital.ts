import { CaseStudyCategory, CaseStudyType } from '../CaseStudyType';

const xiamenHospital: CaseStudyType = {
    onePager: {
      title: 'Xiamen Hospital Communications Design',
      subtitle: 'Created the design identity of the newly built Xiamen Cardiovascular Hospital (China), optimizing it for maximum patient experience.',
      category: [
        CaseStudyCategory.CampaignManagement,
        CaseStudyCategory.CommunicationsDesign,
      ],
      image: {
        relativePath: '/product-ux/evpn-increase-user-renewal-rate/desktop/hero.png',
        altText: '',
        caption: ''
      },
      duration: '3 months',
      role: 'Design consultant',
      activities: [
        'Led ethnography research to identify key consumer touchpoints and gaps based on hospital zones',
        'Defined target consumer groups and hospital zones based on patient, next-of-kin and staff journeys',
        'Created a visual and language system, based on Emotional and Functional copywriting criteria depending on hospital zones and touchpoints',
        'Delivered a work package with key areas for gradual rollout of Comms touchpoints implementation'
      ],
      impact: [
        'The insights gathered from this research informed the creation of a highly targeted and effective communication strategy that improved patient satisfaction scores by 39%.',
        'The consistent and intuitive design language streamlined navigation throughout the hospital, resulting in a a 60% reduction in missed appointments due to communication failures.',
        'The hospital\'s new visual identity was well-received by patients, staff, and visitors, with 95% of respondents reporting that the new design made them feel more comfortable and confident in the hospital\'s services.',
      ]
    },
  }

export default xiamenHospital;