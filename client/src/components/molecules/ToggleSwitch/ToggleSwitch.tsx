import { FC, createRef, memo, useEffect, useState } from 'react'

import { StyledToggleSwitchActiveButton, StyledToggleSwitch } from './ToggleSwitch.styled'

import { ToggleSwitchButton } from '@components/atoms/Buttons/ToggleSwitchButton/ToggleSwitchButton'

interface ToggleSwitchProps {
  values: string[]
  selectedValue: string
  onClick: (value: string) => void
}

export const ToggleSwitch: FC<ToggleSwitchProps> = memo(({ values, selectedValue, onClick }) => {
  const [offset, setOffset] = useState<number>(0)
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const activeButtonRef = createRef<HTMLButtonElement>()
  const inactiveButtonRef = createRef<HTMLButtonElement>()

  useEffect(() => {
    const activeButtonElement: HTMLButtonElement | null = activeButtonRef.current

    setTimeout(() => {
      if (activeButtonElement) {
        setOffset(activeButtonElement.offsetLeft)
        setWidth(activeButtonElement.clientWidth)
        setHeight(activeButtonElement.clientHeight)
        console.log(activeButtonElement.clientWidth)
      }
    }, 100)
  }, [activeButtonRef])

  return (
    <StyledToggleSwitch>
      {values.map((value) => (
        <ToggleSwitchButton
          key={value}
          ref={selectedValue === value ? activeButtonRef : inactiveButtonRef}
          onClick={() => onClick(value)}
          value={value}
          selectedValue={selectedValue}
        />
      ))}
      <StyledToggleSwitchActiveButton $width={width} $height={height} $offset={offset} />
    </StyledToggleSwitch>
  )
})
