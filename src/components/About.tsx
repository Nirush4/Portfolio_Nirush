'use client';

import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';
import LogoLoop from './LogoLoop';

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiVite,
  SiNpm,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiCanva,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeillustrator,
  SiAdobelightroom,
} from 'react-icons/si';

// ------------------------
// Types
// ------------------------
export interface TechLogo {
  src?: string;
  srcSet?: string;
  sizes?: string;
  href: string;
  width?: number;
  height?: number;
  alt?: string;
  title?: string;
  node?: React.ReactNode;
}

// ------------------------
// LOGO LINES
// ------------------------
export const techLogosLine1: TechLogo[] = [
  {
    node: <SiHtml5 size={35} />,
    title: 'HTML',
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    node: <SiCss3 size={35} />,
    title: 'CSS',
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    node: <SiJavascript size={35} />,
    title: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    node: <SiTypescript size={35} />,
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
  },
  { node: <SiReact size={35} />, title: 'React', href: 'https://react.dev/' },
  {
    node: <SiNextdotjs size={35} />,
    title: 'Next.js',
    href: 'https://nextjs.org/',
  },
  {
    node: <SiBootstrap size={35} />,
    title: 'Bootstrap',
    href: 'https://getbootstrap.com/',
  },
  {
    node: <SiTailwindcss size={35} />,
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
  },
  { node: <SiGit size={35} />, title: 'Git', href: 'https://git-scm.com/' },
  {
    node: <SiGithub size={35} />,
    title: 'GitHub',
    href: 'https://github.com/',
  },
  { node: <SiVite size={35} />, title: 'Vite', href: 'https://vitejs.dev/' },
  { node: <SiNpm size={35} />, title: 'NPM', href: 'https://www.npmjs.com/' },
];

// line 2
export const techLogosLine2: TechLogo[] = [
  {
    node: <span className='text-2xl font-bold'>JWT</span>,
    title: 'JWT',
    href: '',
  },
  {
    node: <span className='text-2xl font-bold'>MSW</span>,
    title: 'MSW',
    href: '',
  },
  {
    node: <span className='text-2xl font-bold'>Jsdom</span>,
    title: 'Jsdom',
    href: '',
  },
  {
    node: <span className='text-2xl font-bold'>Vitest</span>,
    title: 'Vitest',
    href: '',
  },
  {
    node: <span className='text-2xl font-bold'>Playwright</span>,
    title: 'Playwright',
    href: '',
  },
  {
    node: <span className='text-2xl font-bold'>Cypress</span>,
    title: 'Cypress',
    href: '',
  },
  {
    node: <SiVercel size={35} />,
    title: 'Vercel',
    href: 'https://vercel.com/',
  },
  {
    node: <SiNetlify size={35} />,
    title: 'Netlify',
    href: 'https://www.netlify.com/',
  },
  {
    node: <SiFigma size={35} />,
    title: 'Figma',
    href: 'https://www.figma.com/',
  },
  {
    node: <SiCanva size={35} />,
    title: 'Canva',
    href: 'https://www.canva.com/',
  },
  {
    node: <SiAdobeillustrator size={35} />,
    title: 'Illustrator',
    href: 'https://www.adobe.com/products/illustrator.html',
  },
  {
    node: <SiAdobephotoshop size={35} />,
    title: 'Photoshop',
    href: 'https://www.adobe.com/products/photoshop.html',
  },
  {
    node: <SiAdobelightroom size={35} />,
    title: 'Lightroom',
    href: 'https://www.adobe.com/products/photoshop-lightroom.html',
  },
  {
    node: <SiAdobepremierepro size={35} />,
    title: 'Premiere Pro',
    href: 'https://www.adobe.com/products/premiere.html',
  },
];

