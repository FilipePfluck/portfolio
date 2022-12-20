import { styled } from '../../../stitches.config'

export const ButtonContainer = styled('button', {
  width: 420,
  gap: 12,
  borderRadius: 16,
  color: '#FFF',
  fontWeight: 'bold',
  display: 'flex',
  align: 'center',
  justify: 'center',
  padding: '12px 16px',
  border: 0,
  transition: '0.2s',

  '&:hover': {
    filter: 'brightness(0.8)',
  },

  p: {
    width: 80,
  },

  variants: {
    color: {
      default: {
        backgroundColor: '$discord',
      },

      green: {
        backgroundColor: '$green',
      },
    },
  },

  defaultVariants: {
    color: 'default',
  },
})
