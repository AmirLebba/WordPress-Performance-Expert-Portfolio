'use client';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TypedText({ strings }: { strings: string[] }) {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;
    const t = new Typed(el.current, {
      strings,
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });
    return () => t.destroy();
  }, [strings]);

  return <span ref={el} className="typed-text" />;
}