// ----------------------
//   ABOUT COMPONENT
// ----------------------
export function About() {
  return (
    <section
      id='about'
      className='relative flex flex-col items-center justify-center min-h-screen px-6 mx-auto overflow-x-hidden md:px-8 md:mt-10'
    >
      {/* Background Glow */}
      <div className='absolute inset-0 pointer-events-none -z-10'>
        <div className='absolute w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/30 to-purple-400/15 rounded-full blur-3xl top-1/3 -left-40'></div>
        <div className='absolute w-[400px] h-[400px] bg-gradient-to-r from-purple-400/25 to-indigo-400/20 rounded-full blur-3xl bottom-1/4 -right-40'></div>
      </div>

      {/* Main Content */}
      <div className='relative z-10 grid items-center justify-center w-full gap-12 py-10 mx-auto sm:py-22 max-w-7xl md:grid-cols-12'>
        {/* LEFT TEXT */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className='flex flex-col items-center justify-center order-2 p-8 space-y-8 text-center transition-colors border shadow-xl md:order-1 md:col-span-7 md:items-start md:text-left backdrop-blur-md bg-white/10 dark:bg-neutral-900/30 rounded-2xl border-white/10'
        >
          <h2 className='text-2xl font-extrabold tracking-tight text-gray-800 transition-colors md:text-4xl dark:text-white'>
            About{' '}
            <span className='text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text'>
              Me
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='max-w-xl text-base leading-relaxed transition-colors text-neutral-700 dark:text-neutral-300'
          >
            I’m{' '}
            <span className='font-semibold text-indigo-600 transition-colors dark:text-indigo-400'>
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
            className='max-w-xl text-base leading-relaxed transition-colors text-neutral-700 dark:text-neutral-300'
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
            className='max-w-xl text-base leading-relaxed transition-colors text-neutral-700 dark:text-neutral-300'
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

        {/* RIGHT CONTAINER */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }}
          className='flex items-center justify-center order-1 md:order-2 md:col-span-5'
        >
          <div className='relative flex items-center justify-center w-full max-w-md z-[2]'>
            <div className='absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 blur-2xl rounded-3xl -z-10'></div>

            <ProfileCard
              className='h-full'
              name='NIRUSHAN'
              title='Frontend Developer'
              handle='nirush4'
              status='Online'
              contactText='Contact Me'
              avatarUrl='/IMG_9314.JPG' // ← FIXED
              miniAvatarUrl='/IMG_9314.JPG' // ← FIXED
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

      {/* SKILLS SECTION */}
      <section className='relative w-full mx-auto mb-20 overflow-visible max-w-7xl sm:mt-20'>
        <motion.h2 className='text-2xl font-extrabold tracking-tight text-center text-gray-800 transition-colors dark:text-white md:text-4xl'>
          My{' '}
          <span className='text-transparent bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text'>
            Skills
          </span>
        </motion.h2>

        <motion.p className='max-w-2xl mx-auto mt-5 text-base text-center transition-colors text-neutral-700 dark:text-neutral-300 md:text-lg'>
          Technologies I use to build immersive and high-performance digital
          experiences.
        </motion.p>

        <div className='relative flex items-center justify-center mt-10 overflow-visible sm:mt-20'>
          <div className='absolute w-full rounded-full bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 blur-3xl opacity-40 -z-10'></div>

          <div className='relative z-[2] w-full py-12 backdrop-blur-xl bg-white/5 transition-colors dark:bg-black/20 border border-white/10 shadow-xl rounded-3xl overflow-hidden'>
            {/* LINE 1 */}
            <div className='relative w-full sm:h-[30px] overflow-visible will-change-transform mb-10'>
              <LogoLoop
                logos={techLogosLine1.map((logo) => ({
                  ...logo,
                  node: (
                    <div className='relative flex items-center justify-center group'>
                      {logo.node}
                      {logo.title && (
                        <span className='absolute px-2 py-1 text-xs text-white transition-all duration-200 -translate-x-1/2 translate-y-1 rounded-md opacity-0 pointer-events-none whitespace-nowrap -top-6 left-1/2 group-hover:opacity-100 group-hover:-translate-y-1 bg-black/80 dark:bg-white/90 dark:text-black'>
                          {logo.title}
                        </span>
                      )}
                    </div>
                  ),
                }))}
                speed={50}
                direction='left'
                logoHeight={20}
                gap={70}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor='transparent'
              />
            </div>

            {/* LINE 2 */}
            <div className='relative w-full sm:h-[30px] overflow-visible will-change-transform'>
              <LogoLoop
                logos={techLogosLine2.map((logo) => ({
                  ...logo,
                  node: (
                    <div className='relative flex items-center justify-center group'>
                      {logo.node}
                      {logo.title && (
                        <span className='absolute px-2 py-1 text-xs text-white transition-all duration-200 -translate-x-1/2 translate-y-1 rounded-md opacity-0 pointer-events-none whitespace-nowrap -top-6 left-1/2 group-hover:opacity-100 group-hover:-translate-y-1 bg-black/80 dark:bg-white/90 dark:text-black'>
                          {logo.title}
                        </span>
                      )}
                    </div>
                  ),
                }))}
                speed={50}
                direction='right'
                logoHeight={20}
                gap={70}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor='transparent'
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
