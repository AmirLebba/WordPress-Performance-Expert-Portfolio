import CaseStudyCard from '@/app/components/ui/CaseStudyCard';
import { CaseStudy } from '@/app/lib/types';

const STUDIES: CaseStudy[] = [
  {
    imageLabel: 'E-commerce Store Optimization',
    title: 'WooCommerce Store - 300% Speed Increase',
    description:
      'Large WooCommerce store with 10,000+ products was struggling with 8-second load times. We implemented comprehensive optimization strategies.',
    improvements: [
      { value: '3.2s', label: 'Load Time' },
      { value: '95', label: 'PageSpeed' },
      { value: '+45%', label: 'Conversions' },
    ],
  },
  {
    imageLabel: 'News Portal Optimization',
    title: 'News Portal - Core Web Vitals Success',
    description:
      'High-traffic news website with 500K+ monthly visitors needed perfect Core Web Vitals for Google News inclusion and better rankings.',
    improvements: [
      { value: '1.8s', label: 'LCP' },
      { value: '98', label: 'PageSpeed' },
      { value: '+67%', label: 'Organic Traffic' },
    ],
  },
  {
    imageLabel: 'SaaS Platform Optimization',
    title: 'SaaS Platform - Mobile Performance',
    description:
      'B2B SaaS platform experiencing high mobile bounce rates due to poor performance. Mobile-first optimization strategy implementation.',
    improvements: [
      { value: '2.1s', label: 'Mobile LCP' },
      { value: '92', label: 'Mobile Score' },
      { value: '-35%', label: 'Bounce Rate' },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="case-studies">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            Real results from real clients. See how we&rsquo;ve transformed WordPress sites from
            slow and struggling to fast and profitable.
          </p>
        </div>

        <div className="case-studies-grid">
          {STUDIES.map((s) => (
            <CaseStudyCard key={s.title} study={s} />
          ))}
        </div>
      </div>
    </section>
  );
}