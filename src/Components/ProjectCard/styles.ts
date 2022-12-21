import { styled } from '../../../stitches.config'

import { motion } from 'framer-motion'

export const ProjectCardContainer = styled(motion.section, {
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 16,
  width: '100%',
  height: 320,
  background: '$mauve3',
  transition: '0.2s',
  overflow: 'hidden',
  cursor: 'pointer',
  position: 'relative',

  '&:hover': {
    background: '$mauve4',
  },
})

export const ImageContainer = styled('div', {
  position: 'relative',
  height: '50%',
  width: '100%',

  img: {
    objectFit: 'cover',
  },
})

export const ProjectCardBody = styled('div', {
  padding: 16,
  display: 'flex',
  flexDirection: 'column',

  strong: {
    fontSize: 18,
    whiteSpace: 'initial',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    maxHeight: 40,
  },
})

export const ProjectCardFooter = styled('footer', {
  marginTop: 'auto',
  width: '100%',
  height: 64,
  borderTop: '1px solid $mauve6',
  display: 'flex',
  alignItems: 'center',
  padding: 16,

  div: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    gap: 16,

    a: {
      color: 'inherit',
      lineHeight: 0,
    },
  },
})
