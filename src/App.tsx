import { ThemeProvider } from "styled-components";
import { DefaultThemes } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./routes/Router";

export function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultThemes}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}


