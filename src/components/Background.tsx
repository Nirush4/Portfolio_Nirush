// components/Background.tsx
'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export function Background() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, [mouseX, mouseY]);

  const x = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), {
    stiffness: 40,
    damping: 12,
  });
  const y = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), {
    stiffness: 40,
    damping: 12,
  });

  return (
    <div
      aria-hidden
      className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'
    >
      <motion.div
        style={{ x, y }}
        className='absolute -top-24 -right-24 size-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]'
      />
      <motion.div
        style={{ x, y }}
        className='absolute -bottom-24 -left-24 size-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]'
      />
      <div className='absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.35))]' />
    </div>
  );
}
