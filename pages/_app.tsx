import "@expo/styleguide/dist/expo-colors.css"
import { ThemeProvider } from "@expo/styleguide"

import "../styles/globals.scss"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
