// Type definitions for the portfolio

export interface Project {
  id: number
  number: string
  title: string
  description: string
  technologies: string[]
  liveLink: string
  githubLink: string
  images: string[]
}

export interface ContactDetail {
  type: 'email' | 'phone'
  icon: string
  value: string
  link: string
}

export interface SocialLink {
  name: string
  icon: string
  link: string
}

export interface WorkExperience {
  title: string
  company: string
  dates: string
  duties: string[]
  technologies: string[]
}

export interface Education {
  degree: string
  institution: string
  dates: string
  description?: string
  location?: string
  details?: string[]
}

export interface Certificate {
  name: string
  issuer: string
  date: string
  link?: string
}

export interface Skill {
  name: string
  icon: React.ReactNode
  category?: 'frontend' | 'backend' | 'database' | 'cloud' | 'tool'
}
