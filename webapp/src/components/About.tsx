const About = () => (
  <section className="relative overflow-hidden px-6 py-20 text-white">
    <div className="absolute inset-0 bg-noise-texture opacity-10" />
    <div className="relative mx-auto flex max-w-4xl flex-col gap-8 rounded-[2rem] border border-white/10 bg-black/60 p-10 text-center shadow-[0_25px_45px_-35px_rgba(177,0,16,0.4)]">
      <h2 className="font-futuristic text-3xl uppercase tracking-[0.4em] text-primary md:text-4xl">
        The BloodyARK Vision
      </h2>
      <p className="font-body text-lg leading-8 text-white/70">
        BloodyARK returns as an Ark Survival Ascended cluster engineered for disciplined PVP. We balance ruthless combat
        with real-life schedules, so students and workers can compete without burning out. Raids are sanctioned from Friday
        to Sunday; outside those windows the island stays open for PVP skirmishes—no base wipes. We have shaped seasons
        since 2017 and the 2026 comeback is our strongest evolution yet.
      </p>
      <div className="grid gap-6 rounded-2xl border border-white/10 bg-black/40 p-6 text-sm uppercase tracking-[0.3em] text-white/65 transition-all duration-300 ease-in-out md:grid-cols-2">
        <div>
          <p className="font-futuristic text-xs text-primary">Cluster Focus</p>
          <p className="mt-2 text-white">Ark Survival Ascended · PVP oriented</p>
        </div>
        <div>
          <p className="font-futuristic text-xs text-primary">Raid Windows</p>
          <p className="mt-2 text-white">Friday – Sunday raids · Weekday open PVP</p>
        </div>
        <div>
          <p className="font-futuristic text-xs text-primary">Community</p>
          <p className="mt-2 text-white">Friendly for students & workers</p>
        </div>
        <div>
          <p className="font-futuristic text-xs text-primary">Legacy</p>
          <p className="mt-2 text-white">Since 2017 · Stronger than ever in 2026</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
