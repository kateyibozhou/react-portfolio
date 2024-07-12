import { CaseStudyCategory, CaseStudyType } from '../CaseStudyType';

const philipsB2CVacuum: CaseStudyType = {
    onePager: {
      title: 'B2C launch design of Philips vacuum',
      subtitle: 'Philips is launching a new league C vacuum cleaner for APAC. The HQ (Netherlands) has a ready set of campaign assets, but stakeholders felt APAC markets need understanding of local user profiles and customization of campaign with Singapore as launch market.',
      category: [
        CaseStudyCategory.CampaignManagement,
        CaseStudyCategory.CommunicationsDesign,
        CaseStudyCategory.StrategyDesign
      ],
      image: {
        relativePath: '/product-ux/evpn-increase-user-renewal-rate/desktop/hero.png',
        altText: '',
        caption: ''
      },
      duration: '3 months',
      role: 'Project lead',
      activities: [
        'Led the design team and external agency for campaign design. Recruited users, led qualitative research, managed timeline of project, reported synthesis, designed campaign.',
        'Conducted competitor analysis and remote diary studies on 16 users.',
        'Identified communications touchpoints and customized messaging based on varying consumer profiles.',
        'Localised existing global assets based on research.'
      ],
      impact: [
        'Presented insights to Floor Care team and Personal Health stakeholders. Campaign launched in 2021.',
        'The personalized approach resulted in a 40% increase in engagement rates across all touchpoints and a 30% improvement in conversion rates.',
        'The localized campaign assets achieved a 45% higher click-through rate and a 35% increase in social media shares compared to the global assets.',
      ]
    },
  }

export default philipsB2CVacuum;