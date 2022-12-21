import { Section, SectionHeading } from '../Section'
import * as S from './styles'

import { data } from '../../data'
import { useRouter } from 'next/router'
import { Locale } from '../../types'

export const Techs = () => {
  const { locale } = useRouter()

  const techsData = data.techs[locale as Locale]

  return (
    <Section background="light" id="techs">
      <S.TechsContainer>
        <SectionHeading>{techsData.title}</SectionHeading>
        <S.TechHeading>
          <img src="react.svg" alt="React" />
          <strong>React</strong>
        </S.TechHeading>
        <S.TechText>{techsData.react}</S.TechText>

        <S.TechHeading>
          <img src="nodejs.svg" alt="Node" />
          <strong>Node</strong>
        </S.TechHeading>
        <S.TechText>{techsData.node}</S.TechText>

        <S.TechHeading>
          <img src="react-native.svg" alt="React Native" />
          <strong>React Native</strong>
        </S.TechHeading>
        <S.TechText>{techsData.reactNative}</S.TechText>
      </S.TechsContainer>
    </Section>
  )
}
