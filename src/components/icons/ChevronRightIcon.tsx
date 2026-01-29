import React from 'react'

interface IconProps {
  className?: string
  size?: number
}

export const ChevronRightIcon: React.FC<IconProps> = ({
  className = 'h-6 w-6',
  size,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-label="Next"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  )
}
