'use client';

import { motion } from 'framer-motion';
import { GradientSlideButton } from './ui/gradient-slide-button';
import { GradientText } from '../components/ui/shadcn-io/gradient-text/index';
import Orb from './Orb';
import { clashDisplay } from '@/app/fonts/clash-display';

export function Hero() {
  return (
    <section className='relative flex flex-col justify-center w-full p-5 overflow-hidden align-middle mb-7 sm:mb-0 sm:p-10 sm:min-h-screen sm:mt-5 sm:block'>
      <div className='relative sm:absolute inset-0 w-full h-[270px] sm:h-full mb-10 flex-shrink-0 sm:flex-shrink'>
        <Orb
          hoverIntensity={1.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />

        <div className='absolute inset-0 z-10 flex items-center justify-center pointer-events-none sm:hidden'>
          <span className='text-sm font-semibold text-gray-300 transition-colors pointer-events-none select-none drop-shadow-mddark:text-neutral-200/40'>
            Tap
          </span>
        </div>
      </div>

      <motion.div
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='relative z-10 flex flex-col items-center justify-center w-full px-4 text-center md:w-fit sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2'
      >
        <h1
          className={`text-gray-700 dark:text-white transition-colors leading-[1.15] ${clashDisplay.className} mx-auto`}
        >
          <span className='block mb-2 text-sm font-medium tracking-wide sm:text-lg md:text-2xl opacity-80'>
            Hi, I&apos;m{' '}
            <span className='font-semibold'>Nirushan Rajamanoharan</span>
          </span>

          <GradientText
            className='block mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl'
            text='Frontend Developer'
            gradient='linear-gradient(90deg, #60a5fa, #a855f7, #ec4899)'
          />

          <GradientText
            className='block text-xl font-semibold tracking-tight sm:text-3xl md:text-4xl opacity-95'
            text='& Graphic Designer'
            gradient='linear-gradient(90deg, #60a5fa, #a855f7, #ec4899)'
          />
        </h1>

        <div className='flex flex-wrap items-center justify-center gap-3 mt-6'>
          <GradientSlideButton>
            <a href='#projects'>View Projects</a>
          </GradientSlideButton>

          <GradientSlideButton>
            <a href='#contact'>Get in Touch</a>
          </GradientSlideButton>
        </div>
      </motion.div>
    </section>
  );
}
