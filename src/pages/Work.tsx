import React, { useState, useEffect } from 'react'
import projects from '../data/projectsData'
import { Project } from '../types'
import ProjectImageDisplay from '../components/ProjectImageDisplay'

const getProjectSubtitle = (title: string): string => {
  switch (title) {
    case 'NomadLiving Stays':
      return 'Luxury Glamping Booking Platform'
    case 'NomadLiving Boutique':
      return 'Lifestyle D2C E-commerce'
    default:
      return 'Internal B2B Operations Dashboard'
  }
}

const useProjectNavigation = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0)

  const goToNextProject = (): void => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToPreviousProject = (): void => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    )
  }

  const jumpToProject = (index: number): void => {
    setCurrentProjectIndex(index)
  }

  return {
    currentProjectIndex,
    goToNextProject,
    goToPreviousProject,
    jumpToProject,
  }
}

const useProjectImageState = () => {
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true)
  const [imageError, setImageError] = useState<boolean>(false)

  const resetImageState = React.useCallback((): void => {
    setIsImageLoading(true)
    setImageError(false)
  }, [])

  const handleImageLoad = React.useCallback((): void => {
    setIsImageLoading(false)
    setImageError(false)
  }, [])

  const handleImageError = React.useCallback((imagePath: string): void => {
    setIsImageLoading(false)
    setImageError(true)
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('Failed to load image:', imagePath)
    }
  }, [])

  return {
    isImageLoading,
    imageError,
    resetImageState,
    handleImageLoad,
    handleImageError,
  }
}

const Work: React.FC = () => {
  const {
    currentProjectIndex,
    goToNextProject,
    goToPreviousProject,
    jumpToProject,
  } = useProjectNavigation()
  const {
    isImageLoading,
    imageError,
    resetImageState,
    handleImageLoad,
    handleImageError,
  } = useProjectImageState()
  const currentProject: Project = projects[currentProjectIndex]
  const projectSubtitle = getProjectSubtitle(currentProject.title)
  const iconButtonClass =
    'text-white bg-gray-800/80 border border-gray-700/60 rounded-full p-4 transition-all duration-300 hover:bg-emerald-500/10 hover:border-emerald-400/50 hover:text-emerald-200 hover:shadow-[0_10px_30px_-15px_rgba(16,185,129,0.6)] hover:-translate-y-0.5'
  const navPrevButtonClass =
    'bg-gray-800/80 text-white p-3 rounded-full border border-gray-500/80 hover:bg-emerald-500/15 hover:border-emerald-400/60 transition-colors duration-300'
  const navNextButtonClass =
    'bg-transparent text-white p-3 rounded-full border border-green-400 hover:bg-green-400 hover:text-black transition-colors duration-300'
  const navDotBaseClass = 'h-2 rounded-full transition-all duration-300'

  // Reset loading state when project changes
  useEffect(() => {
    resetImageState()
  }, [currentProjectIndex, resetImageState])

  return (
    <div className="align-element flex flex-col py-16 min-h-screen h-full">
      {/* Section Header */}
      <div className="mb-16 text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-100 leading-snug">
          Featured Case Study: The NomadLiving Ecosystem
        </h1>
        <p className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed tracking-normal font-medium">
          Three platforms working together to complete the commercial loop.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0 items-start">
        {/* Left Content */}
        <div className="px-4 pt-0 pb-4 text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-5 text-white/10 text-stroke-white leading-none">
            {currentProject.number}
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-gray-100">
            {currentProject.title}
          </h2>
          <p className="text-base md:text-lg text-emerald-300/90 mb-5 font-medium tracking-tight">
            {projectSubtitle}
          </p>
          <p className="text-base md:text-lg text-gray-300/95 leading-relaxed mb-7 max-w-xl">
            {currentProject.description}
          </p>
          <p className="text-sm md:text-base text-emerald-300/90 mb-6 tracking-wide">
            {currentProject.technologies.join(', ')}
          </p>
        </div>

        {/* Right Image */}
        <div className="px-4 pb-0 flex flex-col justify-end">
          <ProjectImageDisplay
            currentProject={currentProject}
            isImageLoading={isImageLoading}
            imageError={imageError}
            handleImageLoad={handleImageLoad}
            handleImageError={handleImageError}
          />
        </div>

        {/* Left Footer */}
        <div className="px-4 pt-0 pb-4 flex items-center">
          <div className="flex items-center space-x-6 border-t-2 border-gray-700 pt-6 w-full">
            <a
              href={currentProject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={iconButtonClass}
              aria-label={`View ${currentProject.title} live site`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
            <a
              href={currentProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={iconButtonClass}
              aria-label={`View ${currentProject.title} on GitHub`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577V20.23c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.299 24 12c0-6.63-5.37-12-12-12Z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Navigation */}
        <div className="px-4 pt-0 pb-4 flex items-center justify-center mt-4">
          <div className="flex items-center space-x-4 pt-6">
            <button
              onClick={goToPreviousProject}
              className={navPrevButtonClass}
              aria-label="Previous project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => jumpToProject(index)}
                  className={`${navDotBaseClass} ${
                    index === currentProjectIndex
                      ? 'bg-green-400 w-8'
                      : 'bg-gray-600 w-2'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={goToNextProject}
              className={navNextButtonClass}
              aria-label="Next project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
