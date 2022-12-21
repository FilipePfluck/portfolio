import { useRouter } from 'next/router'
import { FaDiscord } from 'react-icons/fa'
import { useClipboard } from '@mantine/hooks'

import { data } from '../../data'
import { Locale } from '../../types'

import * as S from './styles'

export const DiscordButton = () => {
  const { locale } = useRouter()

  const clipboard = useClipboard({ timeout: 700 })

  const buttonText = data.discordButton[locale as Locale].copy

  return (
    <S.ButtonContainer
      onClick={() => clipboard.copy('Pfluck#3427')}
      color={clipboard.copied ? 'green' : 'default'}
    >
      <FaDiscord size={20} />
      <p>{clipboard.copied ? buttonText : 'Discord'}</p>
    </S.ButtonContainer>
  )
}
