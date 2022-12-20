import { styled } from '../../../stitches.config'

export const TechsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const TechHeading = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  marginBottom: 24,

  img: {
    height: 36,
    width: 36,
  },

  strong: {
    fontSize: 24,
  },
})

export const TechText = styled('p', {
  maxWidth: 640,
  color: '$mauve11',
  marginBottom: 48,
})
