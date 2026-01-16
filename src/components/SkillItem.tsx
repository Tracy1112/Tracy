import React from 'react'
import { Skill } from '../types'

interface SkillItemProps {
  skill: Skill
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 hover:scale-105 hover:shadow-lg transition-transform ease-in-out text-center group">
      <span className="text-4xl mb-2">{skill.icon}</span>
      <span className="text-sm text-gray-200">{skill.name}</span>
      {skill.description && (
        <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {skill.description}
        </p>
      )}
    </div>
  )
}

export default SkillItem
