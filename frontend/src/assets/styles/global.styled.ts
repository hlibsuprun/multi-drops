import { createGlobalStyle } from 'styled-components'

import { font } from './variables'

export const GlobalStyle = createGlobalStyle`
html {
    min-height: 100%;
}

body {
    font-family: ${font.family};
    background-image: linear-gradient(169deg, #1e1e20 16.12%, #0e0e11 35.52%);
}

::-webkit-scrollbar {
    width: 10px;
    max-height: 10px;
    background-color: #1e1e20;
}

::-webkit-scrollbar-corner {
    background-color: #0e0e11;
}

::-webkit-scrollbar-thumb {
    border-radius: 1px;
    background-color: #696969;
}
`
