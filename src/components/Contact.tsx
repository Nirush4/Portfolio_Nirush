'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

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
        {/* Heading */}
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
          <p className='mt-2 text-base text-gray-600 dark:text-gray-400 sm:text-lg'>
            Have a question? Want to collaborate? Drop me a message.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='p-10 space-y-6 transition-colors duration-500 border border-gray-200 shadow-lg dark:border-gray-800 bg-white/50 dark:bg-gray-900/40 rounded-2xl backdrop-blur-lg '
        >
          <input
            type='hidden'
            name='subject'
            value='New Portfolio Contact Message'
          />

          {/* Name Field */}
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

          {/* Email Field */}
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

          {/* Message Field */}
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

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            disabled={isSubmitting}
            className='w-full py-2 text-base text-white transition rounded-md cursor-pointer sm:rounded-lg sm:py-3 bg-gradient-to-r from-indigo-500 to-purple-600'
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>

          {/* Result Message */}
          {resultMessage && (
            <p
              className={`pt-4 text-center text-base font-bold px-4 py-2 rounded-md ${
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
