'use client';
import { useEffect } from 'react';
import anime from 'animejs';

export default function ProgressBar({ to = 95 }: { to?: number }) {
  useEffect(() => {
    anime({
      targets: '#progressFill',
      width: `${to}%`,
      duration: 2000,
      easing: 'easeOutQuart',
      update: (a) => {
        const pct = Math.round(a.progress * (to / 100));
        const txt = document.getElementById('progressText');
        if (txt) txt.textContent = `${pct}%`;
      },
    });
  }, [to]);

  return (
    <div className="optimization-progress">
      <div className="progress-bar">
        <div id="progressFill" className="progress-fill" />
      </div>
      <p className="text-center mt-2 text-sm text-gray-500">
        Optimization Progress: <span id="progressText">0%</span>
      </p>
    </div>
  );
}