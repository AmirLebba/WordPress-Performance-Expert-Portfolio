'use client';
import { CaseStudy } from '@/app/lib/types';

interface Props {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: Props) {
  const { imageLabel, title, description, improvements } = study;

  return (
    <div className="case-study-card">
      <div className="case-study-image">{imageLabel}</div>

      <div className="case-study-content">
        <h3 className="case-study-title">{title}</h3>
        <p className="case-study-description">{description}</p>

        <div className="performance-improvement">
          {improvements.map((i) => (
            <div key={i.label} className="improvement-item">
              <span className="improvement-value">{i.value}</span>
              <span className="improvement-label">{i.label}</span>
            </div>
          ))}
        </div>

        <button className="cta-button">Read Full Case Study</button>
      </div>
    </div>
  );
}