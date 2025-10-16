import React from "react";

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
  loadTime: string; 
  issues: { text: string; ok: boolean }[];
}


export interface Service {
  icon: (props: { className?: string }) => React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: number;
  note: string;
}

export interface CaseStudy {
  imageLabel: string;
  title: string;
  description: string;
  improvements: {
    value: string;
    label: string;
  }[];
}
export interface SpeedAudit {
  score: number;
  loadTime: string;
  issues: { text: string; ok: boolean }[];
}
export interface ContactFormData {
  name: string;
  email: string;
  website: string;
  currentScore?: string;
  challenge?: string;
}
