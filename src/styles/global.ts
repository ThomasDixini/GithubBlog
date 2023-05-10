import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:focus {
    outline: 2px solid ${props => props.theme['blue']};
}

html {
    @media(max-width:1200px){
        font-size: 93.75%;
    }
    @media(max-width:800){
        font-size: 87.5%;
    }
}

body {
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6;
    background-color: ${props => props.theme['base-background']};
    color: ${props => props.theme['base-text']};
}

textarea, input, strong, button {
    font-family: "Nunito", sans-serif;
}

button {
    cursor: pointer;
}

[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
}
`