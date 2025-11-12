// components/Footer.tsx
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-white/10'>
      <div className='container flex flex-col items-center justify-between px-6 py-10 mx-auto text-sm md:px-8 text-neutral-400'>
        <div className='w-full pt-4 mt-8 text-center border-t border-gray-200'>
          <p className='text-sm text-gray-500'>
            &copy; {year} All rights reserved. Made with ❤️ by{' '}
            <a
              href='https://www.linkedin.com/in/nirushan-rajamanoharan/'
              target='_blank'
              rel='noopener noreferrer'
              className='font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text'
            >
              NIRUSH.
            </a>
          </p>
        </div>

        <div className='flex items-center gap-4 mt-4'>
          <a
            href='https://www.linkedin.com/in/nirushan-rajamanoharan/'
            target='_blank'
            rel='noreferrer'
            className='transition hover:text-white text-neutral-700 dark:text-neutral-300'
          >
            LinkedIn
          </a>
          <a
            href='https://github.com/Nirush4'
            target='_blank'
            rel='noreferrer'
            className='transition hover:text-white text-neutral-700 dark:text-neutral-300'
          >
            GitHub
          </a>
          <a
            href='#home'
            className='transition hover:text-white text-neutral-700 dark:text-neutral-300'
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
