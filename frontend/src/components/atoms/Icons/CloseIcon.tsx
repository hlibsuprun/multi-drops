import { FC, memo } from 'react'

interface CloseIconProps {
  size: string
}

export const CloseIcon: FC<CloseIconProps> = memo(({ size }) => {
  return (
    <svg
      height={size}
      width={size}
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M18 6L6 18M6 6l12 12"></path>
    </svg>
  )
})
