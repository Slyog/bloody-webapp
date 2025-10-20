'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

type ServerMap = {
  name: string;
  category: 'official' | 'dlc' | 'future';
};

const SERVER_MAPS: ServerMap[] = [
  { name: 'The Island', category: 'official' },
  { name: 'Scorched Earth', category: 'official' },
  { name: 'Aberration', category: 'official' },
  { name: 'Extinction', category: 'official' },
  { name: 'Genesis Part 1', category: 'official' },
  { name: 'Genesis Part 2', category: 'official' },
  { name: 'Ragnarok', category: 'dlc' },
  { name: 'Valguero', category: 'dlc' },
  { name: 'Crystal Isles', category: 'dlc' },
  { name: 'Lost Island', category: 'dlc' },
  { name: 'Fjordur', category: 'dlc' },
  { name: 'The Center', category: 'dlc' },
  { name: 'Future DLC', category: 'future' },
];

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'official', label: 'Official Maps' },
  { id: 'dlc', label: 'DLC Maps' },
  { id: 'future', label: 'Coming Soon' },
] as const;

const ServerList = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]['id']>('all');

  const filteredMaps = useMemo(() => {
    if (activeFilter === 'all') return SERVER_MAPS;
    return SERVER_MAPS.filter((map) => map.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="relative px-6 py-20 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="text-center">
          <h2 className="font-futuristic text-3xl uppercase tracking-[0.4em] text-primary md:text-4xl">
            Server Network
          </h2>
          <p className="mt-4 font-body text-lg uppercase tracking-[0.25em] text-white/65">
            Choose your battlefield across the full ASA cluster.
          </p>
        </header>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {FILTERS.map((filter) => {
            const isActive = filter.id === activeFilter;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full border px-6 py-2 font-futuristic text-[0.65rem] uppercase tracking-[0.3em] transition-all duration-300 ease-in-out ${
                  isActive
                    ? 'border-primary bg-primary text-white shadow-[0_0_20px_rgba(177,0,16,0.45)]'
                    : 'border-white/20 text-white hover:border-primary hover:text-primary'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredMaps.map((map) => (
            <motion.article
              key={map.name}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-6 shadow-[0_20px_40px_-30px_rgba(177,0,16,0.4)]"
            >
              <div className="relative mb-6 flex h-40 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-black via-[#1b0006] to-black">
                <div className="absolute inset-0 opacity-40 blur-3xl" />
                <span className="relative font-futuristic text-2xl uppercase tracking-[0.4em] text-white/80 transition-all duration-500 ease-out group-hover:tracking-[0.5em]">
                  {map.name}
                </span>
              </div>
              <h3 className="font-futuristic text-lg uppercase tracking-[0.35em] text-primary">
                BloodyARK – {map.name}
              </h3>
              <button
                type="button"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-primary/60 px-6 py-2 font-futuristic text-[0.65rem] uppercase tracking-[0.3em] text-white transition-all duration-300 ease-in-out hover:bg-primary hover:shadow-[0_0_18px_rgba(177,0,16,0.45)]"
              >
                Join Server
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServerList;
