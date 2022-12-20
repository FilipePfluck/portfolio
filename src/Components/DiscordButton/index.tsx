import { FaDiscord } from 'react-icons/fa'
import { useClipboard } from '@mantine/hooks'

import * as S from './styles'

export const DiscordButton = () => {
  const clipboard = useClipboard({ timeout: 700 })

  return (
    <S.ButtonContainer
      onClick={() => clipboard.copy('Pfluck#3427')}
      color={clipboard.copied ? 'green' : 'default'}
    >
      <FaDiscord size={20} />
      <p>{clipboard.copied ? 'Copiado!' : 'Discord'}</p>
    </S.ButtonContainer>
  )
}
