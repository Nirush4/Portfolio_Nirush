// components/Projects.tsx
import ProjectCard from './ProjectCard';
import { projects } from '../lib/projects';

export default function Projects() {
  return (
    <section
      id='projects'
      className='flex flex-col items-center justify-center gap-8 px-6 mb-12 md:px-8'
    >
      {/* Section Title */}
      <h2 className='mb-5 text-2xl font-extrabold text-transparent md:text-4xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text'>
        Projects
      </h2>

      <p className='max-w-2xl text-base text-center md:text-lg text-neutral-700 dark:text-neutral-300'>
        Here are some of the projects I&apos;ve worked on, showcasing a variety
        of skills and technologies.
      </p>

      {/* Project Cards Grid */}
      <div className='grid w-full max-w-6xl grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
