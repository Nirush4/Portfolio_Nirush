// components/Projects.tsx
import ProjectCard from './ProjectCard';
import { projects } from '../lib/projects';

export default function Projects() {
  return (
    <section
      id='projects'
      className='relative flex flex-col items-center justify-center gap-8 px-6 mb-12 sm:mt-15 md:px-8'
    >
      {/* Background Glow */}
      <div className='absolute inset-0 pointer-events-none -z-10'>
        <div className='absolute w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/30 to-purple-400/15 rounded-full blur-3xl top-1/3 -left-40'></div>
        <div className='absolute w-[400px] h-[400px] bg-gradient-to-r from-purple-400/25 to-indigo-400/20 rounded-full blur-3xl bottom-1/4 -right-40'></div>
      </div>

      {/* Section Title */}
      <h2 className='text-2xl font-extrabold text-transparent sm:text-3xl md:text-5xl bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text'>
        Projects
      </h2>

      <p className='max-w-2xl text-base text-center md:text-lg text-neutral-700 dark:text-neutral-300'>
        Here are some of the projects I&apos;ve worked on, showcasing a variety
        of skills and technologies.
      </p>

      {/* Project Cards Grid */}
      <div className='grid w-full grid-cols-1 gap-6 mt-10 max-w-7xl sm:grid-cols-2 lg:grid-cols-3 justify-items-center'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
