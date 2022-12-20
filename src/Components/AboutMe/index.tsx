import { DiscordButton } from '../DiscordButton'
import { Section } from '../Section'

import * as S from './styles'

export const AboutMe = () => {
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
            <h2>Desenvolvedor Web</h2>
          </div>
        </S.AboutMeHeader>
        <S.AboutMeText>
          Tenho 19 anos e moro em Ivoti - RS. Sou um desenvolvedor focado em
          Typescript, Node, React e React Native. Mas estou sempre buscando
          aprender coisas novas, e não me importo em aprender outras linguagens.
          Na verdade, tenho bastante interesse em Python, Go, Rust e Elixir,
          quem sabe eu aprenda uma dessas no futuro. Além da programação de
          aplicações web, eu tenho uma leve admiração por ciência de dados e
          desenvolvimento de jogos, mas não está no meu foco de estudo por
          enquanto. Sou uma pessoa muito lógica e consigo aprender muito rápido.
        </S.AboutMeText>
        <S.DiscordContainer>
          <p>Quer conversar comigo? Me chama no discord</p>
          <DiscordButton />
        </S.DiscordContainer>
      </div>
    </Section>
  )
}
