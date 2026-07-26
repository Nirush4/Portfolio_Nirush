'use client';

import { GraphicProject } from '@/types/graphicProject';

interface DesignMetaProps {
  project: GraphicProject;
}

export default function DesignMeta({ project }: DesignMetaProps) {
  return (
    <section className='grid gap-6 md:grid-cols-3'>
      {project.tools?.length > 0 && (
        <div className='bg-white border p-7 rounded-3xl border-stone-200'>
          <h3 className='text-xl font-bold text-neutral-900'>Tools</h3>

          <div className='flex flex-wrap gap-3 mt-5'>
            {project.tools.map((tool) => (
              <span
                key={tool}
                className='px-4 py-2 text-sm rounded-full bg-stone-100 text-neutral-700'
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.colors?.length > 0 && (
        <div className='bg-white border p-7 rounded-3xl border-stone-200'>
          <h3 className='text-xl font-bold text-neutral-900'>
            Color Direction
          </h3>

          <div className='mt-6 space-y-4'>
            {project.colors.map((color) => (
              <div key={color.value} className='flex items-center gap-4'>
                <div
                  className='w-10 h-10 border rounded-full shadow-inner border-black/10'
                  style={{
                    backgroundColor: color.value,
                  }}
                />

                <div>
                  <p className='text-sm font-medium text-neutral-800'>
                    {color.name}
                  </p>

                  <p className='text-xs text-neutral-500'>{color.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.typography?.length > 0 && (
        <div className='bg-white border p-7 rounded-3xl border-stone-200'>
          <h3 className='text-xl font-bold text-neutral-900'>Typography</h3>

          <div className='mt-6 space-y-3'>
            {project.typography.map((font) => (
              <div key={font} className='p-4 rounded-2xl bg-stone-100'>
                <p className='text-lg font-medium text-neutral-800'>{font}</p>

                <p className='mt-1 text-sm text-neutral-500'>
                  Visual language choice
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
