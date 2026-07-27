'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { GraphicProject } from '@/types/graphicProject';
import GraphicDesignModal from './GraphicDesignModal';

interface GraphicDesignCardProps {
  project: GraphicProject;
}

export default function GraphicDesignCard({ project }: GraphicDesignCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className='w-full max-w-md cursor-pointer group'
        onClick={() => setIsModalOpen(true)}
      >
        <div className='relative overflow-hidden rounded-[2rem] border border-neutral-200 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-neutral-800 bg-white shadow-2xl dark:bg-gray-900 '>
          <div className='relative aspect-[4/3] overflow-hidden'>
            <img
              src={project.thumbnail}
              alt={`${project.name} design project`}
              className='object-cover w-full h-full transition duration-700 group-hover:scale-105'
            />

            <div className='absolute inset-0 transition duration-500 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/50' />

            <div className='absolute top-5 left-5'>
              <span className='inline-flex px-4 py-2 text-xs font-semibold tracking-wide text-orange-700 uppercase rounded-full shadow-md bg-white/95 backdrop-blur'>
                {project.projectType}
              </span>
            </div>
          </div>

          <div className='p-7'>
            <h3 className='text-2xl font-extrabold tracking-tight line-clamp-1 text-neutral-900 dark:text-white'>
              {project.name}
            </h3>

            <p className='mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-300 line-clamp-3'>
              {project.description}
            </p>

            {/* Tools */}
            <div className='flex flex-wrap gap-2 mt-6'>
              {project.tools.slice(0, 3).map((tool) => (
                <span
                  key={tool}
                  className='px-3 py-1.5 text-xs font-medium text-neutral-700 bg-neutral-100 border border-neutral-200 rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200'
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className='flex items-center justify-between pt-3 border-t mt-7 border-neutral-200 dark:border-neutral-600'>
              <span className='text-sm font-semibold text-orange-600'>
                View Case Study
              </span>

              <div
                className='flex items-center justify-center text-white transition-all duration-300 bg-orange-500 rounded-full w-11 h-11 group-hover:rotate-45 group-hover:bg-orange-600'
                aria-hidden='true'
              >
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </motion.article>

      <GraphicDesignModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
