'use client';
import { useState } from 'react';
import { fakeAudit } from '@/lib/speed-test';
import { SpeedAudit } from '@/lib/types';

export default function SpeedTestWidget() {
  const [url, setUrl]   = useState('');
  const [audit, setAudit] = useState<SpeedAudit | null>(null);
  const [loading, setLoading] = useState(false);

  const run = async () => {
    if (!url) return;
    setLoading(true);
    const res = await fakeAudit(url);
    setAudit(res);
    setLoading(false);
  };

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="speed-test-widget">
      <div className="widget-header">
        <h3 className="widget-title">WordPress Speed Test</h3>
        <p className="widget-subtitle">Get your performance score in 30 seconds</p>
      </div>

      <input
        type="url"
        className="url-input"
        placeholder="Enter your website URL (e.g., https://yoursite.com)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button className="test-button" onClick={run} disabled={loading}>
        {loading ? 'Analyzing…' : 'Analyze Performance'}
      </button>

      {audit && (
        <div className="test-results show">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <ScoreBox value={audit.score} label="PageSpeed Score" />
            <ScoreBox value={audit.loadTime} label="Load Time" />
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-primary-navy">Performance Issues Found:</h4>
            <ul className="list-none space-y-2">
              {audit.issues.map((i) => (
                <li
                  key={i.text}
                  className={`flex items-center ${
                    i.ok ? 'text-accent-green' : 'text-warning-amber'
                  }`}
                >
                  <span className="mr-2">{i.ok ? '✅' : '⚠️'}</span>
                  {i.text}
                </li>
              ))}
            </ul>
          </div>

          <button className="cta-button w-full" onClick={scrollToContact}>
            Get Detailed Optimization Plan
          </button>
        </div>
      )}
    </div>
  );
}

// tiny helper
function ScoreBox({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="text-center p-5 bg-bg-light rounded-lg">
      <div className="text-3xl font-bold text-accent-green">{value}</div>
      <div className="text-sm text-text-gray">{label}</div>
    </div>
  );
}