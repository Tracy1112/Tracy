import React from 'react'
import EducationEntry from '../components/EducationEntry'
import { educationEntries } from '../data/educationData'

const Education: React.FC = () => {
  return (
    <div className="flex-1">
      <div className="space-y-16">
        {educationEntries.map((entry, index) => (
          <EducationEntry key={index} entry={entry} />
        ))}
      </div>
    </div>
  )
}

export default Education
