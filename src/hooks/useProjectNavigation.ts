import { useState } from 'react'
import projects from '../data/projectsData'

interface UseProjectNavigationReturn {
  currentProjectIndex: number
  goToNextProject: () => void
  goToPreviousProject: () => void
  jumpToProject: (index: number) => void
}

export const useProjectNavigation = (): UseProjectNavigationReturn => {
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
