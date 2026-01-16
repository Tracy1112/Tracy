import React from 'react'
import { STATISTICS } from '../constants'

const Footer: React.FC = () => {
  const statistics = [
    { number: STATISTICS.YEARS_EXPERIENCE, text: 'Years of coding experience' },
    { number: STATISTICS.PROJECTS_COMPLETED, text: 'Projects completed' },
    { number: STATISTICS.TECHNOLOGIES_EXPLORED, text: 'Technologies explored' },
    { number: STATISTICS.CLIENT_SATISFACTION, text: 'Client satisfaction' },
  ]

  return (
    <footer className="w-full py-16">
      <div className="align-element flex flex-col items-center justify-center">
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white w-full">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-3 justify-center"
            >
              <span className="text-4xl md:text-5xl font-bold text-emerald-400">
                {stat.number}
              </span>
              <span className="text-sm md:text-base text-left text-gray-300 leading-tight">
                {stat.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
