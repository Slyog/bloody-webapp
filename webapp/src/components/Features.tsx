const FEATURES = [
  {
    title: 'Raid Times',
    description: 'Structured Friday–Sunday raids keep warfare focused without burning out real lives.',
  },
  {
    title: 'Active Support',
    description: 'Trusted admins and veteran survivors respond live on Discord when you need backup.',
  },
  {
    title: 'Unique Concept',
    description: 'Custom-tuned ASA settings deliver a brutal, balanced arena tailored for the BloodyARK meta.',
  },
];

const Features = () => (
  <section className="bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a] px-6 py-24 text-neutral-100">
    <div className="mx-auto flex max-w-5xl flex-col gap-10 text-center">
      <h2 className="font-futuristic text-3xl uppercase tracking-[0.4em] text-primary md:text-4xl">
        Why Survivors Return
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {FEATURES.map(({ title, description }) => (
          <div
            key={title}
            className="group rounded-3xl border border-white/10 bg-black/60 p-8 text-left shadow-[0_25px_45px_-30px_rgba(177,0,16,0.35)] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-primary/70 hover:shadow-[0_0_25px_rgba(177,0,16,0.45)]"
          >
            <h3 className="font-futuristic text-xl uppercase tracking-[0.32em] text-primary">
              {title}
            </h3>
            <p className="mt-4 font-body text-base leading-relaxed tracking-wide text-white/70">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
