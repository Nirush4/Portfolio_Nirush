'use client';

import { motion } from 'framer-motion';

import { graphicProjects } from '@/lib/graphicProjects';
import GraphicDesignCard from './GraphicDesignCard';
import { GraphicProject } from '@/types/graphicProject';

interface GraphicDesignSectionProps {
  onSelectProject?: (project: GraphicProject) => void;
}

export default function GraphicDesignSection({
  onSelectProject,
}: GraphicDesignSectionProps) {
  return (
    <section
      id='graphic-design'
      className='relative flex flex-col items-center justify-center gap-8 px-6 py-16 overflow-hidden md:px-8'
    >
      <div className='absolute inset-0 pointer-events-none -z-10 opacity-60'>
        <div className='absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(251,146,60,0.15)_0%,_transparent_70%)]' />
        <div className='absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_rgba(252,211,77,0.15)_0%,_transparent_70%)]' />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className='text-center'
      >
        <h2 className='text-3xl font-extrabold text-transparent bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text sm:text-4xl md:text-5xl'>
          Graphic Design
        </h2>

        <p className='max-w-2xl mx-auto mt-4 text-base text-neutral-700 md:text-lg dark:text-neutral-300'>
          A collection of visual design projects exploring branding, packaging,
          typography, visual storytelling, and creative direction.
        </p>
      </motion.div>

      {graphicProjects.length > 0 ? (
        <motion.div
          className='grid w-full grid-cols-1 gap-8 mx-auto mt-12 max-w-7xl sm:grid-cols-2 lg:grid-cols-3 md:gap-10'
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
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
                  y: 20,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
              }}
              className='flex justify-center cursor-pointer'
              onClick={() => onSelectProject?.(project)}
            >
              <GraphicDesignCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className='mt-10 text-neutral-600 dark:text-neutral-400'>
          Graphic design projects will be added soon.
        </p>
      )}
    </section>
  );
}
