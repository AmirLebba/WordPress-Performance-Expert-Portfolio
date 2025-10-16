export interface CaseStudy {
  title: string;
  description: string;
  improvements: {
    label: string;
    value: string;
  }[];
}

export interface SpeedAudit {
  score: number;
  loadTime: number;
  issues: string[];
}
export interface Service {
  icon: (props: { className?: string }) => JSX.Element;
  title: string;
  description: string;
  features: string[];
  price: number;
  note: string;
}
