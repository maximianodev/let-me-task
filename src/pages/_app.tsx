// Config
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/Themes/default"
import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
