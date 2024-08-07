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
            text: 'Triangulating multiple data points (from Google Analytics, Customer Journey Map screen flows and VOTC research), I convinced them to conduct the experimentation on Dashboard because of higher volumes of traffic:',
            isParagraph: true,
            images: [
              {
                relativePath: "/product-ux/evpn-increase-user-renewal-rate/1-screen-flow.png",
                altText: 'I proposed initial A/B experiment on the Edit Subscription page. I mapped out the screen flow and traffic pulled from Google Analytics to determine which page is the most optimal for experimentation.',
                caption: 'I proposed initial A/B experiment on the Edit Subscription page. I mapped out the screen flow and traffic pulled from Google Analytics to determine which page is the most optimal for experimentation.'
              },
            ],
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
            text: 'Mapped out renewal email to website entry points to understand user flow:',
            // subTasks: [
            //   'Although majority of users land on Dashboard through Organic sources, I believe that majority of users are influenced by email campaigns but do not click through the email CTA into Dashboard.',
            //   'Users check their emails during their daily commute but will do in-depth research and purchase on their desktop/laptop, hence this behaviour may be detected as organic traffic.'
            // ],
            images: [
            {
            relativePath: "/product-ux/evpn-increase-user-renewal-rate/2-map-renewal-email.png",
            altText: 'Mapping out renewal email to website entry points to understand user flow. Although majority of users land on Dashboard through Organic sources, I believe that majority of users are influenced by email campaigns but do not click through the email CTA into Dashboard. Users check their emails during their daily commute but will do indepth research and purchase on their desktop/laptop, hence this behaviour may be detected as organic traffic.',
            caption: 'Mapping out renewal email to website entry points to understand user flow. Although majority of users land on Dashboard through Organic sources, I believe that majority of users are influenced by email campaigns but do not click through the email CTA into Dashboard. Users check their emails during their daily commute but will do indepth research and purchase on their desktop/laptop, hence this behaviour may be detected as organic traffic.'
            },
            // {
            //   relativePath: "/product-ux/evpn-increase-user-renewal-rate/1-2-dash.png",
            //   altText: 'Dashboard, 35k users',
            //   caption: 'Dashboard, 35k users'
            // },
            // {
            //   relativePath: "/product-ux/evpn-increase-user-renewal-rate/my-sub.png",
            //   altText: 'My Subscription, 11.7k users',
            //   caption: 'My Subscription, 11.7k users'
            // },
            // {
            //   relativePath: "/product-ux/evpn-increase-user-renewal-rate/edit-sub-settings.png",
            //   altText: 'Edit Subscription settings, 5k users',
            //   caption: 'Edit Subscription settings, 5k users'
            // },
            // {
            // relativePath: "/product-ux/evpn-increase-user-renewal-rate/t-45.png",
            // altText: 'Dashboard: renewal reminder for T-45 days',
            // caption: 'Dashboard: renewal reminder for T-45 days'
            // },
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
            text: 'To reduce multiple reminders, I added a "Set a Reminder" button, letting users download a reminder to their calendar and stay on top of renewal deadlines.',
          },
          {
            text: 'But this took too much Dev effort for this experiment and idea was killed.',
            images: [
              {
              relativePath: "/product-ux/evpn-increase-user-renewal-rate/init.png",
              altText: 'Initial design proposed solved a user pain point, but was shelved due to development effort.',
              caption: 'Initial design proposed solved a user pain point, but was shelved due to development effort.'
            },
          ],
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
            ],
            videos: [
              {
              relativePath: "/product-ux/evpn-increase-user-renewal-rate/mobile.mp4",
              altText: 'A snapshot of the final design on mobile',
              caption: 'A snapshot of the final design on mobile'
            },
              {
              relativePath: "/product-ux/evpn-increase-user-renewal-rate/desktop.mp4",
              altText: 'A snapshot of the final design on desktop',
              caption: 'A snapshot of the final design on desktop'
            },
          ],
          },
        ],
        quote: 'I fundamentally believe that good design should deliver business value. Hence, this design increased renewal revenue by 83% ,+127k vs 69k on control design.'
      }
    ],
    learnings: [
      {
        text: 'This experiment performed better than expected. We concluded it after 7 days because it achieved significance at 95% at p-value \<0.0001.',
      },
      {
        text: 'What contributed to its win can be summed up below:',
        subTasks: [
          'Don\'t take each project brief at face value, instead, question the brief and back my assumptions with concrete data points.',
          'Have a deep understanding of how users behave in their user journey through constant conversations with various stakeholders outside your teams. I regularly set up 1:1 with adjacent teams to understand how their part of the business works in order to builder a wider ecosystems view.',
          'Having an ecosystems view combined with knowing what metrics to shift, will result in asking the right questions. Asking the right questions will ensure my design delivers the maximum business impact.',
        ],
        images: [
          {
          relativePath: "/product-ux/evpn-increase-user-renewal-rate/map.png",
          altText: 'Customer journey map',
          caption: 'Customer journey map'
          }
        ],
      },
      {
        text: 'What helped me immensely in this project is having a web customer journey map, which houses all the screens, including email and app entry points into the website, as well as user behaviour across the sales funnel.'
      }
    ]
  }

export default evpnIncreaseUserRenewalRate;