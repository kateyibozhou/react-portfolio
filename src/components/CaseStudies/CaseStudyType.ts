export interface Step {
    insights: string[];
    process: CaseStudyWork[];
    quote?: string;
  }

  export interface CaseStudyWork {
    text: string;
    subTasks?: string[];
    images?: CaseStudyImage[];
  }

  export interface CaseStudyImage {
    relativePath: string;
    afterPath?: string;
    altText: string;
    caption: string;
  }
  
  export interface Learning {
    subLearnings?: string[];
    text?: string;
    images?: CaseStudyImage[];
  }

// enum category of UX, Product Design, Research, Service Design, Branding & Packaging, Strategy Design, Growth Design, Illustration, Art Direction
  export enum CaseStudyCategory {
    UX = 'UX',
    ProductDesign = 'Product Design',
    Research = 'Research',
    ServiceDesign = 'Service Design',
    BrandingPackaging = 'Branding & Packaging',
    CampaignManagement = 'Campaign Management',
    CommunicationsDesign = 'Communications Design',
    StrategyDesign = 'Strategy Design',
    GrowthDesign = 'Growth Design',
    Illustration = 'Illustration',
    ArtDirection = 'Art Direction'
  }

  export interface OnePager {
    title: string;
    subtitle: string;
    category: CaseStudyCategory[];
    image: CaseStudyImage;
    duration: string;
    role: string;
    activities: string[];
    impact: string[];
  }
  
  export interface CaseStudyType {
    onePager: OnePager;
    steps?: Step[];
    learnings?: CaseStudyWork[];
  }