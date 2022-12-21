import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { ThemeProvider } from 'next-themes'
import { darkTheme } from '../../stitches.config'
import { rtlCache } from '../../rtl-cache'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      value={{
        light: 'light',
        dark: darkTheme.className,
      }}
    >
      <MantineProvider withNormalizeCSS emotionCache={rtlCache}>
        <Component {...pageProps} />
      </MantineProvider>
    </ThemeProvider>
  )
}

export default MyApp
