import { DiscordButton } from '../DiscordButton'
import { Section } from '../Section'

import { data } from '../../data'

import * as S from './styles'
import { useRouter } from 'next/router'
import { Locale } from '../../types'

export const AboutMe = () => {
  const { locale, defaultLocale } = useRouter()

  const texts = data.aboutMe[locale as Locale]

  console.log({ locale, defaultLocale })

  return (
    <Section id="aboutMe">
      <div>
        <S.AboutMeHeader>
          <img
            src="https://avatars.githubusercontent.com/u/62773200?v=4"
            alt="Filipe Pfluck"
          />
          <div>
            <h1>Filipe Pfluck</h1>
            <h2>{texts.subtitle}</h2>
          </div>
        </S.AboutMeHeader>
        <S.AboutMeText>{texts.text}</S.AboutMeText>
        <S.DiscordContainer>
          <p>{texts.discordText}</p>
          <DiscordButton />
        </S.DiscordContainer>
      </div>
    </Section>
  )
}
