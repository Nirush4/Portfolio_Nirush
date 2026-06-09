import React from 'react';
import { Timeline } from '@/components/ui/timeline';

export default function TimelineDemo() {
  const data = [
    {
      title: '02 Feb 2026 - 30 Apr 2026',
      content: (
        <div>
          <h3 className='text-base font-bold transition-colors md:text-2xl text-neutral-700 dark:text-gray-200'>
            Front-End Developer Intern
          </h3>

          <h3 className='text-sm text-gray-600 transition-colors md:text-base dark:text-gray-200'>
            Publicis Norway
          </h3>
          <a
            href='https://www.publicis.no/'
            target='blank'
            className='text-sm text-transparent sm:text-base bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text'
          >
            https://www.publicis.no/
          </a>

          <div className='mb-8 text-xs font-normal transition-colors text-neutral-800 md:text-sm dark:text-neutral-200'>
            <p className='text-sm font-bold transition-colors md:text-lg text-neutral-700 dark:text-gray-200'>
              Focus & Experience:
            </p>

            <ul className='mt-2 ml-5 list-disc'>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Worked as a Front-End Developer Intern on real projects in a
                professional environment
              </li>

              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Built and improved user interfaces using <strong>React</strong>{' '}
                and <strong>TypeScript</strong>
              </li>

              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Integrated and consumed <strong>REST APIs</strong> to manage
                dynamic data in frontend applications
              </li>

              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Collaborated closely with backend developer, and frontend
                developers in an agile environment, contributing to sprint
                planning, code reviews, and feature delivery
              </li>

              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Improved UI components for performance, responsiveness, and user
                experience
              </li>

              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Strengthened practical skills in modern frontend development
                using React, and TypeScript best practices
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: '2024 - 2026',
      content: (
        <div>
          <h3 className='text-base font-bold transition-colors md:text-2xl text-neutral-700 dark:text-gray-200'>
            Front-End Developer
          </h3>

          <h3 className='mb-2 text-sm transition-colors md:text-base text-neutral-700 dark:text-gray-200'>
            Noroff Oslo
          </h3>

          <div className='mb-8 text-xs font-normal transition-colors text-neutral-800 md:text-sm dark:text-neutral-200'>
            <p className='text-sm font-bold transition-colors md:text-lg text-neutral-700 dark:text-gray-200'>
              Focus & Experience:
            </p>

            <ul className='mt-2 ml-5 list-disc'>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Built modern, responsive web applications using{' '}
                <strong>React</strong> and component-based architecture
              </li>

              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Developed scalable front-end applications using{' '}
                <strong>TypeScript</strong> for type safety and maintainability
              </li>

              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Created reusable UI components and structured application logic
                using modern React patterns (hooks, props, state management)
              </li>

              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Worked with <strong>Next.js</strong> for routing, rendering
                strategies, and performance optimization
              </li>

              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Integrated APIs and handled asynchronous data flow in React
                applications
              </li>

              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Implemented global state management and application logic in
                React-based projects
              </li>

              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Worked with testing tools such as{' '}
                <strong>Vitest, Playwright, and Cypress</strong> to ensure
                application reliability
              </li>

              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Collaborated in team environments using Git and GitHub workflows
                following agile practices
              </li>

              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Focused on writing clean, maintainable, and scalable frontend
                code using React best practices
              </li>
            </ul>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <img
              src='/projects/rainydays.jpg'
              alt='project preview'
              width={500}
              height={500}
              className='h-30 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />

            <img
              src='/projects/aution-house.png'
              alt='project preview'
              width={500}
              height={500}
              className='h-30 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />

            <img
              src='/projects/holidaze.png'
              alt='project preview'
              width={500}
              height={500}
              className='h-30 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />

            <img
              src='/projects/online-shopping.png'
              alt='project preview'
              width={500}
              height={500}
              className='h-30 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'January 2022 - August 2023',
      content: (
        <div>
          <h3 className='text-base font-bold text-gray-600 transition-colors md:text-2xl dark:text-gray-200'>
            Senior Graphic Designer
          </h3>
          <h3 className='text-sm text-gray-600 transition-colors md:text-base dark:text-gray-200'>
            Halo Flights – Halo Group of Companies
          </h3>
          <a
            href='https://www.haloflights.co.uk'
            target='blank'
            className='text-sm text-transparent sm:text-base bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text'
          >
            https://www.haloflights.co.uk/
          </a>
          <div className='mt-2 mb-8 text-xs font-normal transition-colors text-neutral-800 md:text-sm dark:text-neutral-200'>
            <p className='text-sm font-bold text-gray-600 transition-colors md:text-lg dark:text-gray-200'>
              Responsibilities & Tasks:
            </p>
            <ul className='mt-2 ml-5 list-disc'>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Lead the visual design strategy for projects, ensuring alignment
                with brand identity and marketing goals.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Mentor junior designers and provide constructive feedback to
                elevate team design quality.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Develop innovative design concepts for digital, print, social
                media, and advertising campaigns. projects, exploring
                component-based architecture
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Develop innovative design concepts for digital, print, social
                media, and advertising campaigns.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Manage multiple design projects simultaneously, ensuring timely
                delivery without compromising quality.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Collaborate with project managers, marketers, copywriters, and
                developers to meet project objectives.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Maintain and evolve brand guidelines across all visual assets
                and communications.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Work on UI/UX design for websites, apps, and interactive
                platforms, ensuring intuitive and engaging user experiences.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Review all visual content for accuracy, consistency, and
                high-quality standards before delivery.
              </li>
            </ul>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <img
              src='/graphic-design/2130330.jpg'
              alt='startup template'
              width={500}
              height={600}
              className='h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
            <img
              src='/graphic-design/2117377.jpg'
              alt='startup template'
              width={500}
              height={600}
              className='h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
            <img
              src='/graphic-design/2004986.jpg'
              alt='startup template'
              width={500}
              height={600}
              className='h-40 w-full rounded-lg object-cover object-top shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
            <img
              src='/graphic-design/1846732.png'
              alt='startup template'
              width={500}
              height={600}
              className='h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
          </div>
        </div>
      ),
    },
    {
      title: '2019 - 2021',
      content: (
        <div>
          <h3 className='text-base font-bold text-gray-600 transition-colors md:text-2xl dark:text-gray-200'>
            Graphic Designer
          </h3>
          <h3 className='text-sm text-gray-600 transition-colors md:text-base dark:text-gray-200'>
            DVSP Multi Service and Trading
          </h3>
          <div className='mt-2 mb-8 text-xs font-normal transition-colors text-neutral-800 md:text-sm dark:text-neutral-200'>
            <p className='text-sm font-bold text-gray-600 transition-colors md:text-lg dark:text-gray-200'>
              Responsibilities & Tasks:
            </p>
            <ul className='mt-2 ml-5 list-disc'>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Develop visually appealing graphics for digital and print media,
                including social media posts, websites, brochures, banners,
                presentations, and marketing materials.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Transform ideas and concepts into compelling designs that
                communicate the intended message effectively.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Ensure all designs align with brand guidelines and maintain a
                consistent look and feel across all platforms.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Update and maintain visual assets in line with the company’s
                branding strategy.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Work closely with marketing, content, and product teams to
                understand project requirements and deliver high-quality design
                solutions.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Participate in brainstorming sessions and provide creative input
                to enhance campaigns and projects.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Manage multiple design projects from concept to completion,
                meeting deadlines and quality standards.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Propose new ideas and creative solutions for campaigns, social
                media, and branding initiatives.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Make revisions based on feedback while ensuring the design
                integrity remains intact.
              </li>
            </ul>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <img
              src='/graphic-design/1730945.png'
              alt='startup template'
              width={500}
              height={600}
              className='h-30 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
            <img
              src='/graphic-design/1731118.png'
              alt='startup template'
              width={500}
              height={600}
              className='h-30 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
            <img
              src='/graphic-design/2004557.jpg'
              alt='startup template'
              width={500}
              height={600}
              className='h-30 w-full rounded-lg object-cover object-top shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
            <img
              src='/graphic-design/2004562.jpg'
              alt='startup template'
              width={500}
              height={600}
              className='h-30 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
          </div>
        </div>
      ),
    },
    {
      title: '2017 - 2019',
      content: (
        <div>
          <h3 className='text-base font-bold text-gray-600 transition-colors md:text-2xl dark:text-gray-200'>
            Graphic Designer
          </h3>
          <h3 className='text-sm text-gray-600 transition-colors md:text-base dark:text-gray-200'>
            Malaysian Excellence Media Sdn. Bhd
          </h3>
          <div className='mt-2 mb-8 text-xs font-normal transition-colors text-neutral-800 md:text-sm dark:text-neutral-200'>
            <p className='text-sm font-bold text-gray-600 transition-colors md:text-lg dark:text-gray-200'>
              Responsibilities & Tasks:
            </p>
            <ul className='mt-2 ml-5 list-disc'>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Create engaging and visually compelling graphics for digital and
                print platforms, including social media, websites, brochures,
                presentations, and marketing campaigns.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Translate concepts and ideas into innovative designs that
                effectively convey the intended message.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Maintain brand consistency across all visual materials and
                ensure adherence to brand guidelines.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Refresh and manage visual assets to support ongoing marketing
                and branding initiatives.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Collaborate with marketing, content, and product teams to
                understand requirements and deliver high-quality designs.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Contribute creative ideas in brainstorming sessions to elevate
                campaigns and projects.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Handle multiple design projects simultaneously, from concept
                through completion, ensuring timely delivery and quality
                standards.
              </li>
              <li className='text-sm text-gray-600 transition-colors sm:text-base dark:text-gray-200'>
                Suggest innovative solutions for campaigns, social media
                content, and brand identity development.
              </li>
              <li className='text-sm transition-colors sm:text-base text-neutral-700 dark:text-gray-200'>
                Incorporate feedback and make revisions while preserving design
                quality and integrity.
              </li>
            </ul>
          </div>

          <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 '>
            <img
              src='/graphic-design/steve.jpg'
              alt='startup template'
              width={300}
              height={600}
              className='h-52 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-90 max-w-60'
            />
            <img
              src='/graphic-design/1873221.jpg'
              alt='startup template'
              width={300}
              height={600}
              className='h-52 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-90  max-w-60'
            />
          </div>
        </div>
      ),
    },
    {
      title: '2014 - 2017',
      content: (
        <div>
          <h3 className='text-base font-bold transition-colors md:text-2xl text-neutral-700 dark:text-gray-200'>
            Graphic Designer
          </h3>
          <h3 className='text-sm transition-colors md:text-base text-neutral-700 dark:text-gray-200'>
            Malaysian Hub Sdn. Bhd
          </h3>
          <div className='mt-2 mb-8 text-xs font-normal transition-colors text-neutral-800 md:text-sm dark:text-neutral-200'>
            <p className='text-sm font-bold transition-colors md:text-lg text-neutral-700 dark:text-gray-200'>
              Responsibilities & Tasks:
            </p>
            <ul className='mt-2 ml-5 list-disc'>
              <li className='text-sm transition-colors sm:text-base text-neutral-700 dark:text-gray-200'>
                Designed creative and visually appealing graphics for both
                digital and print media, including social posts, website
                visuals, brochures, presentations, and marketing materials.
              </li>
              <li className='text-sm transition-colors sm:text-base text-neutral-700 dark:text-gray-200'>
                Turned ideas and concepts into effective designs that
                communicated messages clearly to target audiences.
              </li>
              <li className='text-sm transition-colors sm:text-base text-neutral-700 dark:text-gray-200'>
                Ensured all designs adhered to brand guidelines, maintaining a
                consistent and professional visual identity across platforms.
              </li>
              <li className='text-sm transition-colors sm:text-base text-neutral-700 dark:text-gray-200'>
                Updated and organized visual assets to support ongoing marketing
                campaigns and branding strategies.
              </li>
              <li className='text-sm transition-colors sm:text-base text-neutral-700 dark:text-gray-200'>
                Collaborated closely with marketing, content, and product teams
                to understand project goals and deliver high-quality design
                solutions.
              </li>
              <li className='text-sm transition-colors sm:text-base text-neutral-700 dark:text-gray-200'>
                Contributed creative ideas during team brainstorming sessions to
                enhance campaigns and projects.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className='relative w-full overflow-clip'>
      <Timeline data={data} />
    </div>
  );
}
