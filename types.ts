export interface Service {
  title: string;
  description: string;
  features: string[];
}

export interface CaseStudy {
  title: string;
  role: string;
  problem: string;
  solution: string;
  result: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}