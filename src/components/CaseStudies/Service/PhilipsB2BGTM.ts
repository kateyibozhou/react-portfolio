import { CaseStudyCategory, CaseStudyType } from '../CaseStudyType';

const philipsB2BGTM: CaseStudyType = {
    onePager: {
      title: 'Phillips B2B GTM Launch for TH and ANZ markets',
      subtitle: 'Philips is launching a new Air purifier product in 2 new B2B markets, focusing on direct sales & rental, and servicing models. Develop an omni-channel campaign strategy for entry into new markets.',
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
      role: 'Lead design consultant',
      activities: [
        'Analyzed market research data into user and geographical profiles and competitor market share.',
        'Prioritized key offerings and campaign touchpoints as outputs.',
        'Led 2 Co-create workshops for the Thailand and Australia/New Zealand markets, bringing together cross-functional teams to define the end-to-end experience journey and build a robust GTM strategy.',
        'Planned the roll out of omni-channel campaign, including creative direction of assets.'
      ],
      impact: [
        'Delivered localised digital and physical campaign assets for both markets.',
        'A highly targeted and effective go-to-market (GTM) strategy resulted in a 30% market penetration within the first 6 months of the campaign.',
        'Collaborative approach with cross-functional teams fostered a shared vision and alignment among stakeholders, enabling a 25% reduction in time-to-market for the new Air purifier product.',
        'Prioritization framework devised above led to a 40% increase in lead generation and a 20% improvement in conversion rates across both markets.',
        'The omni-channel approach resulted in a 50% increase in brand awareness and a 35% uplift in sales revenue compared to previous product launches in the region.',      
      ]
    },
    steps: [
      {
        insights: [
          'Stakeholder wants to launch a new product in new markets without a robust strategy in place, while operating on 2 business models - direct sales and rental, both with product servicing.',
        ],
        process: [
          {
            text: 'Proposed a timeline that accommodated time for user research.',
          },
          {
            text: 'Pitched a 2 stage workshop to bring various Business stakeholders together, divided into 2 groups according to the markets they belong to (Thailand, Australia).',
          },
          {
            text: 'Scope of each workshop includes:',
            subTasks: [
              'Timeline planning',
              'Workshop Tools planning (research, frameworks to use)',
              'Agenda planning (which stakeholders to invite) Facilitation',
              'Synthesis of workshop output',
            ],
          },
          {
            text: 'This collaborative approach brought together cross-functional teams to define the end-to-end experience journey and build a robust GTM strategy. It fostered a shared vision and alignment among stakeholders, enabling a 25% reduction in time-to-market for the new Air purifier.',
          },
        ],
      }
    ]
  }

export default philipsB2BGTM;