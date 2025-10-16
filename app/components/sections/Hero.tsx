import TypedText from "@/app/components/ui/TypedText";
import CountUp from "@/app/components/ui/CountUp";
import { fadeIn } from "@/app/lib/animations";
import ClientOnly from "@/app/components/providers/client-only";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" id="heroCanvas" />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title" data-splitting>
            Transform Your WordPress Site into a{" "}
            <ClientOnly>
              <TypedText
                strings={[
                  "Speed Machine",
                  "Performance Powerhouse",
                  "Conversion Engine",
                  "SEO Champion",
                ]}
              />
            </ClientOnly>
          </h1>

          <p className="hero-subtitle">
            Professional WordPress performance optimization services. Guaranteed
            90+ PageSpeed scores...
          </p>

          <div className="hero-stats fade-in">
            <div className="stat-item">
              <CountUp
                from={0}
                to={247}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text stat-number"
              />
              <span className="stat-label">Sites Optimized</span>
            </div>
            <div className="stat-item">
              <span className=" stat-number">
                <CountUp
                  from={0}
                  to={340}
                  separator="%"
                  direction="up"
                  duration={1}
                  className="count-up-text "
                />
                %
              </span>
              <span className="stat-label">Avg. Speed Increase</span>
            </div>
            <div className="stat-item">
              <span className=" stat-number">
                <CountUp
                  from={0}
                  to={98}
                  separator="%"
                  direction="up"
                  duration={1}
                  className="count-up-text "
                />
                %
              </span>

              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>

          <a href="#contact" className="cta-button">
            Get Your Free Site Audit
          </a>
        </div>

        <div className="hero-visual ">
          <div className="performance-card"></div>
        </div>
      </div>
    </section>
  );
}
