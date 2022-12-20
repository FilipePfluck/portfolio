import { styled } from '../../../stitches.config'

export const AboutMeHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: 32,

  img: {
    height: 128,
    width: 128,
    borderRadius: 16,
    marginRight: 32,

    '@mobile': {
      height: 72,
      width: 72,
    },
  },

  '>div': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },

  h1: {
    fontSize: 48,

    '@mobile': {
      fontSize: 32,
    },
  },

  h2: {
    fontSize: 36,
    color: '$mauve11',

    '@mobile': {
      fontSize: 24,
    },
  },
})

export const AboutMeText = styled('p', {
  fontSize: 18,
  lineHeight: 1.6,
  maxWidth: 640,
  color: '$mauve11',
})

export const DiscordContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  marginTop: 32,

  p: {
    fontSize: 20,
    lineHeight: 1.6,
    maxWidth: 640,
    fontWeight: 'bold',
    color: '$mauve12',
  },
})
