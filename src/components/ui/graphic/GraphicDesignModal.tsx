'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

import { GraphicProject } from '@/types/graphicProject';
import GraphicHero from './GraphicHero';
import DesignMeta from './DesignMeta';
import DesignTimeline from './DesignTimeline';
import DesignGallery from './DesignGallery';

interface GraphicDesignModalProps {
  project: GraphicProject;
  isOpen: boolean;
  onClose: () => void;
}

export default function GraphicDesignModal({
  project,
  isOpen,
  onClose,
}: GraphicDesignModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role='presentation'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/40 backdrop-blur-sm sm:p-6'
          onClick={onClose}
        >
          <motion.article
            role='dialog'
            aria-modal='true'
            aria-labelledby='graphic-title'
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            transition={{
              duration: 0.45,
              ease: 'easeOut',
            }}
            onClick={(e) => e.stopPropagation()}
            className='relative w-full h-full max-w-7xl overflow-hidden bg-[#faf7f2] shadow-2xl rounded-3xl'
          >
            <button
              ref={closeButtonRef}
              type='button'
              aria-label='Close project details'
              onClick={onClose}
              className='absolute z-50 flex items-center justify-center w-12 h-12 transition bg-white rounded-full shadow-lg right-5 top-5 text-neutral-800 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-400'
            >
              <X size={22} />
            </button>

            <div className='h-full overflow-y-auto scrollbar-hide'>
              <GraphicHero project={project} />

              <main className='max-w-6xl px-5 py-12 mx-auto space-y-20 sm:px-10'>
                <section>
                  <p className='max-w-4xl text-xl leading-relaxed text-neutral-700'>
                    {project.description}
                  </p>
                </section>

                <DesignMeta project={project} />

                <section>
                  <h3 className='mb-8 text-3xl font-bold text-neutral-900'>
                    Project Challenge
                  </h3>

                  <div className='p-8 bg-white shadow-sm rounded-3xl'>
                    <p className='text-lg leading-8 text-neutral-600'>
                      {project.challenge}
                    </p>
                  </div>
                </section>

                <DesignTimeline project={project} />

                <DesignGallery project={project} />

                <section className='pb-20'>
                  <h3 className='mb-8 text-3xl font-bold text-neutral-900'>
                    Final Outcome
                  </h3>

                  <div className='grid gap-6 md:grid-cols-2'>
                    {project.finalOutcome?.map((item) => (
                      <div
                        key={item}
                        className='bg-white border p-7 rounded-3xl border-stone-200'
                      >
                        <p className='leading-8 text-neutral-700'>{item}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </main>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
