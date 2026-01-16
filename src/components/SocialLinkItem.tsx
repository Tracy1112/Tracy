import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SocialLink } from '../types'

interface SocialLinkItemProps {
  item: SocialLink
}

const SocialLinkItem: React.FC<SocialLinkItemProps> = ({ item }) => {
  const Icon = {
    FaLinkedin: FaLinkedin,
    FaGithub: FaGithub,
  }[item.icon as keyof typeof Icon]

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-green-400 transition-colors duration-300"
      aria-label={`Visit ${item.name} profile`}
    >
      {Icon && <Icon className="text-4xl" />}
    </a>
  )
}

export default SocialLinkItem
