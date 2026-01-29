import React from 'react'
import {
  ReactIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  TailwindIcon,
  NodeIcon,
  ExpressIcon,
  StripeIcon,
  ClerkIcon,
  MongoIcon,
  GitIcon,
  NextjsIcon,
  ReduxIcon,
  PostmanIcon,
  AWSIcon,
} from '../components/SkillIcons'
import { Skill } from '../types'

export const frontendSkills: Skill[] = [
  {
    name: 'React',
    icon: <ReactIcon />,
    category: 'frontend',
  },
  {
    name: 'Next.js 14',
    icon: <NextjsIcon />,
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    icon: <TypeScriptIcon />,
    category: 'frontend',
  },
  {
    name: 'Tailwind CSS',
    icon: <TailwindIcon />,
    category: 'frontend',
  },
  {
    name: 'Redux Toolkit',
    icon: <ReduxIcon />,
    category: 'frontend',
  },
]

export const backendSkills: Skill[] = [
  {
    name: 'Node.js',
    icon: <NodeIcon />,
    category: 'backend',
  },
  {
    name: 'Express.js',
    icon: <ExpressIcon />,
    category: 'backend',
  },
  {
    name: 'Stripe Connect',
    icon: <StripeIcon />,
    category: 'backend',
  },
  {
    name: 'Clerk Auth',
    icon: <ClerkIcon />,
    category: 'backend',
  },
  {
    name: 'REST API / Postman',
    icon: <PostmanIcon />,
    category: 'backend',
  },
]

export const dataInfraSkills: Skill[] = [
  {
    name: 'MongoDB',
    icon: <MongoIcon />,
    category: 'database',
  },
  {
    name: 'Mongoose',
    icon: <MongoIcon />,
    category: 'database',
  },
  {
    name: 'AWS',
    icon: <AWSIcon />,
    category: 'cloud',
  },
  {
    name: 'Git/GitHub',
    icon: <GitIcon />,
    category: 'tool',
  },
]
