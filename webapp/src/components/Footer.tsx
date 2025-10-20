import Link from 'next/link';

const Footer = () => (
  <footer className="border-t border-white/10 bg-black/70 backdrop-blur px-4 py-10 text-center text-sm text-white/70">
    <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 md:flex-row md:justify-between">
      <div className="space-y-2">
        <p className="font-futuristic text-xs uppercase tracking-[0.35em] text-white">
          BloodyARK
        </p>
        <p className="text-white/60">
          © BloodyARK 2025. Made by the BloodyARK Team.
        </p>
      </div>
      <div className="flex items-center gap-6 font-futuristic text-[0.65rem] uppercase tracking-[0.3em] text-white/80">
        <Link
          href="https://discord.gg/bloodyark"
          className="transition-all duration-300 ease-in-out hover:text-primary"
          target="_blank"
          rel="noreferrer"
        >
          Discord
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCPXBISQPPvkbUOqawVwU_Cg"
          className="transition-all duration-300 ease-in-out hover:text-primary"
          target="_blank"
          rel="noreferrer"
        >
          YouTube
        </Link>
        <Link
          href="https://shop.bloody.gg"
          className="transition-all duration-300 ease-in-out hover:text-primary"
          target="_blank"
          rel="noreferrer"
        >
          Shop
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
