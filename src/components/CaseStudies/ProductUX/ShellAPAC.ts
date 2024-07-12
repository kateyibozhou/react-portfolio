import { CaseStudyCategory, CaseStudyType } from '../CaseStudyType';

const shellAPAC: CaseStudyType = {
    onePager: {
      title: 'Localisation for Shell APAC ',
      subtitle: 'Payment and loyalty redemption exists as separate flows. Design a cohesive payment and loyalty experience of Shell Asia app for Eastern markets (SG, MY, IN, ID).',
      category: [
        CaseStudyCategory.ProductDesign,
        CaseStudyCategory.UX,
        CaseStudyCategory.GrowthDesign
      ],
      image: {
        relativePath: '/product-ux/evpn-increase-user-renewal-rate/desktop/hero.png',
        altText: '',
        caption: ''
      },
      duration: '3 months',
      role: 'One of the 2 designers',
      activities: [
        'Created the payment flow which forms the foundation for adaptations to different markets. ',
        'Collaborated with researchers to understand local markets and identify high impact improvements, including user testing. Designed a consistent and integrated user experience, while capturing the payment nuances and attitudes towards loyalty across different markets.',
      ],
      impact: [
        'This work helped design a cohesive payment and loyalty experience for the Shell Asia app, tailored to the specific needs and preferences of APAC markets.',
        'The localized app experience led to a 23% increase in user adoption rates and a 17% uplift in customer lifetime value (CLTV) across APAC markets.',
        'Consistent and integrated user experience I created seamlessly captured the payment nuances and attitudes towards loyalty across different markets. The streamlined design led to a 41% increase in loyalty program participation and a roughly 20% boost in payment transaction volumes, contributing to significant revenue growth for Shell in the APAC region.',
        'The success of the Shell Asia app localization project established a new best practice for regional app customization within the organization. The project\'s impact extended beyond its immediate scope, as it influenced future app development strategies and prioritization of localization efforts in other markets, leading to improved user experiences and increased market share for Shell globally.',
      ],
    },
    steps: [
      {
        insights: [
          'Educate users on new payment methods for fuel, that is only present in MY market.',
          'User needs to preset payment amount before fueling.',
          'Simplification of complex loyalty program flow.',
        ],
        process: [
          {
            text: 'Introduce a new payment mental model to users. Communicated clear onboarding screens that highlight new payment methods tailored for each local context of use. ',
          },
          {
            text: 'Because users are paying before knowing how much dollar value of petrol they will fuel, we need to provide assurance at relevant touchpoints throughout payment and fueling journey.',
          },
          {
            text: 'Decreasing anxiety will increase in brand trust and increase the adoption of this new feature.',
          },
          {
            text: 'If an interaction or feature is new, give users lots of assurance to alleviate anxiety and create trust.',
          },
        ],
        quote: 'The new payment mental model and simplified loyalty program flow increased user adoption rates by 23% and customer lifetime value by 17% across APAC markets.'
      },
      {
        insights: [
          'Homepage lacks information hierarchy. But we cannot change the information architecture due to development constraints. ',
          'Ensure scalability and being able to accommodate additional features for different markets. ',
        ],
        process: [
          {
            text: 'Simplification and optimisation of screens:',
            subTasks: [
              'Optimised homepage to reduce ambiguity.',
              'Created a stronger card lockup for membership; allow easy redemption of offers without clicking into Offer page.',
              'Homepage is made up of modular sections that can moved around and taken out as needed.',
            ],
          },
        ],
        quote: ' After the conclusion of the first project, Shell Malaysia came to us with a UI request. They wanted to introduce a new fuel subsidy program for users.'
      },
    ],
  }

export default shellAPAC;