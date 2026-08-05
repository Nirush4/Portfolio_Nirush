'use client';

import { GraphicProject } from '@/types/graphicProject';

interface DesignTimelineProps {
  project: GraphicProject;
}

export default function DesignTimeline({ project }: DesignTimelineProps) {
  if (
    !project.designProcess?.length &&
    !project.designDecisions?.length &&
    !project.research?.length
  ) {
    return null;
  }

  return (
    <section className='space-y-20'>
      {project.research?.length > 0 && (
        <div>
          <h3 className='mb-10 text-3xl font-bold text-neutral-900'>
            Research & Inspiration
          </h3>

          <div className='grid gap-6 md:grid-cols-2'>
            {project.research.map((item, index) => (
              <article
                key={item}
                className='relative bg-white border shadow-sm p-7 rounded-3xl border-stone-200'
              >
                <span className='flex items-center justify-center w-10 h-10 mb-5 font-bold text-orange-700 bg-orange-100 rounded-full'>
                  {index + 1}
                </span>

                <p className='leading-8 text-neutral-700'>{item}</p>
              </article>
            ))}
          </div>
        </div>
      )}

      {project.designProcess?.length > 0 && (
        <div>
          <h3 className='mb-10 text-3xl font-bold text-neutral-900'>
            Design Journey
          </h3>

          <div className='relative pl-10 ml-4 space-y-8 border-l-2 border-orange-200'>
            {project.designProcess.map((item, index) => (
              <article key={item} className='relative'>
                <span className='absolute flex items-center justify-center w-10 h-10 text-sm font-bold text-white bg-orange-500 rounded-full -left-[61px]'>
                  0{index + 1}
                </span>

                <div className='bg-white border shadow-sm p-7 rounded-3xl border-stone-200'>
                  <p className='leading-8 text-neutral-700'>{item}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {project.designDecisions?.length > 0 && (
        <div>
          <h3 className='mb-10 text-3xl font-bold text-neutral-900'>
            Design Decisions
          </h3>

          <div className='grid gap-5'>
            {project.designDecisions.map((item) => (
              <div
                key={item}
                className='border border-orange-100 p-7 bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl'
              >
                <p className='leading-8 text-neutral-700'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
