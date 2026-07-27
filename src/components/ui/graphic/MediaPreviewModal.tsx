'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

interface MediaPreviewModalProps {
  isOpen: boolean;
  media: {
    type: 'image' | 'video';
    src: string;
  } | null;
  onClose: () => void;
}

export default function MediaPreviewModal({
  isOpen,
  media,
  onClose,
}: MediaPreviewModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isOpen) {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';

      document.removeEventListener('keydown', handleEscape);

      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && media && (
        <motion.div
          className='fixed inset-0 z-[100] flex items-center justify-center p-5 bg-black/90'
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={onClose}
        >
          <motion.div
            className='relative max-w-7xl max-h-[90vh]'
            initial={{
              scale: 0.95,
            }}
            animate={{
              scale: 1,
            }}
            exit={{
              scale: 0.95,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className='absolute z-20 flex items-center justify-center w-12 h-12 text-black bg-white rounded-full shadow-xl cursor-pointer -right-4 -top-4'
              aria-label='Close preview'
            >
              <X size={22} />
            </button>

            {media.type === 'image' ? (
              <img
                src={media.src}
                alt='Full preview'
                className='max-h-[85vh] max-w-[90vw] object-contain rounded-2xl'
              />
            ) : (
              <video
                ref={videoRef}
                src={media.src}
                controls
                autoPlay
                playsInline
                preload='metadata'
                className='max-h-[85vh] max-w-[90vw] rounded-2xl bg-black'
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
