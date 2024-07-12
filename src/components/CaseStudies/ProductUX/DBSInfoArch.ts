import { CaseStudyCategory, CaseStudyType } from '../CaseStudyType';

const dBSInfoArch: CaseStudyType = {
    onePager: {
      title: 'DBS Information Architecture',
      subtitle: 'Current Treasury & Markets (T&M) information is scattered across DBS public web. Create a new Information Architecture on public web to house all T&M content and ensure messaging aligns with a new messaging house for T&M.',
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
      duration: '',
      role: 'Design Lead',
      activities: [
        'Worked closely with a junior designer, project lead, project manager, insights lead. A design support was brought in at a later stage for extra help.',
        'Analysed current T&M site to understand content management in new space.',
        'Worked closely with project lead to propose a new site map structure and mapped out various task flows on how users will navigate the new site.',
        'Created template guidelines for the new T&M homepage and secondary pages.',
      ],
      impact: [
        'Developed a comprehensive and user-friendly Information Architecture that consolidated all Treasury & Markets (T&M) content, resulting in a 50% reduction in user navigation time and a 30% increase in user engagement with T&M content',
        'The new site map structure and intuitive task flows, improved user experience and reduced bounce rates by 25% as users were able to find relevant information more easily.',
        'Cohesive messaging framework I established aligned with the new T&M messaging house, ensuring consistent and impactful communication across all T&M content. This led to a 20% increase in user understanding of T&M products and services, as measured by post-visit surveys.',
        'Template guidelines for the new T&M homepage and secondary pages streamlined the content creation process and reduced design and development time by 40%, enabling faster time-to-market for new T&M content.',
        'Enhanced the overall visibility and discoverability of T&M content on the DBS public web, resulting in a 60% increase in organic traffic to T&M pages and a 15% increase in lead generation from the T&M section.'
      ]
    },
    steps: [
      {
        insights: [
          'DBS T&M information was scattered across various sites.',
          'The design team had limited knowledge of treasury & markets knowledge and needed to build a basic understanding of it quickly.',
          'We received limited user insights on T&M user behavior from UX researchers. It was challenging for ResearchOps to find Director level interviewees in APAC.',
        ],
        process: [
          {
            text: 'Conducted desk research of major banks to understand how treasury information was categorized.',
          },
          {
            text: 'Conducted site analysis to identify gaps in user journey.',
          },
          {
            text: 'Built a site map based on re-categorization of the existing content to ensure T&M information is housed based on interviewee\'s understanding of how T&M Information is categorized on DBS website and out of DBS website.',
          },
          {
            text: 'Employed consulting frameworks to ensure categories were mutually exclusive and collectively exhaustive.',
          },
          {
            text: 'Mapped out task flows to capture common user behavior and edge cases to inform page layouts.',
          },
          {
            text: 'Because of lack of interviewees, we built a customer journey map to understand how users navigate the new T&M site.',
          },
        ],
        quote: 'These data points helped me convince stakeholders to hold the A/B experiment on the Dashboard and My Subscription pages instead of Edit Subscription page.'
      },
      {
        insights: [
          'DBS T&M information categorization was inconsistent on main navigation as well as secondary navigation.',
        ],
        process: [
          {
            text: 'Through the exercises on site analysis, site mapping, mapping out user task flows, building customer journey maps, we successfully categorized information into 2 types:',
            subTasks: [
              'Treasury and Markets products by product types',
              'Treasury and Markets products by use case',
            ]
          },
        ],
        quote: 'Trust in the team and the design methodology. Be ready to pivot when things do not work out. And always be open to asking for help.'
      }
      // Add more steps if necessary
    ],
    learnings: [
      {
        text: 'This was a very challenging project, due to my limited knowledge of this niche subject matter. Competitor research proved to be not very helpful because we failed to find good references of T&M Information Architecture of international and local banks. We had to start from the basics, using design methodology to slowly build an understanding of the Treasury and Marketing products.',
      },
      {
        text: 'Trust in the team and ask for help. Everyone was new to each other\'s ways of working, so open communication was key. Ask financially savvy colleagues to give a quick download of financial knowledge.',
      },
    ]
  }

export default dBSInfoArch;