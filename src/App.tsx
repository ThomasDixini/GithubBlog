import { ThemeProvider } from "styled-components";
import { DefaultThemes } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <ThemeProvider theme={DefaultThemes}>
      <h1> SASFA </h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}


