import { styled } from '../../../stitches.config'
import { Switch, Select } from '@mantine/core'
import { motion } from 'framer-motion'

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$mauve3',
  height: 72,
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  zIndex: 4,

  '>div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 1000,
    margin: '0 auto',
    height: '100%',

    '@small': {
      justify: 'space-between',
    },
  },

  '@medium': {
    padding: '0 24px',
  },
})

export const Nav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  gap: 32,
  height: '100%',

  '@small': {
    display: 'none',
  },
})

export const Link = styled('a', {
  fontSize: 18,
  color: '$mauve12',
  transition: '0.2s',
  height: '100%',
  width: 120,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  '@medium': {
    width: 'auto',
  },

  variants: {
    isSelected: {
      true: {
        color: '$violet11',
      },
    },
  },
})

export const CurrentSectionIndicator = styled(motion.div, {
  position: 'absolute',
  bottom: 0,
  right: 0,
  left: 0,
  height: 2,
  backgroundColor: '$violet11',
})

export const RightContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 0,
  gap: 12,

  '>div': {
    display: 'flex',
    gap: 12,

    '@small': {
      marginLeft: 'auto',
    },
  },

  a: {
    color: '$mauve12',
    lineHeight: 0,
  },

  svg: {
    height: 18,
    width: 18,
    color: '$mauve12',
  },

  '@mobile': {
    justifyContent: 'center',
    margin: '0 16px',
    ':last-child': {
      marginLeft: 'auto',
    },
  },

  '@small': {
    wodth: '100%',
  },
})

export const ThemeSwitch = styled(Switch, {
  '*': { cursor: 'pointer' },

  '.mantine-Switch-track': {
    padding: 12,
    width: 48,
    height: 24,
    backgroundColor: '$mauve5',
    border: '1px solid $mauve7',
  },

  '.mantine-Switch-thumb': {
    height: 18,
    width: 18,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    backgroundColor: '$mauve3',
    border: 0,

    svg: {
      height: 10,
      width: 10,
      color: '$mauve12',
    },
  },
})

export const LanguageSelect = styled(Select, {
  width: 120,

  '.mantine-Select-input, .mantine-Select-dropdown': {
    backgroundColor: '$mauve6',
    border: 0,

    '&:focus': {
      border: '$mauve8',
    },
  },

  '.mantine-Select-item': {
    backgroundColor: '$mauve6',

    '&:focus': {
      backgroundColor: '$mauve7',
    },

    '&:hover': {
      backgroundColor: '$mauve7',
    },
  },

  '*': {
    color: '$mauve12',
  },
})

export const LanguageSelectSkeleton = styled('div', {
  width: 120,
  height: 36,
  backgroundColor: '$mauve6',
  borderRadius: 8,
})

export const ThemeSwithcSkeleton = styled('div', {
  width: 48,
  height: 26,
  backgroundColor: '$mauve5',
  borderRadius: 16,
  margin: 'auto 0',
})
