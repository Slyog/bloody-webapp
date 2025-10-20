'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type NavItem = {
  href: string;
  label: string;
  external?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/servers', label: 'Servers' },
  { href: 'https://shop.bloody.gg', label: 'Shop', external: true },
  { href: 'https://discord.gg/bloodyark', label: 'Discord', external: true },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-black/70 shadow-[0_15px_45px_rgba(0,0,0,0.4)]' : 'bg-black/55'
      } backdrop-blur-md`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-xs uppercase tracking-[0.32em] text-white transition-colors duration-300 ease-in-out md:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 font-futuristic text-base tracking-[0.28em] text-white transition-all duration-300 ease-in-out hover:text-primary"
        >
          <span className="relative h-10 w-10">
            <Image
              src="/logo.png"
              alt="BloodyARK logo"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </span>
          BloodyARK
        </Link>

        <div className="hidden items-center gap-8 font-futuristic text-[0.7rem] md:flex">
          {NAV_ITEMS.map(({ href, label, external }) => {
            const isActive = !external && href === pathname;
            const baseClasses =
              'relative transition-all duration-300 ease-in-out after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary hover:drop-shadow-[0_0_12px_rgba(177,0,16,0.55)]';
            return external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`${baseClasses} ${isActive ? 'text-primary after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`}
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className={`${baseClasses} ${isActive ? 'text-primary after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="md:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-all duration-300 ease-in-out hover:border-primary hover:text-primary">
              <span
                className={`h-0.5 w-5 transition-all duration-300 ease-in-out ${
                  isOpen ? 'translate-y-1.5 rotate-45 bg-primary' : '-translate-y-1.5 bg-current'
                }`}
              />
              <span
                className={`absolute h-0.5 w-5 transition-all duration-300 ease-in-out ${
                  isOpen ? 'scale-x-0 bg-primary opacity-0' : 'bg-current opacity-100'
                }`}
              />
              <span
                className={`h-0.5 w-5 transition-all duration-300 ease-in-out ${
                  isOpen ? '-translate-y-1.5 -rotate-45 bg-primary' : 'translate-y-1.5 bg-current'
                }`}
              />
            </span>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="border-t border-white/10 bg-black/80 px-4 pb-4 pt-2 font-futuristic text-sm uppercase tracking-[0.3em] text-white md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map(({ href, label, external }) =>
              external ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all duration-300 ease-in-out hover:text-primary"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  href={href}
                  className="transition-all duration-300 ease-in-out hover:text-primary"
                >
                  {label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
