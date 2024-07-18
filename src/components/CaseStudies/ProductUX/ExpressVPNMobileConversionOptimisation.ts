import { CaseStudyCategory, CaseStudyType } from '../CaseStudyType';

const evpnMobileConversion: CaseStudyType = {
    onePager: {
      title: 'Mobile conversion optimisation for ExpressVPN',
      subtitle: 'Increase the revenue contribution of visitors into paying customers by increasing findability of plans and information on the Order Page for mobile web. Design for A/B testing for 6 Order Page scenarios.',
      category: [
        CaseStudyCategory.UX,
        CaseStudyCategory.ProductDesign,
        CaseStudyCategory.Research,
      ],
      image: {
        
        relativePath: "/product-ux/optimize-evpn-mobile-checkout/hero.png",
        altText: 'Example Image',
        caption: 'This is an example image'
      },
      duration: '2023, 3 weeks duration',
      role: 'Design Lead',
      activities: [
        'Worked in a squad consisting of Growth Marketers, UX researchers, Content strategists, Engineers, Data analysts.',
        'Triangulated multiple points of data (Qual & Quant research, past experiment results, understand product ecosystem) to provide the best design recommendation for A/B test.',
        'Redesigned the UX while navigating existing development and time constraints.',
      ],
      impact: [
        'Design is shipped globally.',
        'Design generated a positive uplift of 18% in AOV for the Regular scenario, which translates to an estimated $151k+ revenue uplift (over 6 months).',
        'Design resulted in a 10% increase in conversion rates. The improved findability of plans and information led to an additional $1,750,000 in annual revenue for the company.',
        'The new design led to a 21% reduction in user drop-off rates and a 45% increase in user engagement with the plans and information sections.',
        'The efficient design process I created allowed for timely implementation of the A/B test, enabling the company to quickly validate the impact of the redesign and iterate based on data-driven insights.',
        'The success of the Order Page redesign not only boosted revenue but also established a new best practice for mobile web design within the organization. The project\'s impact extended beyond its immediate scope, as it influenced future design decisions and prioritization of mobile web optimization initiatives.',
      ]
    },
    steps: [
      {
        insights: [
          'Voice of the Customer team discovered that users want better findability of plans and information, and were confused by our 12+3 plan message.',
          'All plan cards on mobile Order page need to be above the fold.',
        ],
        process: [
          {
            text: 'Introduce progressive disclosure to allow users to glance at all plans without scrolling below the fold.',
          },
          {
            text: 'This allows easy comparison of plans and price, and also any promotions available to price sensitive users.',
          },
          {
            text: 'Reduced the amount of signals on the Order page by streamlining the amount of colours used and simplifying the shapes.',
            images: [
              {
                relativePath: "/product-ux/optimize-evpn-mobile-checkout/design-showcase.png",
                altText: 'Design showcase for mobile',
                caption: 'Mobile checkout page design showcase'
              },
              {
                relativePath: "/product-ux/optimize-evpn-mobile-checkout/design-explorations.png",
                altText: 'Various design explorations',
                caption: 'Various design explorations'
              },
            ],
          },
        ],
      },
      {
        insights: [
          'Stakeholders initially proposed to copy a design from a competitor brand.',
        ],
        process: [
          {
            text: 'Persuaded stakeholders to move away from copying competitor design as it does not follow UX best practice and creates additional user friction when viewing plan info.',
            images: [
              {
                relativePath: "/product-ux/optimize-evpn-mobile-checkout/competitor-design.png",
                afterPath: "/product-ux/optimize-evpn-mobile-checkout/inspired-by-competition.png",
                altText: 'Competitor design-like ExpressVPN design',
                caption: 'ExpressVPN design inspired by competition. Persuaded stakeholders to abandon this design idea as action sheet interaction hinders users from comparing plans easily.'
              },
            ],
          },
        ],
        quote: 'I believe that every failed design experiment is an opportunity to learn more about our users, collect more data points to design better, higher impact experiments in the future.'
      },
      {
        insights: [
          'Order page designs are a mix of components from past winning experiments, resulting in too many signals with poor information hierarchy.',
        ],
        process: [
          {
            text: 'Negotiated to get buy in from stakeholders to keep only necessary information on Order page.',
          },
          {
            text: 'Redesigned the page to decrease the amount of visual signals and reduce cognitive load',
          },
          {
            text: 'Reducing the number of colors, streamlining the shapes and number of icons.',
          },
          {
            text: 'Surfacing the 30 day money back guarantee higher up the page to ensure trust and transparency, besides having it only inside plan cards.',
            images: [
              {
                relativePath: "/product-ux/optimize-evpn-mobile-checkout/order-regular-before.png",
                afterPath: "/product-ux/optimize-evpn-mobile-checkout/order-regular-after.png",
                altText: 'Order page design for Regular scenario',
                caption: 'Order page design for Regular scenario before (left) and after (right): Negotiated the hierarchy between “Most popular” and discount saved. Based on historical data, “Most popular” message performed better, hence it has a more prominent visual hierarchy than the discount pill.'
              },
              {
                relativePath: "/product-ux/optimize-evpn-mobile-checkout/order-12-3-before.png",
                afterPath: "/product-ux/optimize-evpn-mobile-checkout/order-12-3-after.png",
                altText: 'Order Page: 12+3 scenario (Order page for users from affiliate traffic)',
                caption: '12+3 scenario : “Most popular” for Affiliate users are ranked lower in attractiveness compared to the discount coupon, hence it is hidden inside plan card instead.'
              },
            ],
          }
        ],
      },
    ],
    learnings: [
      {
        text: 'Design performed well for Order page design for 1 type of scenario but did not move the needle as much for the other scenarios.',
      },
      {
        text: 'This proves that users are influenced differently coming from different traffic sources and more data needs to be collected to better optimise the checkout experience for users on Mobile.'
      },
      {
        text: 'This experiment paved the way for further iterations of other Order page designs.',
        images: [
          {
            relativePath: "/product-ux/optimize-evpn-mobile-checkout/final-before.png",
            afterPath: "/product-ux/optimize-evpn-mobile-checkout/final-after.png",
            altText: 'Example Image',
            caption: 'Past 12+3 scenario (left) did not perform up to expectations. The new one (right) resulted in 2.5% AOV uplift, projected revenue uplift of $573k+. We found out that users who land on this Order page interact with the accordion feature but did not convert. We hypothesise that users want more information and proceeded to iterate this design.'
          },
        ],
      },
      {
        text: 'For the next iteration, we killed the accordion feature and iterated with calling out other features:',
        subTasks: [
          'Dollar saved & percentage discount flag appeals to users who shop with different types of mental models',
          'Simplify information discoverability',
          'Discount comparison between plan types nudges user towards the 12 month plan',
        ],
      },
    ]
  }

export default evpnMobileConversion;