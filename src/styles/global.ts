import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme['gray-800']};
        color: ${(props) => props.theme['white']};
        font-family: 'Roboto Mono', monospace;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }
`