import { ThemeProvider } from "styled-components";
import { DefaultThemes } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Profile } from "./pages/Profile/Profile";

export function App() {

  return (
    <ThemeProvider theme={DefaultThemes}>
      <Profile />
      <GlobalStyle />
    </ThemeProvider>
  )
}


