'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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
      transition={{ type: 'spring', stiffness: 100, damping: 18 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-white/60 dark:bg-neutral-950/60 border-b border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <nav className='container relative flex items-center justify-between h-16 px-6 mx-auto md:px-10 md:h-20'>
        {/* Brand */}
        <Link
          href='#home'
          className='text-xl font-extrabold tracking-tight text-transparent transition-opacity sm:text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text gradient-animate hover:opacity-90'
        >
          Portfolio<span className='text-neutral-900 dark:text-white'>.</span>
        </Link>

        {/* Desktop Nav */}
        <ul className='items-center hidden gap-8 md:flex'>
          {links.map((link) => (
            <li key={link.href} className='relative group'>
              <a
                href={link.href}
                className='text-base font-medium tracking-wide transition-colors text-neutral-800 dark:text-neutral-300 hover:text-indigo-500 dark:hover:text-indigo-400'
              >
                {link.label}
              </a>
              <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300 group-hover:w-full rounded-full'></span>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Desktop Contact */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          href='#contact'
          className='items-center justify-center hidden px-5 py-2 text-sm font-medium text-white transition-all rounded-full shadow-md md:inline-flex bg-gradient-to-r from-indigo-500 to-pink-500 hover:shadow-lg'
        >
          Let’s Talk
        </motion.a>

        {/* RIGHT SIDE (Mobile) */}
        <div className='flex items-center gap-3 md:hidden'>
          {/* Mobile Light/Dark Toggle */}
          <ThemeToggle />

          {/* Mobile Hamburger */}
          <button
            className='inline-flex items-center justify-center w-10 h-10 transition-all border rounded-lg cursor-pointer text-neutral-800 dark:text-neutral-200 border-neutral-200/30 dark:border-neutral-800/80 backdrop-blur-sm hover:bg-neutral-100/20 dark:hover:bg-neutral-800/40'
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label='Toggle navigation'
            aria-expanded={mobileOpen}
          >
            <motion.div
              initial={false}
              animate={mobileOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
              className='text-2xl font-medium leading-none'
            >
              ☰
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key='mobileMenu'
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className='absolute inset-x-0 origin-top border-t shadow-lg top-full md:hidden backdrop-blur-2xl bg-gradient-to-br from-white/70 via-white/60 to-indigo-100/40 dark:from-neutral-950/80 dark:via-neutral-900/80 dark:to-indigo-950/40 border-white/10 rounded-b-3xl'
          >
            <ul className='flex flex-col items-center justify-center gap-6 py-8'>
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className='relative group'
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className='text-base font-medium tracking-wide transition-colors text-neutral-800 dark:text-neutral-300 hover:text-indigo-500 dark:hover:text-indigo-400'
                  >
                    {link.label}
                  </a>
                  <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300 group-hover:w-full rounded-full'></span>
                </motion.li>
              ))}

              {/* Toggle inside mobile menu */}
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <ThemeToggle />
              </motion.li>

              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className='pt-3'
              >
                <a
                  href='#contact'
                  onClick={() => setMobileOpen(false)}
                  className='inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full shadow-md hover:shadow-lg transition-all'
                >
                  Let’s Talk
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
