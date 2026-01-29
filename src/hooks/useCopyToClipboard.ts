import { useState, useCallback } from 'react'

interface UseCopyToClipboardReturn {
  copied: boolean
  copyToClipboard: (text: string) => Promise<void>
}

export const useCopyToClipboard = (
  resetDelay = 2000
): UseCopyToClipboardReturn => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = useCallback(
    async (text: string): Promise<void> => {
      try {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), resetDelay)
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.error('Failed to copy to clipboard:', error)
        }
      }
    },
    [resetDelay]
  )

  return { copied, copyToClipboard }
}
