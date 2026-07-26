'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { GraphicProject } from '@/types/graphicProject';

interface GraphicHeroProps {
  project: GraphicProject;
}

export default function GraphicHero({ project }: GraphicHeroProps) {
  return (
    <section className='w-full overflow-hidden bg-white'>
      {/* Cover */}
      <div className='relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]'>
        <Image
          src={project.thumbnail}
          alt={`${project.name} cover image`}
          fill
          priority
          sizes='100vw'
          className='object-cover'
        />

        <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
      </div>

      {/* Content */}
      <div className='px-6 py-8 mx-auto max-w-7xl sm:px-10 lg:px-14'>
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className='inline-flex px-4 py-2 text-sm font-semibold text-orange-800 bg-orange-100 rounded-full'
        >
          {project.projectType}
        </motion.span>

        <motion.h1
          id='graphic-title'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className='max-w-5xl mt-5 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl'
        >
          {project.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='max-w-4xl mt-5 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8'
        >
          {project.description}
        </motion.p>
      </div>
    </section>
  );
}
