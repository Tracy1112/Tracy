import React from 'react'
import SkillItem from '../components/SkillItem'
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
  GitHubIcon,
  NextjsIcon,
  ReduxIcon,
  PostmanIcon,
  AWSIcon,
} from '../components/SkillIcons'
import { Skill } from '../types'

const Skills: React.FC = () => {
  const frontendSkills: Skill[] = [
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

  const backendSkills: Skill[] = [
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

  const dataInfraSkills: Skill[] = [
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

  return (
    <div className="flex-1">
      {/* Category 1: Frontend */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-emerald-400 mb-3">
          The Frontend (User Experience)
        </h3>
        <p className="text-gray-300/90 mb-6 text-base leading-relaxed">
          Key Strength: Server-Side Rendering (SSR), Responsive Design, State Management
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {frontendSkills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
      </div>

      {/* Category 2: Backend */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-emerald-400 mb-3">
          The Backend (Business Logic)
        </h3>
        <p className="text-gray-300/90 mb-6 text-base leading-relaxed">
          Key Strength: Payment Integration, RBAC Security, API Design
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {backendSkills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
      </div>

      {/* Category 3: Data & Infra */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-emerald-400 mb-3">
          The Data & Infra (Scalability)
        </h3>
        <p className="text-gray-300/90 mb-6 text-base leading-relaxed">
          Key Strength: Database Schema Design, CI/CD Pipelines
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {dataInfraSkills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
