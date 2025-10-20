"use client";

import { motion } from 'framer-motion';

const SeasonPrize = () => (
  <section className="relative overflow-hidden px-6 py-24 text-white">
    <div className="absolute inset-0 bg-noise-texture opacity-10" />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-[2rem] border border-red-500/60 bg-gradient-to-br from-[#130000] via-[#210005] to-[#050101] p-12 text-center shadow-[0_0_25px_#b10010]"
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-4 rounded-[1.6rem] border border-red-600/40"
        animate={{ opacity: [0.9, 0.5, 0.9] }}
        transition={{ duration: 3.6, repeat: Infinity }}
      />
      <motion.span
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(177, 0, 16, 0.45), transparent 55%)',
        }}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <p className="font-futuristic text-sm uppercase tracking-[0.5em] text-primary">
        Bloody Season Prize Pool
      </p>
      <h2 className="font-futuristic text-4xl uppercase tracking-[0.38em] text-white md:text-5xl">
        Evolve. Conquer. Win the Blood Money.
      </h2>
      <div className="relative flex flex-col items-center gap-4">
        <span className="font-futuristic text-xs uppercase tracking-[0.4em] text-primary">
          Community Donations → Cash Rewards
        </span>
        <span className="relative inline-block font-futuristic text-6xl uppercase tracking-[0.35em] text-white">
          <motion.span
            className="absolute inset-0 text-primary blur-sm"
            aria-hidden="true"
            animate={{ opacity: [0.7, 0.2, 0.7] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            ???€
          </motion.span>
          <span className="relative glitch">???€</span>
        </span>
        <p className="font-body text-lg leading-relaxed tracking-wide text-white/70">
          Each season we pool every community donation into a public fund. That total becomes real cash prizes for the top
          survivors of the wipe. Support the cluster, grow the bounty, and dominate the leaderboard.
        </p>
      </div>
    </motion.div>
  </section>
);

export default SeasonPrize;
