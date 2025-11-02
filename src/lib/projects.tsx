// lib/projects.ts
import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Design System Starter',
    description: 'Token-driven UI kit with theming, motion, and accessibility.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    url: 'https://your-live-demo-or-repo-link',
    tag: 'UI/UX',
  },
  {
    title: 'Portfolio v3',
    description:
      'Fast, modern portfolio with App Router and smart image loading.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    url: 'https://your-live-demo-or-repo-link',
    tag: 'Web',
  },
  {
    title: 'Motion Patterns',
    description: 'Reusable interaction patterns for micro-interactions.',
    tech: ['Framer Motion', 'React'],
    url: 'https://your-live-demo-or-repo-link',
    tag: 'Motion',
  },
];
