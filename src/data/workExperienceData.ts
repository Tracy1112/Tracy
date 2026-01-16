import { WorkExperience } from '../types'

export const workExperience: WorkExperience[] = [
  {
    title: 'Full Stack Developer (Freelance)',
    company: 'Self-Employed / Contract (Serving Australian Clients)',
    dates: 'Apr 2024 - Present',
    duties: [
      'Architected "NomadLiving," a unified digital ecosystem integrating a Next.js booking platform, React e-commerce boutique, and MERN-stack operations console.',
      'Designed a decoupled micro-service inspired architecture, utilizing Stripe Connect for payments and RBAC for internal security.',
      'Optimized SEO and Core Web Vitals for the booking platform using SSR (Server-Side Rendering), achieving a 98/100 Lighthouse score.',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'MERN Stack',
      'Stripe Connect',
      'RBAC',
      'SSR',
    ],
  },
  {
    title: 'Software Developer',
    company: 'International Institute for Biomedical Research, China',
    dates: 'Aug 2020 - Apr 2022',
    duties: [
      'Built SPA using React, styled with Tailwind CSS for cross-browser UI.',
      'Developed backend server with Node.js and Express.',
      'Designed RESTful APIs supporting full CRUD operations on research data.',
    ],
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB Atlas'],
  },
  {
    title: 'Data Engineer - Manufacturing Analytics',
    company: 'Ruiyi Biotechnology Co., LTD, China',
    dates: 'Dec 2017 - Jul 2018',
    duties: [
      'Extracted and transformed manufacturing data using Python and pandas.',
      'Created PowerBI dashboards for real-time KPI monitoring.',
      'Implemented Python automation scripts to streamline daily data processing.',
    ],
    technologies: ['Python', 'Pandas', 'PowerBI', 'MySQL', 'Excel'],
  },
]
