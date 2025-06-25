import React from 'react'

const Experience = () => {
  const workExperience = [
    {
      title: 'Front-End Developer',
      company: 'TK Digital Solutions (Freelance), Australia',
      dates: 'Apr 2024 - May 2025',
      duties: [
        'Built headless eCommerce website with RESTful APIs.',
        'Developed property rental platform with Next.js.',
        'Delivered fully responsive, cross-browser UI using Tailwind CSS.',
        'Implemented unit test with Jest to ensure React component reliability.',
      ],
      technologies: [
        'React.js',
        'TypeScript',
        'Next.js',
        'RESTful APIs',
        'CI/CD',
      ],
    },
    {
      title: 'Software Developer',
      company: 'International Institute for Biomedical Research, China',
      dates: 'Aug 2020 - Apr 2022 ',
      duties: [
        'Built SPA using React, styled with Tailwind CSS for cross-browser UI.',
        'Developed backend server with Node.js and Express.',
        'Designed RESTful APIs supporting full CRUD operations on research data.',
      ],
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB Atlas'],
    },
    {
      title: 'Data Engineer - Manufacturing Analytics',
      company: 'Ruiyi Biotechnology Co., LTD, China',
      dates: 'Dec 2017 - Jul 2018',
      duties: [
        'Extracted and transformed manufacturing data using Python and pandas.',
        'Created PowerBI dashboards for real-time KPI monitoring.',
        'Implemented Python automation scripts to streamline daily data processing.',
      ],
      technologies: ['Python', 'Pandas', 'PowerBI', 'MySQL', 'Excel'],
    },
  ]

  return (
    <div className="flex-1">
      <h3 className="text-4xl font-bold mb-8">Work&nbsp;&nbsp;Experience</h3>
      {workExperience.map((job, index) => (
        <div key={index} className="mb-8">
          <h4 className="text-2xl font-semibold text-green-400">{job.title}</h4>
          <p className="text-lg text-white/70">
            {job.company} | {job.dates}
          </p>
          <ul className="list-disc list-inside mt-2 text-lg text-white/90">
            {job.duties.map((duty, dutyIndex) => (
              <li key={dutyIndex}>{duty}</li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-lg text-white/90 font-semibold mb-2">
              Technologies:
            </p>
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Experience
