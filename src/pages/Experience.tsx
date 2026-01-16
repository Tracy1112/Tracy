import React from 'react'
import { workExperience } from '../data/workExperienceData'
import { WorkExperience } from '../types'

const Experience: React.FC = () => {
  return (
    <div className="flex-1">
      <div className="space-y-16">
        {workExperience.map((job: WorkExperience, index: number) => (
          <div
            key={index}
            className="border-l-2 border-green-400/30 pl-8 pb-4 last:pb-0 relative"
          >
            {/* Timeline Node - Hollow Circle */}
            <div className="absolute left-[-9px] top-1 w-4 h-4 bg-[#0f172a] rounded-full border-2 border-green-400"></div>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h4 className="text-2xl font-bold text-gray-100">
                {job.title}
              </h4>
              <span className="text-sm text-gray-300 mt-2 md:mt-0">
                {job.dates}
              </span>
            </div>
            <p className="text-lg text-gray-300/90 mb-6 font-medium">
              {job.company}
            </p>
            <ul className="list-disc list-inside mt-2 text-base text-gray-300 space-y-3 mb-6">
              {job.duties.map((duty: string, dutyIndex: number) => (
                <li key={dutyIndex} className="leading-loose">
                  {duty}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-xs text-gray-500 font-semibold mb-3 uppercase tracking-wider">
                Technologies Used
              </p>
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech: string, techIndex: number) => (
                  <span
                    key={techIndex}
                    className="px-4 py-1.5 bg-transparent text-emerald-300/80 rounded-full text-sm border border-emerald-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
