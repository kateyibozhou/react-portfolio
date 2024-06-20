export interface Step {
    insights: string[];
    process: CaseStudyWork[];
    quote: string;
  }

  export interface CaseStudyWork {
    text: string;
    subTasks?: string[];
    images?: CaseStudyImage[];
  }

  export interface CaseStudyImage {
    relativePath: string;
    altText: string;
    caption: string;
  }
  
  export interface Learning {
    subLearnings?: string[];
    text?: string;
  }

  export interface OnePager {
    title: string;
    subtitle: string;
    image: string;
    duration: string;
    role: string;
    activities: string[];
    impact: string[];
  }
  
  export interface CaseStudyType {
    slug: string;
    onePager: OnePager;
    steps: Step[];
    learnings: CaseStudyWork[];
  }