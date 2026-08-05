'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy, X } from 'lucide-react';

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

// React 19 pattern to detect client hydration without triggering ESLint state-in-effect warnings
const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export default function GraphicDesignModal({
  project,
  isOpen,
  onClose,
}: GraphicDesignModalProps) {
  const isClient = useIsClient();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);

  const handleClose = useCallback(() => {
    document.body.style.overflow = '';
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow || '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClose]);

  const handleCopyLink = async () => {
    try {
      const shareableUrl = `${window.location.origin}${
        window.location.pathname
      }?project=${encodeURIComponent(String(project.id))}`;

      await navigator.clipboard.writeText(shareableUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link: ', err);
    }
  };

  // Prevent SSR execution safely
  if (!isClient) return null;

  return createPortal(
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = '';
      }}
    >
      {isOpen && (
        <motion.div
          role='presentation'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className='fixed inset-0 z-[100] flex items-center justify-center p-3 bg-black/60 sm:p-6'
          onClick={handleClose}
        >
          <article
            role='dialog'
            aria-modal='true'
            aria-labelledby='graphic-title'
            onClick={(e) => e.stopPropagation()}
            className='relative w-full h-full max-w-7xl overflow-hidden bg-[#faf7f2] shadow-2xl rounded-3xl'
          >
            {/* Top Right Controls Group */}
            <div className='absolute z-50 flex items-center gap-3 right-5 top-5'>
              <button
                type='button'
                aria-label={
                  copied
                    ? 'Project link copied to clipboard'
                    : 'Copy project link'
                }
                aria-live='polite'
                onClick={handleCopyLink}
                className='flex items-center justify-center w-12 h-12 transition bg-white rounded-full shadow-lg cursor-pointer text-neutral-800 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-400'
              >
                {copied ? (
                  <Check size={20} className='text-emerald-600' />
                ) : (
                  <Copy size={20} />
                )}
              </button>

              <button
                ref={closeButtonRef}
                type='button'
                aria-label='Close project details'
                onClick={handleClose}
                className='flex items-center justify-center w-12 h-12 transition bg-white rounded-full shadow-lg cursor-pointer text-neutral-800 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-400'
              >
                <X size={22} />
              </button>
            </div>

            {/* Hardware-accelerated smooth scroll container */}
            <div className='h-full overflow-y-auto transform-gpu will-change-transform scrollbar-hide'>
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
          </article>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
