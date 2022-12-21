import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { ThemeProvider } from 'next-themes'
import { darkTheme } from '../../stitches.config'

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
      <MantineProvider withNormalizeCSS>
        <Component {...pageProps} />
      </MantineProvider>
    </ThemeProvider>
  )
}

export default MyApp
