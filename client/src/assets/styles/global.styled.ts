import { createGlobalStyle } from 'styled-components'

import { colors, font } from './variables'

export const GlobalStyle = createGlobalStyle`
html {
    min-height: 100%;
}

body {
    font-family: ${font.family};
    background-image: linear-gradient(169deg, ${colors.color1} 16.12%, ${colors.color2} 35.52%);
}

::-webkit-scrollbar {
    width: 10px;
    max-height: 10px;
    background-color: ${colors.color1};
}

::-webkit-scrollbar-corner {
    background-color: ${colors.color2};
}

::-webkit-scrollbar-thumb {
    border-radius: 1px;
    background-color: ${colors.color3};
}

@keyframes check-01 {
  0% {
    width: 4px;
    transform: rotate(0);
  }
  50% {
    width: 0px;
    transform: rotate(0);
  }
  51% {
    width: 0px;
    transform: rotate(45deg);
  }
  100% {
    width: 6px;
    transform: rotate(45deg);
  }
}

@keyframes check-02 {
  0% {
    width: 4px;
    transform: rotate(0);
  }
  50% {
    width: 0px;
    transform: rotate(0);
  }
  51% {
    width: 0;
    transform: rotate(-50deg);
  }
  100% {
    width:12px;
    transform: rotate(-50deg);
  }
}

@keyframes firework {
  0% {
    opacity: 1;
    box-shadow: 0 0 0 -2px ${colors.accent}, 0 0 0 -2px ${colors.accent}, 0 0 0 -2px ${colors.accent}, 0 0 0 -2px ${colors.accent}, 0 0 0 -2px ${colors.accent}, 0 0 0 -2px ${colors.accent};
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    box-shadow: 0 -15px 0 0px ${colors.accent}, 14px -8px 0 0px ${colors.accent}, 14px 8px 0 0px ${colors.accent}, 0 15px 0 0px ${colors.accent}, -14px 8px 0 0px ${colors.accent}, -14px -8px 0 0px ${colors.accent};
  }
}

@keyframes opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`
