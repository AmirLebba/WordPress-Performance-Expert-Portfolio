import { SpeedAudit } from './types';

export async function fakeAudit(url: string): Promise<SpeedAudit> {
  await new Promise((r) => setTimeout(r, 1500)); 
  return {
    score: Math.max(40, Math.floor(Math.random() * 40 + 60)),
    loadTime: `${(Math.random() * 2 + 1).toFixed(1)}s`,
    issues: [
      { text: 'Large JavaScript files detected', ok: false },
      { text: 'Unoptimized images found', ok: false },
      { text: 'Caching properly configured', ok: true },
    ],
  };
}