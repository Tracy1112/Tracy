import React, { useEffect } from 'react'
import projects from '../data/projectsData'
import { Project } from '../types'
import ProjectImageDisplay from '../components/ProjectImageDisplay'
import { useProjectNavigation, useProjectImageState } from '../hooks'
import { getProjectSubtitle } from '../utils/projectUtils'
import {
  ExternalLinkIcon,
  GitHubIconSVG,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '../components/icons'

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
              <ExternalLinkIcon size={28} />
            </a>
            <a
              href={currentProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={iconButtonClass}
              aria-label={`View ${currentProject.title} on GitHub`}
            >
              <GitHubIconSVG size={28} />
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
              <ChevronLeftIcon />
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
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
