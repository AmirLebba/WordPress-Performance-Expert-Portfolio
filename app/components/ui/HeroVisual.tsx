"use client";
import { useEffect, useRef } from "react";
import { animate } from "animejs";
import CountUp from "@/app/components/ui/CountUp";

export default function HeroVisual() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();

          setTimeout(() => {
            const progressFill = document.getElementById("progressFill");
            const progressText = document.getElementById("progressText");
            if (!progressFill || !progressText) return;

            animate(progressFill, {
              width: "95%",
              duration: 1000,
              easing: "easeOutQuart",
              onUpdate: () => {
                const current = parseFloat(
                  (progressFill as HTMLDivElement).style.width // "45%" → 45
                );
                const pct = Math.round(current * 0.95);
                progressText.textContent = `${pct}%`;
              },
            });
          }, 1000);
        }
      },
      { threshold: 0.3 }
    );

    io.observe(cardRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <div className="hero-visual">
      <div ref={cardRef} className="performance-card">
        <div className="performance-header">
          <h3 className="performance-title">Performance Score</h3>
          <span className="performance-score">
            <CountUp
              from={0}
              to={90}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text stat-number"
              delay={1}
            />
          </span>
        </div>

        <div className="metrics-grid">
          <div className="metric">
            <span className="metric-label">LCP</span>
            <span className="metric-value">1.2s</span>
          </div>
          <div className="metric">
            <span className="metric-label">FID</span>
            <span className="metric-value">12ms</span>
          </div>
          <div className="metric">
            <span className="metric-label">CLS</span>
            <span className="metric-value">0.05</span>
          </div>
          <div className="metric">
            <span className="metric-label">Speed Index</span>
            <span className="metric-value">1.8s</span>
          </div>
        </div>

        <div className="optimization-progress">
          <div className="progress-bar">
            <div
              id="progressFill"
              className="progress-fill w-0"
              style={{ width: "0%" }}
            />
          </div>
          <p className="text-center mt-2 text-sm text-text-gray">
            Optimization Progress: <span id="progressText">0%</span>
          </p>
        </div>
      </div>
    </div>
  );
}
