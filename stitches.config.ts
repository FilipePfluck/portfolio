import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'

import { mauve, mauveDark, violet, violetDark } from '@radix-ui/colors'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      ...mauve,
      ...violet,
      discord: '#404EED',
      green: '#3BA55D',
    },
  },
  utils: {
    marginX: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    align: (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value,
    }),
    justify: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value,
    }),
  },
  media: {
    mobile: '(max-width: 460px)',
    small: '(max-width: 720px)',
    medium: '(max-width: 1000px)',
  },
})

export const darkTheme = createTheme({
  colors: {
    ...mauveDark,
    ...violetDark,
    discord: '#404EED',
    green: '#3BA55D',
  },
})

const GlobalStyles = globalCss({
  html: {
    scrollBehavior: 'smooth',
  },
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  body: {
    backgroundColor: '$mauve1',
    height: '100vh',
    width: '100vw',
    overflowX: 'hidden',
  },
  button: {
    cursor: 'pointer',
    border: 0,
    background: 'transparent',
  },
  'body, input, textarea, button': {
    fontFamily: 'Roboto',
  },
  a: {
    textDecoration: 'none',
  },
  'p, h1, h2, h3, h4, h5, h6, strong': {
    color: '$mauve12',
  },
  '::-webkit-scrollbar': {
    width: 12,
  },
  '::-webkit-scrollbar-track': {
    background: '$mauve3',
  },
  '::-webkit-scrollbar-thumb': {
    background: '$mauve6',
    borderRadius: 6,
  },
})

GlobalStyles()
