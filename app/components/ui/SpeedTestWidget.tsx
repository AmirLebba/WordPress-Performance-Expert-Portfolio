'use client';
import { useState } from 'react';
import { SpeedAudit } from '@/lib/types';
import { fakeAudit } from '@/lib/speed-test';

export default function SpeedTestWidget() {
  const [url, setUrl] = useState('');
  const [audit, setAudit] = useState<SpeedAudit | null>(null);
  const [loading, setLoading] = useState(false);

  const run = async () => {
    if (!url) return;
    setLoading(true);
    const res = await fakeAudit(url);
    setAudit(res);
    setLoading(false);
  };

  return (
    <div className="speed-test-widget">
      <input
        type="url"
        className="url-input"
        placeholder="https://yoursite.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button className="test-button" onClick={run} disabled={loading}>
        {loading ? 'Analyzing…' : 'Analyze Performance'}
      </button>

      {audit && (
        <div className="test-results show">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-5 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">{audit.score}</div>
              <div className="text-sm text-gray-500">PageSpeed Score</div>
            </div>
            <div className="text-center p-5 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">{audit.loadTime}s</div>
              <div className="text-sm text-gray-500">Load Time</div>
            </div>
          </div>

          <ul>
            {audit.issues.map((iss) => (
              <li key={iss} className="flex items-center mb-2 text-amber-600">
                <span className="mr-2">⚠️</span>
                {iss}
              </li>
            ))}
          </ul>

          <button className="cta-button w-full mt-6">Get Detailed Optimization Plan</button>
        </div>
      )}
    </div>
  );
}