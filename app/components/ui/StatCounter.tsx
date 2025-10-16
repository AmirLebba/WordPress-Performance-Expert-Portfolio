'use client';
import { useEffect, useRef } from 'react';
import { countUp } from '@/lib/animations';

interface Props {
  target: number;
  suffix?: string;
  className?: string;
}

export default function StatCounter({ target, suffix = '', className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    countUp(ref.current, target, { suffix });
  }, [target, suffix]);

  return <span ref={ref} className={className}>0</span>;
}