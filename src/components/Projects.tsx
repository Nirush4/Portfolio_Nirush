'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../lib/projects';

export default function Projects() {
  return (
    <section
      id='projects'
      className='relative flex flex-col items-center justify-center gap-8 px-6 py-2 overflow-hidden sm:py-18 md:px-8'
    >
      {/* Background Glow */}
      <div className='absolute inset-0 pointer-events-none -z-10'>
        <div className='absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-400/15 blur-3xl' />
        <div className='absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-purple-400/25 to-indigo-400/20 blur-3xl' />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='text-center'
      >
        <h2 className='text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600'>
          Projects
        </h2>

        <p className='max-w-2xl mx-auto mt-4 text-base md:text-lg text-neutral-700 dark:text-neutral-300'>
          Here are some of the projects I&apos;ve worked on, showcasing a
          variety of skills and technologies.
        </p>
      </motion.div>

      {/* Project Cards Grid */}
      <motion.div
        className='grid w-full grid-cols-1 gap-8 mx-auto mt-12 max-w-7xl md:gap-15 sm:grid-cols-2 lg:grid-cols-3'
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='flex justify-center'
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
