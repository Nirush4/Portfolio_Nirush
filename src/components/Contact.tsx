'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

interface Web3FormsResponse {
  success: boolean;
  message: string;
  data?: Record<string, string>;
}

export default function ContactSection() {
  const [resultMessage, setResultMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusType, setStatusType] = useState<'info' | 'success' | 'error'>(
    'info'
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResultMessage('Please wait...');
    setStatusType('info');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY!);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const data: Web3FormsResponse = await res.json();

      if (data.success) {
        setResultMessage(data.message || 'Message sent successfully!');
        setStatusType('success');
        form.reset();
      } else {
        setResultMessage(data.message || 'Something went wrong!');
        setStatusType('error');
      }
    } catch (err: unknown) {
      setResultMessage(
        err instanceof Error ? err.message : 'Something went wrong!'
      );
      setStatusType('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResultMessage(''), 4000);
    }
  };

  return (
    <section
      id='contact'
      className='py-10 transition-colors duration-500 bg-gray-200 sm:py-20 dark:bg-black text-neutral-700 dark:text-neutral-300'
    >
      <div className='max-w-3xl px-6 mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-10 text-center'
        >
          <h2 className='text-2xl font-bold sm:text-3xl md:text-4xl'>
            Let’s{' '}
            <span className='text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text sm:text-3xl md:text-4xl'>
              Connect
            </span>
          </h2>
          <p className='mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base'>
            Have a question? Want to collaborate? Drop me a message. I&apos;ll
            get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='p-6 space-y-6 transition-colors duration-500 border border-gray-200 shadow-lg sm:p-10 dark:border-gray-800 bg-white/50 dark:bg-gray-900/40 rounded-2xl backdrop-blur-lg '
        >
          <input
            type='hidden'
            name='subject'
            value='New Portfolio Contact Message'
          />

          <div>
            <label className='block mb-1 transition-colors text-smtext-neutral-700 dark:text-neutral-300 sm:text-base'>
              Name
            </label>
            <input
              name='name'
              required
              className='w-full p-3 text-sm transition-colors bg-gray-200 border border-gray-200 rounded-lg outline-none dark:border-gray-800 dark:bg-black sm:text-base focus:border-indigo-500'
              placeholder='John Doe'
            />
          </div>

          <div>
            <label className='block mb-1 text-sm text-gray-300 transition-colors sm:text-base'>
              Email
            </label>
            <input
              name='email'
              type='email'
              required
              className='w-full p-3 text-sm transition-colors bg-gray-200 border border-gray-200 rounded-lg outline-none dark:border-gray-800 dark:bg-black sm:text-base focus:border-indigo-500'
              placeholder='you@example.com'
            />
          </div>

          <div>
            <label className='block mb-1 text-sm text-gray-300 transition-colors sm:text-base'>
              Message
            </label>
            <textarea
              name='message'
              rows={5}
              required
              className='w-full p-3 text-sm transition-colors bg-gray-200 border border-gray-200 rounded-lg outline-none dark:border-gray-800 dark:bg-black sm:text-base focus:border-indigo-500'
              placeholder='Your message...'
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            disabled={isSubmitting}
            className='flex items-center justify-center w-full gap-2 py-2 text-base text-white transition rounded-md cursor-pointer sm:rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 disabled:opacity-70'
          >
            {isSubmitting ? (
              <>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='w-4 h-4 animate-pulse'
                >
                  <path d='M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z' />
                  <path d='m21.854 2.147-10.94 10.939' />
                </svg>
                Sending...
              </>
            ) : (
              <>
                <PaperAirplaneIcon className='w-5 h-5' />
                Send Message
              </>
            )}
          </motion.button>

          {resultMessage && (
            <p
              className={`pt-4 text-center text-base  px-4 py-2 rounded-md ${
                statusType === 'success'
                  ? 'bg-green-600 text-white border border-green-400'
                  : statusType === 'error'
                  ? 'bg-red-600 text-white border border-red-400'
                  : 'bg-green-500 text-white border border-green-400'
              }`}
            >
              {resultMessage}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
