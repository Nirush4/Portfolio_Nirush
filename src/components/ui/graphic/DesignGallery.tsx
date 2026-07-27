'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { GraphicProject } from '@/types/graphicProject';
import MediaPreviewModal from './MediaPreviewModal';

interface DesignGalleryProps {
  project: GraphicProject;
}

export default function DesignGallery({ project }: DesignGalleryProps) {
  const [selectedMedia, setSelectedMedia] = useState<{
    type: 'image' | 'video';
    src: string;
  } | null>(null);

  if (!project.gallery?.length) {
    return null;
  }

  return (
    <section>
      <h3 className='mb-10 text-3xl font-bold text-neutral-900'>
        Visual Gallery
      </h3>

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {project.gallery.map((media, index) => (
          <motion.figure
            key={`${media.src}-${index}`}
            onClick={() => setSelectedMedia(media)}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.1,
            }}
            className='relative overflow-hidden bg-white shadow-sm cursor-pointer group rounded-3xl aspect-square'
          >
            {media.type === 'image' ? (
              <Image
                src={media.src}
                alt={`${project.name} gallery ${index + 1}`}
                fill
                sizes='
                  (max-width:640px) 100vw,
                  (max-width:1024px) 50vw,
                  33vw
                '
                className='object-contain transition-transform duration-700 group-hover:scale-105'
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

            <figcaption className='absolute px-4 py-2 text-sm font-medium transition-opacity duration-300 rounded-full opacity-0 bottom-5 left-5 bg-white/90 text-neutral-800 backdrop-blur group-hover:opacity-100'>
              {media.type === 'video'
                ? 'Click to preview video'
                : 'Click to view full image'}
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <MediaPreviewModal
        isOpen={!!selectedMedia}
        media={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />
    </section>
  );
}
