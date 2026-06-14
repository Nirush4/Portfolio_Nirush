'use client';

import { FaGithub, FaExternalLinkAlt, FaTimes, FaFigma } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/types/project';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  if (!project) return null;

  const screenshots = project.screenshots ?? [];
  const uxProcess = project.uxProcess ?? [];
  const figmaDesign = project.figmaDesign ?? [];
  const finalSolution = project.finalSolution ?? [];
  const technologies = project.technologies ?? [];

  const images =
    screenshots.length > 0
      ? screenshots
      : [project.thumbnail ?? '/default-thumbnail.png'];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-50 flex items-start justify-center px-6 pt-6 overflow-y-auto md:px-8 bg-black/70 backdrop-blur-sm sm:pt-12'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role='dialog'
          aria-modal='true'
          aria-label={project.name}
        >
          <motion.div
            className='relative w-full max-w-5xl overflow-hidden bg-white shadow-2xl dark:bg-gray-900 rounded-3xl'
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className='absolute z-20 text-purple-400 transition cursor-pointer top-4 right-4'
              aria-label='Close modal'
            >
              <FaTimes size={28} />
            </motion.button>

            <div className='max-h-[90vh] overflow-y-auto'>
              <div className='relative w-full max-h-[80vh] bg-black flex justify-center items-center'>
                <Image
                  src={images[0]}
                  alt={project.name}
                  width={1200}
                  height={800}
                  className='object-contain'
                  priority
                />
              </div>

              <div className='flex flex-wrap justify-between gap-2 p-6 space-y-6 align-middle techandlinks'>
                <div>
                  <h3 className='mb-2 text-base font-semibold text-gray-900 sm:text-lg dark:text-white'>
                    Technologies
                  </h3>

                  <div className='flex flex-wrap gap-3'>
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-2 py-1 text-sm text-white bg-gray-700 rounded shadow-lg sm:text-base sm:rounded-lg sm:px-4 sm:py-2'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='flex flex-wrap items-end gap-4'>
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className='flex items-center gap-2 px-3 py-1 text-sm font-semibold text-white transition bg-gray-900 rounded shadow-md sm:rounded-lg sm:text-base h-fit sm:py-2 sm:px-5 dark:bg-white/90 dark:text-gray-900 hover:bg-gray-800'
                    >
                      <FaGithub /> GitHub
                    </motion.a>
                  )}

                  {project.live && (
                    <motion.a
                      href={project.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className='flex items-center gap-2 px-3 py-1 text-sm font-semibold text-black transition bg-white rounded shadow-md sm:rounded-lg sm:text-base h-fit sm:py-2 sm:px-5 hover:brightness-110'
                    >
                      <FaExternalLinkAlt /> Live
                    </motion.a>
                  )}

                  {project.Figma && (
                    <motion.a
                      href={project.Figma}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className='flex items-center gap-2 px-3 py-1 text-sm font-semibold text-white transition rounded shadow-md sm:rounded-lg sm:text-base h-fit sm:py-2 sm:px-5 bg-gradient-to-r from-green-400 to-blue-500 hover:brightness-110'
                    >
                      <FaFigma /> Figma
                    </motion.a>
                  )}
                </div>
              </div>

              <div className='p-6 space-y-10'>
                <h2 className='text-lg font-bold text-gray-900 sm:text-xl md:text-3xl dark:text-white'>
                  {project.name}
                </h2>

                {uxProcess.length > 0 && (
                  <section>
                    <h3 className='mb-2 text-lg font-semibold dark:text-white'>
                      UX Process
                    </h3>
                    <ul className='pl-5 space-y-2 text-sm text-gray-700 list-disc dark:text-gray-300'>
                      {uxProcess.map((item, idx) => (
                        <li className='text-base' key={idx}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {figmaDesign.length > 0 && (
                  <section>
                    <h3 className='mb-2 text-lg font-semibold dark:text-white'>
                      UI Design in Figma
                    </h3>
                    <ul className='pl-5 space-y-2 text-sm text-gray-700 list-disc dark:text-gray-300'>
                      {figmaDesign.map((item, idx) => (
                        <li className='text-base' key={idx}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {finalSolution.length > 0 && (
                  <section>
                    <h3 className='mb-2 text-lg font-semibold dark:text-white'>
                      The Final Coded Solution
                    </h3>
                    <ul className='pl-5 space-y-2 text-sm text-gray-700 list-disc dark:text-gray-300'>
                      {finalSolution.map((item, idx) => (
                        <li className='text-base' key={idx}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
