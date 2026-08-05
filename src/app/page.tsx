// app/page.tsx
'use client';

import { Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

import { Navbar } from '@/components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import Projects from '../components/Projects';
import { Footer } from '../components/Footer';
import TimelineDemo from '@/components/Experience';
import HonorsAwards from '@/components/HonorsAwards';
import ContactSection from '@/components/Contact';

// Types and Project Data
import { GraphicProject } from '@/types/graphicProject';
import { graphicProjects } from '@/lib/graphicProjects';
import GraphicDesignModal from '@/components/ui/graphic/GraphicDesignModal';

function PageContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1. Derive state synchronously during render from searchParams
  const projectIdParam = searchParams.get('project');
  const numericId = projectIdParam ? Number(projectIdParam) : null;

  const selectedProject = numericId
    ? graphicProjects.find((p) => p.id === numericId) || null
    : null;

  const isModalOpen = Boolean(selectedProject);

  // 2. Open modal by pushing URL param
  const handleOpenModal = (project: GraphicProject) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('project', String(project.id));

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // 3. Close modal by deleting URL param
  const handleCloseModal = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('project');

    const newQueryString = params.toString();
    const newUrl = newQueryString ? `${pathname}?${newQueryString}` : pathname;

    router.push(newUrl, { scroll: false });
  };

  return (
    <>
      <Navbar />
      <main className='relative'>
        <section
          id='home'
          className='flex items-center sm:min-h-screen min-h-[85dvh]'
        >
          <div className='container px-6 mx-auto mt-20 sm:mt-0 md:px-8'>
            <Hero />
          </div>
        </section>
        <About />

        <Projects onSelectProject={handleOpenModal} />

        <TimelineDemo />
        <HonorsAwards />
        <ContactSection />
      </main>
      <Footer />

      {/* Render modal directly when selectedProject exists */}
      {selectedProject && (
        <GraphicDesignModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageContent />
    </Suspense>
  );
}
