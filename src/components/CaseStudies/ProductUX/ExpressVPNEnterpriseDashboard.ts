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
  }

export default evpnEnterpriseDashboard;