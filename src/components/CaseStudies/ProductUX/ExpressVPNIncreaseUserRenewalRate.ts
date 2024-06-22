import { CaseStudyCategory, CaseStudyType } from '../CaseStudyType';

const evpnIncreaseUserRenewalRate: CaseStudyType = {
    onePager: {
      title: 'Increase user renewal rate for ExpressVPN',
      subtitle: 'Objective is to conduct an A/B experiment with new renewal messages. Reframed the initial problem to deliver a design recommendation that increased user renewal rate by 83%.',
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
      role: 'Design Lead, User Researcher',
      activities: [
        'Worked in a squad consisting of Growth Marketers, UX researchers, Content strategists, Engineers, Data analysts.',
        'Triangulated multiple points of data and proactively advised stakeholders on the best page for experiment.',
        'Redesigned the renewal banner on desktop web and mobile web pages accounting for 4 renewal scenarios.',
      ],
      impact: [
        'Design increased renewal revenue by 83%.',
        'This research identified the Edit Subscription page as the optimal location for the experiment. This data-driven approach helped focus the team\'s efforts and resources on the most impactful area',
        'Variant design generated +127k after 7 days of experiment compared to control design (69k).',
        'Design is shipped globally.'
      ]
    },
    steps: [
      {
        insights: [
          'Growth marketers want to design on the Edit Subscription page, but it is too low down the funnel to create much impact on user behavior.',
        ],
        process: [
          {
            text: 'Triangulating multiple data points (from Google Analytics, Customer Journey Map screen flows and VOTC research), I convinced them to conduct the experimentation on Dashboard because of higher volumes of traffic.',
          },
          {
            text: 'Looked at screen flows to determine location in the sale funnel.',
          },
          {
            text: 'Looked at GA data to determine traffic volume of each of the page types. GA showed that Dashboard has 35k user traffic vs 11.7k user traffic on My Subscription page vs 5k user traffic on Edit Subscription settings. Traffic will only go down as pages move towards bottom of the funnel.',
          },
          {
            text: 'Looked at how users flow into websites from external sources (renewal emails) to determine what content users have been exposed to, in order to formulate optimal renewal message.',
          },
          {
            text: 'One of the tasks was to map out renewal email to website entry points to understand user flow:',
            subTasks: [
              'Although majority of users land on Dashboard through Organic sources, I believe that majority of users are influenced by email campaigns but do not click through the email CTA into Dashboard.',
              'Users check their emails during their daily commute but will do in-depth research and purchase on their desktop/laptop, hence this behaviour may be detected as organic traffic.'
            ],
          },
        ],
        quote: 'These data points helped me convince stakeholders to hold the A/B experiment on the Dashboard and My Subscription pages instead of Edit Subscription page.'
      },
      {
        insights: [
          'Users want the peace of mind of making payments and that their VPN access will continue',
          'Multiple reminders help users decide on renewal and anticipate payment charges',
        ],
        process: [
          {
            text: 'To solve the pain point of sending multiple reminders to users, I add a “Set a Reminder” as a secondary CTA so user can download an iCal reminder to remind themselves to renew closer to deadline.',
          },
          {
            text: 'But this takes too much Dev effort for this experiment and idea was killed.',
          },
          {
            text: 'I pivoted and proposed a new design:',
            subTasks: [
              'Fun, animated visuals make the banner stand out on the page, creating not just a sense of urgency but memorability.',
              'Provide compelling reasons for renewal by surfacing top USPs for users (these USPs are based on top customer service inquiries).',
              'Primary CTA button leads straight to Edit Subscription page (Order page) to minimise user drop off.',
            ]
          },
          {
            text: 'I created 4 types of renewal reminder banners for:',
            subTasks: [
              'T-45 days',
              'T-72 hours',
              'Expired users, but within grace period',
              'Expired users',
            ]
          },
        ],
        quote: 'I fundamentally believe that good design should deliver business value. Hence, this design increased renewal revenue by 83% ,+127k vs 69k on control design.'
      }
      // Add more steps if necessary
    ],
    learnings: [
      {
        text: 'This experiment performed better than expected. We concluded it after 7 days because it achieved significance at 95% at p-value <0.0001.',
      },
      {
        text: 'What contributed to its win can be summed up below:',
        subTasks: [
          'Don\'t take each project brief at face value, instead, question the brief and back my assumptions with concrete data points.',
          'Have a deep understanding of how users behave in their user journey through constant conversations with various stakeholders outside your teams. I regularly set up 1:1 with adjacent teams to understand how their part of the business works in order to builder a wider ecosystems view.',
          'Having an ecosystems view combined with knowing what metrics to shift, will result in asking the right questions. Asking the right questions will ensure my design delivers the maximum business impact.',
        ]
      },
      {
        text: 'What helped me immensely in this project is having a web customer journey map, which houses all the screens, including email and app entry points into the website, as well as user behaviour across the sales funnel.'
      }
    ]
  }

export default evpnIncreaseUserRenewalRate;