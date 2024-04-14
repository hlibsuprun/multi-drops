import { FC, memo } from 'react'

interface HamburgerIconProps {
  size: string
}

export const HamburgerIcon: FC<HamburgerIconProps> = memo(({ size }) => {
  return (
    <svg height={size} width={size} fill="white" viewBox="0 0 20 14">
      <path d="M5 1C5 0.447734 5.44773 0 6 0H19C19.5523 0 20 0.447734 20 1C20 1.55227 19.5523 2 19 2H6C5.44773 2 5 1.55223 5 1ZM19 6H1C0.447734 6 0 6.44777 0 7C0 7.55226 0.447734 8 1 8H19C19.5523 8 20 7.55226 20 7C20 6.44777 19.5523 6 19 6ZM19 12H10C9.44777 12 9 12.4477 9 13C9 13.5522 9.44777 14 10 14H19C19.5523 14 20 13.5522 20 13C20 12.4477 19.5523 12 19 12Z"></path>
    </svg>
  )
})
