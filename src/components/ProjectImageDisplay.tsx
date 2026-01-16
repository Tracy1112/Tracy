import React from 'react'
import ImageSkeleton from './ImageSkeleton'
import { Project } from '../types'
import { getImageSrc } from '../utils/generalUtils'

interface ProjectImageDisplayProps {
  currentProject: Project
  isImageLoading: boolean
  imageError: boolean
  handleImageLoad: () => void
  handleImageError: (imagePath: string) => void
}

const ProjectImageDisplay: React.FC<ProjectImageDisplayProps> = ({
  currentProject,
  isImageLoading,
  imageError,
  handleImageLoad,
  handleImageError,
}) => {
  return (
    <div className="relative w-full max-w-3xl aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_25px_70px_-15px_rgba(0,0,0,0.6)] bg-[#0f172a]">
      {currentProject.images && currentProject.images[0] ? (
        <a
          href={currentProject.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full block"
          aria-label={`View ${currentProject.title} live site`}
        >
          {isImageLoading && <ImageSkeleton />}
          {imageError ? (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl">
              Failed to load image
            </div>
          ) : (
            <picture className="w-full h-full block">
              <source
                srcSet={getImageSrc(currentProject.images[0]).webp}
                type="image/webp"
              />
              <img
                src={getImageSrc(currentProject.images[0]).fallback}
                alt={`${currentProject.title} screenshot`}
                className={`w-full h-full object-cover object-left transition-opacity duration-500 ${
                  isImageLoading ? 'opacity-0' : 'opacity-100'
                }`}
                loading="lazy"
                onLoad={handleImageLoad}
                onError={() => handleImageError(currentProject.images[0])}
              />
            </picture>
          )}
        </a>
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl">
          No Image
        </div>
      )}
    </div>
  )
}

export default ProjectImageDisplay
