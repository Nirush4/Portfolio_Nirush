import React from 'react';
import { Timeline } from '@/components/ui/timeline';

export default function TimelineDemo() {
  const data = [
    {
      title: '2024 - Present',
      content: (
        <div>
          <h3 className='text-base font-bold md:text-2xl text-neutral-700 dark:text-neutral-300'>
            Front-end Developer (Student)
          </h3>
          <h3 className='mb-2 text-sm md:text-base text-neutral-700 dark:text-neutral-300'>
            Noroff Oslo
          </h3>
          <div className='mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200'>
            <p className='text-sm font-bold md:text-base md:text-lg text-neutral-700 dark:text-neutral-300'>
              Responsibilities & Tasks:
            </p>
            <ul className='mt-2 ml-5 list-disc'>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Developed responsive web applications using HTML, CSS, and
                JavaScript
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Built interactive UI components and implemented user-friendly
                interfaces
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Worked on **React** and **Next.js** projects, exploring
                component-based architecture
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Implemented projects using **TypeScript** for type safety and
                maintainability
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Collaborated on team projects, following agile/scrum workflows
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Integrated APIs and handled data dynamically in web applications
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Conducted cross-browser testing to ensure consistent performance
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Used testing tools like **Vitest, Playwright, and Cypress** to
                ensure code quality
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Learned and applied version control using Git and GitHub
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Participated in peer code reviews and improved code quality
                through feedback
              </li>
            </ul>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <img
              src='/projects/rainydays.jpg'
              alt='startup template'
              width={500}
              height={500}
              className='h-30 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
            <img
              src='/projects/social-media-app.png'
              alt='startup template'
              width={500}
              height={500}
              className='h-30 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
            <img
              src='/projects/lensofwanderlust-vlog.jpg'
              alt='startup template'
              width={500}
              height={500}
              className='h-30 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
            />
            <img
              src='/projects/community-science-museum.jpg'
              alt='startup template'
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
          <h3 className='text-base font-bold md:text-2xl text-neutral-700 dark:text-neutral-300'>
            Senior Graphic Designer
          </h3>
          <h3 className='text-sm md:text-base text-neutral-700 dark:text-neutral-300'>
            Halo Flights – Halo Group of Companies
          </h3>
          <a
            href='https://www.haloflights.co.uk'
            target='blank'
            className='text-sm text-transparent sm:text-base bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text'
          >
            https://www.haloflights.co.uk/
          </a>
          <div className='mt-2 mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200'>
            <p className='text-sm font-bold md:text-base md:text-lg text-neutral-700 dark:text-neutral-300'>
              Responsibilities & Tasks:
            </p>
            <ul className='mt-2 ml-5 list-disc'>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Lead the visual design strategy for projects, ensuring alignment
                with brand identity and marketing goals.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Mentor junior designers and provide constructive feedback to
                elevate team design quality.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Develop innovative design concepts for digital, print, social
                media, and advertising campaigns. projects, exploring
                component-based architecture
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Develop innovative design concepts for digital, print, social
                media, and advertising campaigns.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Manage multiple design projects simultaneously, ensuring timely
                delivery without compromising quality.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Collaborate with project managers, marketers, copywriters, and
                developers to meet project objectives.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Maintain and evolve brand guidelines across all visual assets
                and communications.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Work on UI/UX design for websites, apps, and interactive
                platforms, ensuring intuitive and engaging user experiences.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
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
          <h3 className='text-base font-bold md:text-2xl text-neutral-700 dark:text-neutral-300'>
            Graphic Designer
          </h3>
          <h3 className='text-sm md:text-base text-neutral-700 dark:text-neutral-300'>
            DVSP Multi Service and Trading
          </h3>
          <div className='mt-2 mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200'>
            <p className='text-sm font-bold md:text-base md:text-lg text-neutral-700 dark:text-neutral-300'>
              Responsibilities & Tasks:
            </p>
            <ul className='mt-2 ml-5 list-disc'>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Develop visually appealing graphics for digital and print media,
                including social media posts, websites, brochures, banners,
                presentations, and marketing materials.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Transform ideas and concepts into compelling designs that
                communicate the intended message effectively.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Ensure all designs align with brand guidelines and maintain a
                consistent look and feel across all platforms.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Update and maintain visual assets in line with the company’s
                branding strategy.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Work closely with marketing, content, and product teams to
                understand project requirements and deliver high-quality design
                solutions.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Participate in brainstorming sessions and provide creative input
                to enhance campaigns and projects.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Manage multiple design projects from concept to completion,
                meeting deadlines and quality standards.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Propose new ideas and creative solutions for campaigns, social
                media, and branding initiatives.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
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
          <h3 className='text-base font-bold md:text-2xl text-neutral-700 dark:text-neutral-300'>
            Graphic Designer
          </h3>
          <h3 className='text-sm md:text-base text-neutral-700 dark:text-neutral-300'>
            Malaysian Excellence Media Sdn. Bhd
          </h3>
          <div className='mt-2 mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200'>
            <p className='text-sm font-bold md:text-base md:text-lg text-neutral-700 dark:text-neutral-300'>
              Responsibilities & Tasks:
            </p>
            <ul className='mt-2 ml-5 list-disc'>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Create engaging and visually compelling graphics for digital and
                print platforms, including social media, websites, brochures,
                presentations, and marketing campaigns.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Translate concepts and ideas into innovative designs that
                effectively convey the intended message.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Maintain brand consistency across all visual materials and
                ensure adherence to brand guidelines.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Refresh and manage visual assets to support ongoing marketing
                and branding initiatives.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Collaborate with marketing, content, and product teams to
                understand requirements and deliver high-quality designs.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Contribute creative ideas in brainstorming sessions to elevate
                campaigns and projects.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Handle multiple design projects simultaneously, from concept
                through completion, ensuring timely delivery and quality
                standards.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Suggest innovative solutions for campaigns, social media
                content, and brand identity development.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Incorporate feedback and make revisions while preserving design
                quality and integrity.
              </li>
            </ul>
          </div>

          <div className='grid grid-cols-2 gap-4 sm:gap-20'>
            <img
              src='/graphic-design/steve.jpg'
              alt='startup template'
              width={500}
              height={700}
              className='h-52 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-110'
            />
            <img
              src='/graphic-design/1873221.jpg'
              alt='startup template'
              width={500}
              height={700}
              className='h-52 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-110'
            />
          </div>
        </div>
      ),
    },
    {
      title: '2014 - 2017',
      content: (
        <div>
          <h3 className='text-base font-bold md:text-2xl text-neutral-700 dark:text-neutral-300'>
            Graphic Designer
          </h3>
          <h3 className='text-sm md:text-base text-neutral-700 dark:text-neutral-300'>
            Malaysian Hub Sdn. Bhd
          </h3>
          <div className='mt-2 mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200'>
            <p className='text-sm font-bold md:text-base md:text-lg text-neutral-700 dark:text-neutral-300'>
              Responsibilities & Tasks:
            </p>
            <ul className='mt-2 ml-5 list-disc'>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Designed creative and visually appealing graphics for both
                digital and print media, including social posts, website
                visuals, brochures, presentations, and marketing materials.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Turned ideas and concepts into effective designs that
                communicated messages clearly to target audiences.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Ensured all designs adhered to brand guidelines, maintaining a
                consistent and professional visual identity across platforms.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Updated and organized visual assets to support ongoing marketing
                campaigns and branding strategies.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
                Collaborated closely with marketing, content, and product teams
                to understand project goals and deliver high-quality design
                solutions.
              </li>
              <li className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>
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
