import { styled } from '../../../stitches.config'

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  '>div': {
    width: '100%',
    maxWidth: 1032,
    margin: '0 auto',
    padding: '64px 16px',
    display: 'flex',
    flexDirection: 'column',
  },

  variants: {
    background: {
      light: {
        backgroundColor: '$mauve2',
      },
      dark: {
        backgroundColor: '$mauve1',
      },
    },
  },

  defaultVariants: {
    background: 'dark',
  },
})

export const SectionHeading = styled('h3', {
  fontSize: 32,
  marginBottom: 48,
  color: '$mauve12',
})
