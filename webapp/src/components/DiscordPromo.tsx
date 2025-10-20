import Link from 'next/link';

const DiscordPromo = () => (
  <section className="relative overflow-hidden bg-gradient-to-r from-[#090909] via-[#0f0f0f] to-[#090909] px-6 py-24 text-white">
    <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/35 blur-3xl" />
    <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-primary/40 bg-black/70 p-10 text-center shadow-[0_30px_60px_-35px_rgba(177,0,16,0.45)] transition-all duration-300 ease-in-out">
      <h2 className="font-futuristic text-3xl uppercase tracking-[0.4em] text-primary md:text-4xl">
        Join the Bloody Network
      </h2>
      <p className="font-body text-lg tracking-[0.25em] text-white/70">
        Join 20,000+ survivors inside the official BloodyARK Discord. Coordinate raids, get instant support, trade intel,
        and claim your spot in the tribe hierarchy.
      </p>
      <Link
        href="https://discord.gg/bloodyark"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-xl bg-primary px-10 py-3 font-futuristic text-sm uppercase tracking-[0.3em] text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_#b10010]"
      >
        Join the Community
      </Link>
    </div>
  </section>
);

export default DiscordPromo;
