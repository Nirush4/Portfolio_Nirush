// app/page.tsx
'use client';

import { Navbar } from '@/components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
// import { Projects } from '../components/Projects';
// import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
// import { Background } from '../components/Background';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className='relative overflow-x-hidden'>
        <section
          id='home'
          className='flex items-center sm:min-h-screen min-h-[85dvh]'
        >
          <div className='container px-6 mx-auto mt-20 sm:mt-0 md:px-8'>
            <Hero />
          </div>
        </section>
        <About />
      </main>
      <Footer />
    </>
  );
}
