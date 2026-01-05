// components/HonorsAwards.tsx

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function HonorsAwards() {
  const awards = [
    { src: '/awards/prisutdeling-2025.jpg', alt: 'Award Gala Photo' },
    { src: '/awards/image.jpg', alt: 'Golden Egg Award' },
  ];

  const [mainIndex, setMainIndex] = useState(0);

  return (
    <section
      id='honors-awards'
      className='relative overflow-x-hidden py-14 sm:py-19'
    >
      {/* Background Glow */}
      <div className='absolute inset-0 pointer-events-none -z-10'>
        <div className='absolute w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/30 to-purple-400/15 rounded-full blur-3xl top-1/3 -left-40'></div>
        <div className='absolute w-[400px] h-[400px] bg-gradient-to-r from-purple-400/25 to-indigo-400/20 rounded-full blur-3xl bottom-1/4 -right-40'></div>
      </div>

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='max-w-4xl px-6 mx-auto mb-10 text-center sm:mb-20'
      >
        <h2 className='text-2xl font-extrabold text-transparent sm:text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-purple-500 via-green-500 to-indigo-600'>
          Honors & Awards
        </h2>
        <p className='mt-4 text-base text-gray-600 sm:text-lg dark:text-gray-400'>
          Celebrating dedication, creativity, and growth in front-end
          development.
        </p>
      </motion.div>

      <div className='flex flex-col max-w-6xl gap-12 px-6 mx-auto md:flex-row'>
        {/* Gallery (Top on mobile) */}
        <div className='flex flex-col items-center justify-center order-1 w-full gap-4 md:w-2/5 md:order-2'>
          {/* Main Image */}
          <motion.div
            key={mainIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='relative w-full max-w-sm md:max-w-6xl h-[55vh] lg:h-[70vh] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group'
          >
            <Image
              src={awards[mainIndex].src}
              alt={awards[mainIndex].alt}
              fill
              sizes='(max-width: 768px) 100vw, 40vw'
              className='object-cover object-top transition-transform duration-500 group-hover:scale-105'
            />
            <div className='absolute inset-0 transition-opacity opacity-0 pointer-events-none bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:opacity-50 rounded-3xl'></div>
          </motion.div>

          {/* Thumbnails stacked vertically on mobile */}
          <div className='flex gap-4 mt-2 md:mt-0'>
            {awards.map((award, index) => (
              <motion.div
                key={index}
                onClick={() => setMainIndex(index)}
                whileHover={{ scale: 1.05 }}
                className={`relative w-20 h-20 md:w-24 md:h-28 rounded-xl overflow-hidden shadow-lg cursor-pointer border-2 ${
                  mainIndex === index
                    ? 'border-blue-500 dark:border-purple-500'
                    : 'border-transparent'
                }`}
              >
                <Image
                  src={award.src}
                  alt={award.alt}
                  fill
                  sizes='(max-width: 768px) 50vw, 20vw'
                  className='object-cover object-top'
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Award Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='relative order-2 w-full p-8 transition-all border border-gray-200 shadow-xl md:w-3/5 bg-white/80 dark:bg-black/70 backdrop-blur-lg rounded-3xl md:p-10 dark:border-neutral-800 md:order-1'
        >
          <div className='absolute w-12 h-12 rounded-full -top-6 -left-6 bg-gradient-to-tr from-blue-400 to-purple-500 animate-pulse'></div>

          <h3 className='flex items-center gap-3 mb-4 text-base font-bold sm:text-2xl'>
            <span className='text-4xl animate-bounce'>🏆</span>
            Best Student Work in Front-End Development
          </h3>

          <p className='mb-4 text-base font-medium text-transparent sm:mb-10 sm:text-xl bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text'>
            Golden Egg 2025 · Noroff
          </p>

          <p className='mb-6 text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-400'>
            This recognition is deeply meaningful to me. From day one, I
            immersed myself in front-end development, exploring every framework,
            tool, and technique. The journey was challenging, with late nights
            and countless iterations, but every obstacle strengthened my skills
            and determination.
          </p>

          <p className='mb-6 text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-400'>
            Receiving this award at Golden Egg 2025 reflects dedication,
            perseverance, and a passion for crafting elegant, user-friendly web
            experiences. It motivates me to push boundaries, innovate, and
            pursue excellence in every project I undertake.
          </p>

          <p className='font-semibold text-gray-800 dark:text-gray-200'>
            Year:{' '}
            <span className='font-bold text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text'>
              2025
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
