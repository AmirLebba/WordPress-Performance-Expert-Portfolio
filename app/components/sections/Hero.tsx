import TypedText from '@/components/ui/TypedText';
import StatCounter from '@/components/ui/StatCounter';
import ProgressBar from '@/components/ui/ProgressBar';
import { fadeIn } from '@/lib/animations';
import ClientOnly from '@/components/providers/client-only';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" id="heroCanvas" />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title" data-splitting>
            Transform Your WordPress Site into a{' '}
            <ClientOnly>
              <TypedText strings={['Speed Machine', 'Performance Powerhouse', 'Conversion Engine', 'SEO Champion']} />
            </ClientOnly>
          </h1>

          <p className="hero-subtitle">
            Professional WordPress performance optimization services. Guaranteed 90+ PageSpeed scores...
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <ClientOnly>
                <StatCounter target={247} className="stat-number" />
              </ClientOnly>
              <span className="stat-label">Sites Optimized</span>
            </div>
            <div className="stat-item">
              <ClientOnly>
                <StatCounter target={340} suffix="%" className="stat-number" />
              </ClientOnly>
              <span className="stat-label">Avg. Speed Increase</span>
            </div>
            <div className="stat-item">
              <ClientOnly>
                <StatCounter target={98} suffix="%" className="stat-number" />
              </ClientOnly>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>

          <a href="#contact" className="cta-button">Get Your Free Site Audit</a>
        </div>

        <div className="hero-visual">
          <div className="performance-card">
            {/* ... static card content ... */}
            <ClientOnly>
              <ProgressBar />
            </ClientOnly>
          </div>
        </div>
      </div>
    </section>
  );
}