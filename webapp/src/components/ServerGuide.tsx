'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const TABS = [
  { id: 'steam', label: 'Steam' },
  { id: 'ps5', label: 'PS5' },
  { id: 'xbox', label: 'Xbox' },
] as const;

const guideContent: Record<(typeof TABS)[number]['id'], string[]> = {
  steam: [
    'Open ARK → Server Browser → Favorites.',
    'Click “Add Server” and paste the IP provided in Discord.',
    'The server appears as BLOODYARK – MAPNAME in your favorites.',
    'Filter settings: Mode = PVP, Password = none, BattlEye = enabled.',
  ],
  ps5: [
    'Launch ARK and open the Community server tab.',
    'Use the search bar and type “BLOODYARK”.',
    'Select the BLOODYARK – MAPNAME entry from the list.',
    'Join and mark as favorite for faster access.',
  ],
  xbox: [
    'Open ARK → Community Servers.',
    'Search for “BLOODYARK” in the filter field.',
    'Choose the BLOODYARK – MAPNAME server you want to battle on.',
    'Join and keep notifications enabled for wipe alerts.',
  ],
};

const ServerGuide = () => {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]['id']>('steam');

  return (
    <section className="relative px-6 pb-24 text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 rounded-3xl border border-white/10 bg-black/60 p-10 shadow-[0_25px_45px_-35px_rgba(177,0,16,0.55)]">
        <header className="text-center">
          <h2 className="font-futuristic text-3xl uppercase tracking-[0.4em] text-primary md:text-4xl">
            Join Guide
          </h2>
          <p className="mt-3 font-body text-base uppercase tracking-[0.25em] text-white/70">
            Get online in minutes, no matter your platform.
          </p>
        </header>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full border px-5 py-2 font-futuristic text-[0.65rem] uppercase tracking-[0.3em] transition-all duration-300 ease-in-out ${
                  isActive
                    ? 'border-primary bg-primary text-white shadow-[0_0_18px_rgba(177,0,16,0.45)]'
                    : 'border-white/20 text-white hover:border-primary hover:text-primary'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <motion.ul
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="space-y-4 text-left"
        >
          {guideContent[activeTab].map((step, index) => (
            <li
              key={index}
              className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm"
            >
              <span className="font-futuristic text-sm uppercase tracking-[0.3em] text-primary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="font-body text-base leading-relaxed text-white/80">{step}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default ServerGuide;
