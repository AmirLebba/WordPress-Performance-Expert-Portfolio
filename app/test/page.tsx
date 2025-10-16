'use client';
import { motion } from 'motion/react';

export default function Test() {
  return (
    <div className="p-20">
      <p className="mb-4">If you see a green bar grow, Motion works.</p>
      <div className="w-full h-4 bg-gray-200 rounded">
        <motion.div
          className="h-full bg-green-500"
          initial={{ width: 0 }}
          animate={{ width: '95%' }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}