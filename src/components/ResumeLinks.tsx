import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface NavLink {
  to: string
  text: string
}

const ResumeLinks: React.FC = () => {
  const location = useLocation()
  const currentPath = location.pathname

  const links: NavLink[] = [
    { to: '/resume', text: 'Experience' },
    { to: '/resume/education', text: 'Education' },
    { to: '/resume/skills', text: 'Skills' },
    { to: '/resume/certificates', text: 'Certificates' },
  ]

  return (
    <nav className="mb-8 w-56" aria-label="Resume navigation">
      <ul className="flex flex-col space-y-6">
        {links.map((link, index) => {
          const isActive =
            currentPath === link.to ||
            (currentPath === '/resume' && link.to === '/resume')
          const linkClasses = `block px-4 text-lg uppercase tracking-widest transition-all duration-200 border-l-4 ${
            index === 0 ? 'pt-1 pb-4' : 'py-4'
          } ${
            isActive
              ? 'border-green-400 text-green-400 font-bold'
              : 'border-transparent text-gray-400 hover:text-white hover:border-gray-600'
          }`

          return (
            <li key={link.to}>
              <Link to={link.to} className={linkClasses}>
                {link.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default ResumeLinks
