import { SpeedAudit } from './types';

export async function fakeAudit(url: string): Promise<SpeedAudit> {
  await new Promise((r) => setTimeout(r, 1500)); // fake latency
  return {
    score: Math.max(30, Math.floor(Math.random() * 30 + 70)),
    loadTime: Number((Math.random() * 2 + 1).toFixed(1)),
    issues: ['Large JS files', 'Un-optimised images', 'No CDN detected'],
  };
}