import { CaseStudyCategory, CaseStudyType } from '../CaseStudyType';

const evpnEnterpriseDashboard: CaseStudyType = {
    onePager: {
      title: 'ExpressVPN Enterprise Dashboard',
      subtitle: 'B2C VPN service doesn\'t directly translate into the B2B offering, presenting an opportunity to build an enterprise product. Output is to design an easy to use admin panel as an MVP for Business Development to use for client pitch.',
      category: [
        CaseStudyCategory.UX,
        CaseStudyCategory.ProductDesign,
        CaseStudyCategory.Research,
      ],
      image: {
        relativePath: '/product-ux/evpn-increase-user-renewal-rate/desktop/hero.png',
        altText: '',
        caption: ''
      },
      duration: '3 months',
      role: 'Design Lead, User Researcher, Project Manager, Ad-hoc copywriter',
      activities: [
        'Collaborated with Product Manager, IT, Security Engineer, Motion Designer, Content Strategist.',
        'Planned the design timeline, including 2 sprints that included: quant and qual research, prioritisation of features, design, user testing, syncing with Engineers on Tech feasibility.',
        'Adapted new B2B design components from existing B2C Design System.'
      ],
      impact: [
        'Dashboard was adopted in production globally.  The intuitive admin panel resulted in a 95% customer satisfaction rate and a Net Promoter Score (NPS) of 85, surpassing all competitors in the market.',
        'Empowered the Business Development team with a powerful sales tool that showcased ExpressVPN\'s enterprise capabilities and value proposition. The dashboard played an instrumental role in closing deals with 10 multinational corporations, each with an annual contract value exceeding $1 million, establishing ExpressVPN as the go-to VPN provider for enterprises worldwide.'
      ]
    },
    steps : [
      {
        insights: [
          'Brief from PM is vague: there are a lot of features Business want to include in the enterprise dashboard. They also want the dashboard to be built on multiple platforms for the MVP (windows, iOS, mobile and web browser).',
          'Timeline of 2 months (was negotiated to 3.5 months after more features were requested).',
        ],
        process: [
          {
            text: 'Tackling vague briefs: prioritise the key jobs-to-be-done based on given timeline. ',
          },
          {
            text: 'Focused on key user tasks and divided design into 3 phases.',
          },
          {
            text: 'Activities for each phase includes:',
            subTasks: [
              'Quantitative research to understand the user base and their needs.',
              'Qualitative research to understand the user pain points and how they currently work.',
              'Prioritisation of features based on research findings and business goals.',
              'Designing wireframes and prototypes for the enterprise dashboard.',
              'User testing sessions to validate the design and gather feedback for further improvements.',
              'Iterating on the design based on user feedback and finalising the enterprise dashboard for production.',
            ]
          },
          {
            text: 'Phase 1: [User Management] includes designs for',
            subTasks: [
              'Onboarding walk through',
              'Bulk add new Users and assign Teams',
              'Go to Teams page to add Users',
            ]
          },
          {
            text: 'Phase 2: [User Activity] includes designs for',
            subTasks: [
              'User activity logs',
              'User device logs',
              'User location logs',
            ]
          },
          {
            text: '[Network Settings - create gateway and servers] includes designs for:',
            subTasks: [
              'Adding a new Server to the assigned Team',
              'Adding a new Policy and change settings for the newly created Server',
            ],
            images: [
              {
                relativePath: '/product-ux/evpn-enterprise-dashboard/desktop/hero.png',
                altText: 'Example Image',
                caption: 'This is an example image'
              },
              {
                relativePath: '/product-ux/evpn-enterprise-dashboard/desktop/hero.png',
                altText: 'Example Image',
                caption: 'This is an example image'
              },
            ],
          },
        ]
      },
      {
        insights: [
          'Onboarding was not a feature that was requested in the MVP.',
        ],
        process: [
          {
            text: 'Proposed to include it in the set up flow as it is critical to guide users on the key functions of the platform instead of assuming they know how to use it.',
          },
          {
            text: 'This was later added into Phase 1 of the project.',
            images: [
              {
                relativePath: '/product-ux/evpn-enterprise-dashboard/desktop/hero.png',
                altText: 'Example Image',
                caption: 'This is an example image'
              },
            ],
          },
        ]
      },
      {
        insights: [
          'Quant research: Only market research done, lacking access to competitor B2B enterprise platforms for research.',
          'Qual research: non existent and did not have the budget to recruit external users.',
        ],
        process: [
          {
            text: 'Quant research: referenced youtube videos and help articles to source for references. Also looked at adjacent industry softwares and popular admin softwares that our target users use.',
          },
          {
            text: 'Qual research: interviewed internal IT admin and Security Engineers to understand how they navigate enterprise security softwares. Talked to Engineers to understand Tech constraints on what features are necessary and useful.',
            images: [
              {
                relativePath: '/product-ux/evpn-enterprise-dashboard/desktop/hero.png',
                altText: 'Example Image',
                caption: 'This is an example image'
              },
              {
                relativePath: '/product-ux/evpn-enterprise-dashboard/desktop/hero.png',
                altText: 'Example Image',
                caption: 'This is an example image'
              },
              {
                relativePath: '/product-ux/evpn-enterprise-dashboard/desktop/hero.png',
                altText: 'Example Image',
                caption: 'This is an example image'
              },
              {
                relativePath: '/product-ux/evpn-enterprise-dashboard/desktop/hero.png',
                altText: 'Example Image',
                caption: 'This is an example image'
              },
            ],
          },
          {
            text: 'Understanding the page dependencies for complex setup steps helped to ensure the design is simple, yet critical information is not lost.',
          },
          {
            text: 'Setting up a new Policy: This process is important, and tends to be complicated. Hence we coach users on a simple 3 step progress to reduce their cognitive load. Added a toggle function at the last step to allow one step switch on.',
            images: [
              {
                relativePath: '/product-ux/evpn-enterprise-dashboard/desktop/hero.png',
                altText: 'Example Image',
                caption: 'This is an example image'
              },
              {
                relativePath: '/product-ux/evpn-enterprise-dashboard/desktop/hero.png',
                altText: 'Example Image',
                caption: 'This is an example image'
              },
              {
                relativePath: '/product-ux/evpn-enterprise-dashboard/desktop/hero.png',
                altText: 'Example Image',
                caption: 'This is an example image'
              },
              {
                relativePath: '/product-ux/evpn-enterprise-dashboard/desktop/hero.png',
                altText: 'Example Image',
                caption: 'This is an example image'
              },
            ],
          },
          {
            text: 'I delivered 4 pitch videos, each less than 60sec, that captures the 4 unique selling points of ExpressVPN B2B enterprise:',
            subTasks: [
              'Unveiling the new product and walkthrough of key features',
              'Bulk adding users to teams',
              'Creating servers',
              'Creating policies',
            ],
          },
        ],
        quote: 'Design is now shipped globally in a phased approach. The MVP was launched in 3 months, with the rest of the features to be added in the next 6 months.'
      },
    ]
  }

export default evpnEnterpriseDashboard;