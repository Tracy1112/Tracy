import { Project } from '../types'

const projects: Project[] = [
  {
    id: 1,
    number: '01',
    title: 'NomadLiving Stays',
    description:
      'A high-performance SEO-first booking engine built with Next.js. Features complex date-logic availability, instant reservations, and server-side rendering for optimal search visibility.',
    technologies: ['Next.js', 'MongoDB', 'Clerk', 'Stripe'],
    liveLink: 'https://nomadliving-stays.vercel.app/',
    githubLink: 'https://github.com/Tracy1112/04-HomeAway_NextJs',
    images: ['/images/project2-main.jpg'],
  },
  {
    id: 2,
    number: '02',
    title: 'NomadLiving Boutique',
    description:
      'An integrated "Shop-the-Stay" furniture store utilizing Redux Toolkit for persistent cart management. Seamlessly connects guest booking data with retail opportunities.',
    technologies: ['React', 'Redux Toolkit', 'Stripe Payment', 'Tailwind'],
    liveLink: 'https://nomadliving-boutique.vercel.app/',
    githubLink: 'https://github.com/Tracy1112/02-Ecommerce_React',
    images: ['/images/project1-main.jpg'],
  },
  {
    id: 3,
    number: '03',
    title: 'NomadLiving Ops Console',
    description:
      'A centralized MERN Stack command center for staff. Manages maintenance tickets, vendor workflows, and visualizes real-time operational analytics with RBAC security.',
    technologies: ['MERN Stack', 'Recharts', 'JWT Auth', 'Express'],
    liveLink: 'https://nomadliving-ops.vercel.app',
    githubLink: 'https://github.com/Tracy1112/NomadLiving-Ops',
    images: ['/images/project3-main.jpg'],
  },
]

export default projects
