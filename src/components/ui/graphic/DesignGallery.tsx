'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { GraphicProject } from '@/types/graphicProject';

interface DesignGalleryProps {
  project: GraphicProject;
}

export default function DesignGallery({ project }: DesignGalleryProps) {
  if (!project.gallery?.length) {
    return null;
  }

  return (
    <section>
      <h3 className='mb-10 text-3xl font-bold text-neutral-900'>
        Visual Gallery
      </h3>

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {project.gallery.map((image, index) => (
          <motion.figure
            key={`${image}-${index}`}
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
            className='relative flex items-center justify-center overflow-hidden shadow-sm bg-stone-100 group aspect-square rounded-3xl'
          >
            <Image
              src={image}
              alt={`${project.name} gallery preview ${index + 1}`}
              fill
              sizes='
                (max-width:640px) 100vw,
                (max-width:1024px) 50vw,
                33vw
              '
              className='object-contain p-3 transition-transform duration-700 group-hover:scale-105'
            />

            <div
              aria-hidden='true'
              className='absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:opacity-100'
            />

            <figcaption className='absolute px-4 py-2 text-sm font-medium transition-all duration-300 translate-y-3 rounded-full opacity-0 bottom-5 left-5 bg-white/90 text-neutral-800 backdrop-blur group-hover:opacity-100 group-hover:translate-y-0'>
              Image {index + 1}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
