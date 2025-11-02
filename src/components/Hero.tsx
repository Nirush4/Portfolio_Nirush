// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { GradientSlideButton } from './ui/gradient-slide-button';
// import Image from 'next/image';
import { GradientText } from '../components/ui/shadcn-io/gradient-text/index';
import ProfileCard from './ProfileCard';

export function Hero() {
  return (
    <div className='grid items-center justify-center gap-10 mt-30 lg:grid-cols-2'>
      {/* ProfileCard Section */}
      <motion.div
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        className='flex justify-center order-1 lg:order-2'
      >
        <div className='relative flex items-center justify-center sm:h-120 md:h-140 lg:w-116 lg:h-160'>
          <ProfileCard
            className='h-full'
            name='NIRUSHAN'
            title='Frontend Developer'
            handle='nirush4'
            status='Online'
            contactText='Contact Me'
            avatarUrl='IMG_9314.JPG'
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => {
              const section = document.getElementById('contact');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
            behindGradient={null}
            innerGradient={null}
            showBehindGradient={false}
            miniAvatarUrl={undefined}
          />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='flex flex-col justify-center order-2 space-y-6 text-center lg:text-left lg:order-1 lg:mb-0'
      >
        <h1 className='text-4xl font-bold leading-tight text-black md:text-6xl dark:text-white'>
          <span className='gradient-text'>
            Hi, I&apos;m Nirushan Rajamanoharan
          </span>{' '}
          <GradientText
            className='text-2xl gradient-text'
            text='Frontend Developer & Graphic Designer'
            gradient='linear-gradient(90deg, #3b82f6 0%, #a855f7 25%, #ec4899 50%,#a855f7 75%, #3b82f6 100%)'
          />
        </h1>

        <p className='mx-auto text-black dark:text-neutral-300 max-w-prose lg:mx-0'>
          I craft delightful user interfaces with a keen eye for typography,
          color, and motion. I love building performant, accessible, and
          visually compelling web experiences.
        </p>

        <div className='flex flex-wrap items-center justify-center gap-3 lg:justify-start'>
          <a
            href='#projects'
            className='inline-flex px-5 py-3 font-medium text-white transition bg-black rounded-md hover:opacity-80 dark:bg-white dark:text-neutral-900 dark:hover:opacity-80'
          >
            View Projects
          </a>

          <GradientSlideButton>
            <a href='#contact' className='py-6 px-7'>
              Get in Touch
            </a>
          </GradientSlideButton>
        </div>
      </motion.div>
    </div>
  );
}
