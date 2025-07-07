'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-transparent shadow-lg py-4 px-6 flex items-center justify-between sticky top-0 z-50 rounded-b-xl"
    >
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full shadow" />
        <span className="text-xl sm:text-2xl font-bold text-[#080808] tracking-wide">QuoteGen</span>
      </div>

      {/* Title & Subtitle */}
      <div className="text-right hidden sm:block">
        <h1 className="text-lg sm:text-xl font-semibold text-[#e0b084]"> Quote Generator </h1>
        <p className="text-sm text-[#d1bba0]">Get your daily dose of motivation</p>
      </div>
    </motion.header>
  );
}
