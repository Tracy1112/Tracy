import React from 'react'
import { Education } from '../types'

interface EducationEntryProps {
  entry: Education & {
    location: string
    details: string[]
  }
}

const EducationEntry: React.FC<EducationEntryProps> = ({ entry }) => {
  return (
    <div className="mb-8 border-l-2 border-green-400/30 pl-8 pb-4 relative">
      {/* Timeline Node - Hollow Circle */}
      <div className="absolute left-[-9px] top-1 w-4 h-4 bg-[#0f172a] rounded-full border-2 border-green-400"></div>
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h4 className="text-2xl font-bold text-gray-100">
          {entry.degree}
        </h4>
        <span className="text-sm text-gray-300 mt-2 md:mt-0">
          {entry.dates}
        </span>
      </div>
      <p className="text-lg text-gray-300/90 mb-6 font-medium">
        {entry.institution} | {entry.location}
      </p>
      <ul className="list-disc list-inside mt-2 text-base text-gray-300 space-y-3">
        {entry.details.map((detail: string, detailIndex: number) => (
          <li key={detailIndex} className="leading-loose">{detail}</li>
        ))}
      </ul>
    </div>
  )
}

export default EducationEntry
