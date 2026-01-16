import React from 'react'
import certificates from '../data/certificatesData'

const Certificates: React.FC = () => {
  return (
    <div className="flex-1">
      <p className="text-base text-gray-300/90 mb-12 leading-relaxed">
        Here are some of the certifications I have earned, demonstrating my
        expertise in various areas of software development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="group bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:border hover:border-emerald-400/30"
          >
            <h4 className="text-lg font-semibold text-gray-100 mb-3 group-hover:text-white transition-colors duration-300">
              {cert.name}
            </h4>
            <p className="text-gray-300/90 mb-3 text-base">{cert.issuer}</p>
            {cert.date && (
              <p className="text-sm text-gray-400 mb-4">{cert.date}</p>
            )}
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 inline-flex items-center gap-2 text-sm"
              >
                View Certificate
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificates
