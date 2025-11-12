'use client';

import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';

export function About() {
  return (
    <section
      id='about'
      className='relative flex items-center justify-center min-h-screen'
    >
      {/* Background Glow */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/30 to-pink-500/30 rounded-full blur-3xl top-1/3 -left-40'></div>
        <div className='absolute w-[400px] h-[400px] bg-gradient-to-r from-pink-400/20 to-indigo-400/20 rounded-full blur-3xl bottom-1/4 -right-40'></div>
      </div>

      {/* Main Content */}
      <div className='relative z-10 grid items-center justify-center w-full gap-12 px-6 py-20 mx-auto max-w-7xl md:grid-cols-12'>
        {/* LEFT — Text Section (60%) */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='flex flex-col items-center justify-center order-2 p-8 space-y-8 text-center border shadow-xl md:order-1 md:col-span-7 md:items-start md:text-left backdrop-blur-md bg-white/10 dark:bg-neutral-900/30 rounded-2xl border-white/10'
        >
          <h2 className='text-2xl font-extrabold tracking-tight md:text-4xl text-neutral-900 dark:text-white'>
            About{' '}
            <span className='text-2xl text-transp--behind-gradient: none; --inner-gradient: linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%); --pointer-x: 50%; --pointer-y: 50%; --background-x: 50%; --background-y: 50%; --pointer-from-center: 0; --pointer-from-top: 0.5; --pointer-from-left: 0.5; --rotate-x: 0deg; --rotate-y: 0deg;arent md:text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text animate-gradient-x'>
              Me
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='max-w-xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300'
          >
            I’m{' '}
            <span className='font-semibold text-indigo-600 dark:text-indigo-400'>
              Nirushan Rajamanoharan
            </span>
            , a Frontend Developer and former Graphic Designer based in Oslo,
            Norway crafting visually engaging and technically refined digital
            experiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='max-w-xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300'
          >
            Currently studying <strong>Frontend Development</strong> at Noroff
            School of Technology and Digital Media (graduating 2026), I’m
            developing expertise in{' '}
            <strong>
              HTML, CSS, JavaScript, TypeScript, React, Svelte, Next.js, and
              Tailwind CSS
            </strong>{' '}
            as well as tools like Vitest, Playwright, Cypress, and Storybook. In
            the future, I plan to explore backend development to grow into a
            well-rounded full-stack developer.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='max-w-xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300'
          >
            My eight-year background as a <strong>Graphic Designer</strong>{' '}
            gives me a unique eye for UI/UX, accessibility, and the harmony
            between design and functionality. I’m now exploring how{' '}
            <strong>AI</strong> enhances creativity and development workflows.
          </motion.p>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='block pt-4 text-lg font-medium text-transparent bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text'
          >
            Let&apos;s connect 🤝 & build something meaningful together 🚀
          </motion.span>
        </motion.div>

        {/* RIGHT — Profile Card (40%) */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1.7, ease: 'easeOut' }}
          className='flex items-center justify-center order-1 md:order-2 md:col-span-5'
        >
          <div className='relative flex items-center justify-center w-full max-w-md'>
            <div className='absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 blur-2xl rounded-3xl'></div>
            <ProfileCard
              className='h-full'
              name='NIRUSHAN'
              title='Frontend Developer'
              handle='nirush4'
              status='Online'
              contactText='Contact Me'
              avatarUrl='IMG_9314.JPG'
              miniAvatarUrl='IMG_9314.JPG'
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
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
