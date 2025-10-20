import Image from 'next/image';
import Link from 'next/link';
import { FaDiscord, FaYoutube } from 'react-icons/fa';

const Hero = () => (
  <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden text-neutral-100">
    <div className="absolute inset-0">
      <Image
        src="/hero-bg.jpg"
        alt="BloodyARK battlefield backdrop"
        fill
        priority
        className="object-cover brightness-[0.75] transition-all duration-300 ease-in-out"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />
    </div>

    <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
      <div className="flex flex-col items-center gap-6">
        <span className="inline-flex items-center justify-center rounded-full border border-primary/50 bg-black/50 px-6 py-2 font-futuristic text-[0.65rem] uppercase tracking-[0.35em] text-primary shadow-[0_0_12px_rgba(177,0,16,0.35)]">
          Server Wipe: Beginning 2026 – The Comeback Begins
        </span>
        <h1 className="font-futuristic text-5xl uppercase tracking-[0.25em] text-neutral-100 drop-shadow-[0_0_18px_rgba(177,0,16,0.45)] md:text-6xl">
          BloodyARK
        </h1>
        <p className="font-futuristic text-xl uppercase tracking-[0.3em] text-primary drop-shadow-[0_0_12px_rgba(177,0,16,0.55)] md:text-2xl">
          Evolve or Die
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="https://discord.gg/bloodyark"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-primary px-8 py-3 font-futuristic text-sm uppercase tracking-[0.32em] text-neutral-100 transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#b10010]"
          >
            <FaDiscord className="text-primary" size={18} />
            Discord
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCPXBISQPPvkbUOqawVwU_Cg"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-8 py-3 font-futuristic text-sm uppercase tracking-[0.32em] text-white transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#b10010]"
          >
            <FaYoutube size={18} />
            YouTube
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
