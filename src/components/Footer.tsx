// components/Footer.tsx
export function Footer() {
  return (
    <footer className='border-t border-white/10'>
      <div className='container mx-auto px-6 md:px-8 py-10 text-sm text-neutral-400 flex items-center justify-between'>
        <span>© {new Date().getFullYear()} Your Name</span>
        <div className='flex items-center gap-4'>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noreferrer'
            className='hover:text-white transition'
          >
            LinkedIn
          </a>
          <a
            href='https://github.com'
            target='_blank'
            rel='noreferrer'
            className='hover:text-white transition'
          >
            GitHub
          </a>
          <a href='#home' className='hover:text-white transition'>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
