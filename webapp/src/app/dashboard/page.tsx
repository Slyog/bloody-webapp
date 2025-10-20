export const metadata = {
  title: 'Command Center | BloodyARK',
};

const Dashboard = () => (
  <section className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a] px-6 py-24 text-neutral-100">
    <div className="mx-auto flex max-w-3xl flex-col gap-6 text-center">
      <h1 className="font-futuristic text-3xl uppercase tracking-[0.4em] text-primary">
        Command Center
      </h1>
      <p className="font-body text-lg leading-relaxed text-white/70">
        The BloodyARK Command Center will become your mission hub for tracking tribe stats, monitoring raid windows, and
        deploying server commands. Stand by—access will unlock with the 2026 relaunch. Until then, gear up in Discord and
        prepare your squad.
      </p>
    </div>
  </section>
);

export default Dashboard;
