/**
 * Utility functions for the portfolio application
 */

/**
 * Opens an external link in a new tab
 * @param url - The URL to open
 * @param options - Optional configuration
 */
export const openExternalLink = (
  url: string,
  options?: { target?: string; rel?: string }
): void => {
  const link = document.createElement('a')
  link.href = url
  link.target = options?.target || '_blank'
  link.rel = options?.rel || 'noopener noreferrer'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 * Validates email format
 * @param email - Email address to validate
 * @returns true if email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Formats phone number for display
 * @param phone - Phone number string
 * @returns Formatted phone number
 */
export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '')
  
  // Format Australian phone numbers
  if (digits.startsWith('61') && digits.length === 11) {
    return `+61 ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`
  }
  
  return phone
}

/**
 * Gets image source with fallback
 * @param imagePath - Path to the image
 * @returns Object with webp and fallback paths
 */
export const getImageSrc = (imagePath: string): { webp: string; fallback: string } => {
  const path = imagePath.startsWith('/') ? imagePath : `/${imagePath}`
  return {
    webp: path,
    fallback: path,
  }
}

/**
 * Scrolls to element smoothly
 * @param elementId - ID of the element to scroll to
 */
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
