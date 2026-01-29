import { useState, useCallback } from 'react'

interface UseProjectImageStateReturn {
  isImageLoading: boolean
  imageError: boolean
  resetImageState: () => void
  handleImageLoad: () => void
  handleImageError: (imagePath: string) => void
}

export const useProjectImageState = (): UseProjectImageStateReturn => {
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true)
  const [imageError, setImageError] = useState<boolean>(false)

  const resetImageState = useCallback((): void => {
    setIsImageLoading(true)
    setImageError(false)
  }, [])

  const handleImageLoad = useCallback((): void => {
    setIsImageLoading(false)
    setImageError(false)
  }, [])

  const handleImageError = useCallback((imagePath: string): void => {
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
