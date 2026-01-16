import React, { useState } from 'react'
import { FaLinkedin, FaGithub, FaRegCopy } from 'react-icons/fa'
import { EXTERNAL_LINKS, CONTACT_INFO } from '../constants'

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="align-element flex flex-col items-center justify-start py-16 min-h-screen text-white">
      {/* Top Intro Text */}
      <div className="max-w-3xl text-center mb-12">
        <p className="text-lg text-gray-400 leading-loose mb-6">
          Ready to build something robust? Whether you need a complex dashboard or a high-converting storefront, I bring the &quot;Full Stack Ecosystem&quot; mindset to every project.
        </p>
      </div>

      {/* Main Contact Area - No Card, Open Layout */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-10">
        {/* Headline - Larger, More Prominent */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mt-4">
          Let&apos;s Build Something Great.
        </h2>

        {/* Email - Large & Interactive */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={copyEmail}>
            <a
              href={`mailto:${CONTACT_INFO.EMAIL}`}
              className="text-2xl md:text-3xl text-gray-200 font-medium cursor-pointer hover:text-emerald-400 transition-colors duration-200"
              onClick={(e) => e.preventDefault()}
            >
              {CONTACT_INFO.EMAIL}
            </a>
            <button
              onClick={(event) => {
                event.stopPropagation()
                copyEmail()
              }}
              className="text-gray-400 transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:text-emerald-300 hover:text-emerald-400"
              aria-label="Copy email to clipboard"
            >
              {copied ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-emerald-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <FaRegCopy className="h-6 w-6" />
              )}
            </button>
          </div>
          {copied && (
            <span className="text-sm text-emerald-400 animate-pulse">
              Copied to clipboard!
            </span>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex items-center gap-3 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <a
            href={`tel:${CONTACT_INFO.PHONE}`}
            className="text-lg text-gray-200 hover:text-emerald-400 transition-colors duration-200"
          >
            {CONTACT_INFO.PHONE}
          </a>
        </div>

        {/* Social Buttons - Outlined Style */}
        <div className="flex items-center gap-4 pt-8">
          <a
            href={EXTERNAL_LINKS.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 border border-gray-700 hover:border-emerald-500 hover:text-emerald-400 rounded-full text-gray-300 transition-all duration-200"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className="text-xl" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a
            href={EXTERNAL_LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 border border-gray-700 hover:border-emerald-500 hover:text-emerald-400 rounded-full text-gray-300 transition-all duration-200"
            aria-label="GitHub profile"
          >
            <FaGithub className="text-xl" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-500 mt-20 text-center">
        &copy; {new Date().getFullYear()} Tracy Kong. All rights reserved.
      </p>
    </div>
  )
}

export default Contact
