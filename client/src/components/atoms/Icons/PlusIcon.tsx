import { FC, memo } from 'react'

interface PlusIconProps {
  size: string
}

export const PlusIcon: FC<PlusIconProps> = memo(({ size }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M4 12H20M12 4V20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  )
})
