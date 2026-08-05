'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { GraphicProject } from '@/types/graphicProject';

interface DesignGalleryProps {
  project: GraphicProject;
}

export default function DesignGallery({ project }: DesignGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const gallery = project.gallery || [];

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % gallery.length : 0
    );
  }, [selectedIndex, gallery.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + gallery.length) % gallery.length : 0
    );
  }, [selectedIndex, gallery.length]);

  // Keyboard navigation for arrow keys and escape key
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  if (!gallery.length) return null;

  const currentMedia = selectedIndex !== null ? gallery[selectedIndex] : null;

  return (
    <section>
      <h3 className='mb-10 text-3xl font-bold text-neutral-900'>
        Visual Gallery
      </h3>

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {gallery.map((media, index) => (
          <figure
            key={`${media.src}-${index}`}
            onClick={() => setSelectedIndex(index)}
            className='relative overflow-hidden bg-white shadow-sm cursor-pointer group rounded-3xl aspect-square'
          >
            {media.type === 'image' ? (
              <Image
                src={media.src}
                alt={`${project.name} gallery ${index + 1}`}
                fill
                quality={80}
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                className='object-contain transition-transform duration-300 group-hover:scale-105'
              />
            ) : (
              <video
                src={media.src}
                muted
                playsInline
                preload='metadata'
                className='object-contain w-full h-full bg-black'
              />
            )}

            <div className='absolute inset-0 transition duration-300 bg-black/0 group-hover:bg-black/20' />

            <figcaption className='absolute px-4 py-2 text-sm font-medium transition-opacity duration-200 bg-white rounded-full shadow-md opacity-0 bottom-5 left-5 text-neutral-800 group-hover:opacity-100'>
              {media.type === 'video'
                ? 'Click to preview video'
                : 'Click to view full image'}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Lightbox Modal with Next / Previous Controls */}
      {typeof window !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {selectedIndex !== null && currentMedia && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className='fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/90'
                onClick={() => setSelectedIndex(null)}
              >
                {/* Close Button */}
                <button
                  type='button'
                  aria-label='Close preview'
                  onClick={() => setSelectedIndex(null)}
                  className='absolute z-50 flex items-center justify-center w-12 h-12 text-white transition rounded-full bg-white/10 hover:bg-white/20 top-5 right-5 focus:outline-none'
                >
                  <X size={24} />
                </button>

                {/* Left (Previous) Button */}
                {gallery.length > 1 && (
                  <button
                    type='button'
                    aria-label='Previous image'
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className='absolute z-50 flex items-center justify-center w-12 h-12 text-white transition -translate-y-1/2 rounded-full cursor-pointer bg-white/10 hover:bg-white/20 left-4 sm:left-8 top-1/2 focus:outline-none'
                  >
                    <ChevronLeft size={28} />
                  </button>
                )}

                {/* Right (Next) Button */}
                {gallery.length > 1 && (
                  <button
                    type='button'
                    aria-label='Next image'
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className='absolute z-50 flex items-center justify-center w-12 h-12 text-white transition -translate-y-1/2 rounded-full cursor-pointer bg-white/10 hover:bg-white/20 right-4 sm:right-8 top-1/2 focus:outline-none'
                  >
                    <ChevronRight size={28} />
                  </button>
                )}

                {/* Media Container */}
                <div
                  className='relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center'
                  onClick={(e) => e.stopPropagation()}
                >
                  {currentMedia.type === 'image' ? (
                    <Image
                      key={currentMedia.src}
                      src={currentMedia.src}
                      alt={`${project.name} preview`}
                      fill
                      quality={90}
                      className='object-contain'
                    />
                  ) : (
                    <video
                      key={currentMedia.src}
                      src={currentMedia.src}
                      controls
                      autoPlay
                      className='max-w-full max-h-full rounded-2xl'
                    />
                  )}
                </div>

                {/* Counter Badge */}
                {gallery.length > 1 && (
                  <div className='absolute px-4 py-1.5 text-sm font-medium text-white rounded-full bg-white/10 bottom-6 left-1/2 -translate-x-1/2'>
                    {selectedIndex + 1} / {gallery.length}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
