'use client';
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProjectModal from './ProjectModal';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.05}
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        className='w-full max-w-sm'
      >
        <motion.div
          onClick={() => setIsModalOpen(true)}
          className='relative flex flex-col overflow-hidden bg-white border shadow-xl cursor-pointer rounded-3xl border-white/10 dark:bg-gray-900 group'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          whileHover={{ y: -5 }}
        >
          {/* Thumbnail */}
          <div className='relative w-full overflow-hidden h-55 rounded-t-3xl'>
            <Image
              src={project?.thumbnail ?? '/default-thumbnail.png'}
              alt={project?.name ?? 'Project thumbnail'}
              fill
              sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
              className='object-cover transition-transform duration-500 group-hover:scale-110 brightness-105 contrast-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/0 to-black/5'></div>
          </div>

          {/* Info */}
          <div className='p-6 space-y-3'>
            <h3 className='text-xl font-bold text-transparent text-white bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text'>
              {project?.name}
            </h3>
            <p className='text-sm text-white/80'>{project?.description}</p>
          </div>
        </motion.div>
      </Tilt>

      {/* Modal */}
      <ProjectModal
        project={project} // <-- fixed prop name
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
