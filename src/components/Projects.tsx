'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

import ProjectCard from './ProjectCard';

import { projects } from '../lib/projects';
import { graphicProjects } from '@/lib/graphicProjects';
import GraphicDesignCard from './ui/graphic/GraphicDesignCard';

type ProjectCategory = 'frontend' | 'graphic';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('frontend');

  const tabs = [
    {
      id: 'frontend' as ProjectCategory,
      label: 'Front-End Development',
    },
    {
      id: 'graphic' as ProjectCategory,
      label: 'Graphic Design',
    },
  ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id='projects'
      aria-labelledby='projects-heading'
      className='relative flex flex-col items-center justify-center gap-8 px-6 py-16 overflow-hidden md:px-8'
    >
      <div
        aria-hidden='true'
        className='absolute inset-0 pointer-events-none -z-10'
      >
        <div className='absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-400/20 blur-3xl' />

        <div className='absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-purple-500/25 to-indigo-400/20 blur-3xl' />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
        className='max-w-3xl text-center'
      >
        <h2
          id='projects-heading'
          className='text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600'
        >
          Projects
        </h2>

        <p className='max-w-2xl mx-auto mt-4 text-base text-neutral-700 md:text-lg dark:text-neutral-300'>
          Explore my front-end development projects and creative design work,
          showcasing user experience, accessibility, and modern technologies.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: 'easeOut',
        }}
        role='tablist'
        aria-label='Project categories'
        className='flex flex-wrap justify-center gap-4 mt-6'
      >
        {tabs.map((tab) => {
          const active = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type='button'
              role='tab'
              aria-selected={active}
              aria-controls={`${tab.id}-panel`}
              onClick={() => setActiveTab(tab.id)}
              className={`
                rounded-full px-6 py-3
                text-sm font-semibold cursor-pointer
                transition-all duration-300

                focus-visible:outline-none
                focus-visible:ring-4
                focus-visible:ring-orange-400/50

                ${
                  active
                    ? 'bg-gradient-to-r from-orange-700 to-amber-600 text-white shadow-lg scale-105'
                    : 'border border-orange-400 bg-neutral-200 text-neutral-800 hover:bg-orange-50 dark:border-orange-400 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-orange-950/30'
                }
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </motion.div>

      {activeTab === 'frontend' ? (
        <motion.div
          key='frontend'
          id='frontend-panel'
          role='tabpanel'
          aria-live='polite'
          className='grid w-full grid-cols-1 gap-8 mt-12 max-w-7xl sm:grid-cols-2 lg:grid-cols-3'
          initial='hidden'
          animate='show'
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
              }}
              className='flex justify-center'
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      ) : graphicProjects.length > 0 ? (
        <motion.div
          key='graphic'
          id='graphic-panel'
          role='tabpanel'
          aria-live='polite'
          className='grid w-full grid-cols-1 gap-8 mt-12 max-w-7xl sm:grid-cols-2 lg:grid-cols-3'
          initial='hidden'
          animate='show'
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {graphicProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
              }}
              className='flex justify-center'
            >
              <GraphicDesignCard project={project} />
            </motion.div>
          ))}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            className='flex justify-center mt-4 col-span-full'
          >
            <a
              href='https://creativepool.com/nirushan-rajamanoaharan'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='View more graphic design work on Creativepool'
              className='inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-orange-700 to-amber-600 hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400/50'
            >
              More Graphic Design Works
              <ExternalLink size={18} aria-hidden='true' />
            </a>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key='empty-state'
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className='max-w-md mt-12 text-center'
        >
          <div className='p-8 border rounded-2xl border-neutral-200 bg-white/50 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/50'>
            <h3 className='text-xl font-bold text-neutral-800 dark:text-neutral-100'>
              Graphic Design Projects Coming Soon 🎨
            </h3>

            <p className='mt-3 text-neutral-600 dark:text-neutral-400'>
              I&apos;m preparing creative design work to showcase branding,
              visual design, packaging, and creative direction.
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
}
