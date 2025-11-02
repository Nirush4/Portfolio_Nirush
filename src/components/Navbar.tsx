'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ThemeToggle } from './theme-toggle';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 16 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? 'backdrop-blur-md bg-white/70 dark:bg-neutral-900/60 border-b border-black/10 dark:border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className='container flex items-center justify-between h-16 px-6 mx-auto md:px-8 md:h-20'>
        {/* Brand */}
        <Link
          href='#home'
          className='text-lg font-semibold tracking-tight text-black dark:text-white'
        >
          <span className='text-3xl gradient-text'>Portfolio</span>
        </Link>

        {/* Desktop nav */}
        <ul className='items-center hidden gap-6 md:flex'>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className='text-lg text-black transition-colors dark:text-neutral-300 hover:text-neutral-700 dark:hover:text-white'
              >
                {l.label}
              </a>
            </li>
          ))}
          {/* Theme Toggle */}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Contact button */}
        <a
          href='#contact'
          className='hidden px-4 py-2 text-sm text-white transition bg-black rounded-md md:inline-flex hover:opacity-90 dark:bg-white dark:text-neutral-900'
        >
          Contact
        </a>

        {/* Mobile toggle */}
        <button
          className='inline-flex items-center justify-center px-3 py-2 text-black border rounded-md md:hidden border-black/10 dark:border-white/10 dark:text-neutral-200'
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label='Toggle navigation'
          aria-expanded={mobileOpen}
        >
          ☰
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className='border-t md:hidden border-black/10 dark:border-white/10 bg-white/90 dark:bg-neutral-950/95 backdrop-blur-md'>
          <ul className='container flex flex-col gap-4 px-6 py-4 mx-auto'>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className='block text-black transition-colors dark:text-neutral-300 hover:text-neutral-700 dark:hover:text-white'
                >
                  {l.label}
                </a>
              </li>
            ))}
            {/* Theme Toggle in mobile nav */}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
