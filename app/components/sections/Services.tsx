import { Service } from '@/app/lib/types';
import { Bolt, Clock, Layers } from '@/app/components/ui/icons';
import ServiceCard from '@/app/components/ui/ServiceCard';

const SERVICES: Service[] = [
  {
    icon: Bolt,
    title: 'Core Web Vitals Optimization',
    description:
      'Achieve perfect LCP, FID, and CLS scores with our comprehensive Core Web Vitals optimization service.',
    features: [
      'Largest Contentful Paint optimization',
      'First Input Delay improvement',
      'Cumulative Layout Shift fixing',
      'Real user monitoring setup',
    ],
    price: 1497,
    note: 'One-time optimization + 30 days support',
  },
  {
    icon: Clock,
    title: 'Speed Optimization Package',
    description:
      'Complete performance overhaul including caching, minification, and database optimization.',
    features: [
      'Advanced caching implementation',
      'Database optimization & cleanup',
      'Image compression & WebP conversion',
      'CDN setup and configuration',
    ],
    price: 997,
    note: 'Complete speed optimization',
  },
  {
    icon: Layers,
    title: 'Technical SEO Enhancement',
    description:
      'Combine speed optimization with technical SEO for maximum search visibility and user experience.',
    features: [
      'Schema markup implementation',
      'XML sitemap optimization',
      'Meta tags and structured data',
      'Mobile-first optimization',
    ],
    price: 1297,
    note: 'SEO + Performance package',
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">WordPress Performance Services</h2>
          <p className="section-subtitle">
            Comprehensive optimization solutions tailored to your site&rsquo;s specific needs. From
            Core Web Vitals to database optimization, we handle it all.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}