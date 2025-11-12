'use client';

import { motion } from 'framer-motion';
import { GradientSlideButton } from './ui/gradient-slide-button';
import { GradientText } from '../components/ui/shadcn-io/gradient-text/index';
import Orb from './Orb';

export function Hero() {
  return (
    <section className='relative flex flex-col w-full p-5 overflow-hidden mb-15 sm:mb-0 sm:p-10 sm:min-h-screen sm:mt-5 sm:block'>
      {/* Orb Background */}
      <div className='relative sm:absolute inset-0 w-full h-[270px] sm:h-full mb-10 flex-shrink-0 sm:flex-shrink'>
        <Orb
          hoverIntensity={1.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />

        <div className='absolute inset-0 z-10 flex items-center justify-center pointer-events-none sm:hidden'>
          <span className='text-sm font-semibold text-white pointer-events-none select-none drop-shadow-md'>
            Tap
          </span>
        </div>
      </div>

      {/* Foreground Content */}
      <motion.div
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='relative z-10 w-full max-w-3xl text-center sm:absolute sm:max-w-3xl sm:px-6 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-fit sm:top-1/2 sm:left-1/2'
      >
        <h1 className='font-bold text-center text-black leading-[1rem] w-fit sm:text-6xl dark:text-white'>
          <span className='text-base sm:text-2xl gradient-text'>
            Hi, I&apos;m Nirushan Rajamanoharan
          </span>{' '}
          <GradientText
            className='text-xl sm:text-3xl lg:text-4xl gradient-text'
            text='Frontend Developer'
            gradient='linear-gradient(90deg, #3b82f6 0%, #a855f7 25%, #ec4899 50%,#a855f7 75%, #3b82f6 100%)'
          />
          <GradientText
            className='text-xl sm:text-3xl lg:text-4xl gradient-text'
            text='& Graphic Designer'
            gradient='linear-gradient(90deg, #3b82f6 0%, #a855f7 25%, #ec4899 50%,#a855f7 75%, #3b82f6 100%)'
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
