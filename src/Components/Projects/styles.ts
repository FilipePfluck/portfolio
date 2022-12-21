import { styled } from '../../../stitches.config'

import { Modal } from '@mantine/core'
import { Carousel } from '@mantine/carousel'

export const ProjectsContainer = styled('div', {})

export const ProjectsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: 16,

  '@medium': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },

  '@small': {
    gridTemplateColumns: '1fr 1fr',
  },

  '@mobile': {
    gridTemplateColumns: '1fr',
  },
})

export const ProjectModal = styled(Modal, {
  '.mantine-Modal-modal': {
    background: '$mauve3',
    width: 660,
    borderRadius: 16,
    overflow: 'hidden',
  },

  '.mantine-Modal-title': {
    color: '$mauve12',
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 360,
  },

  img: {
    maxHeight: 360,
    width: 660,
    objectFit: 'scale-down',
  },

  p: {
    color: '$mauve11',
    lineHeight: 1.6,
  },
})

export const ImagesCarousel = styled(Carousel, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: 660,
  backgroundColor: '$mauve1',
})

export const SectionDescription = styled('p', {
  fontSize: 20,
  lineHeight: 1.6,
  color: '$mauve11',
  marginTop: 24,

  a: {
    marginLeft: 8,
    color: '$mauve12',
  },
})
