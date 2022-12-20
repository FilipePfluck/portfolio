import { Section, SectionHeading } from '../Section'
import * as S from './styles'

export const Techs = () => {
  return (
    <Section background="light" id="techs">
      <S.TechsContainer>
        <SectionHeading>Tecnologias</SectionHeading>
        <S.TechHeading>
          <img src="react.svg" alt="React" />
          <strong>React</strong>
        </S.TechHeading>
        <S.TechText>
          React é uma biblioteca para desenvolvimento de interfaces reativas. É
          a tecnologia em que tenho mais domínio, e a que mais utilizei no
          último ano. Sei desenvolver interfaces completas e componentizadas,
          fazer requisições http, gerenciar estados, criar e utilizar hooks.
          Também tenho conhecimento sobre o fluxo de renderização do React e sei
          evitar certos erros que ocasionam rerenders de mais. Também tenho
          domínio em Next, um framework para utilizar em cima do React. Ele
          permite a utilização de SSR e SSG no React, e resolve problemas como
          SEO. Além disso, tenho alguma experiência com diversas ferramentas do
          ecossistema, como Styled Components, Stitches, Radix, Mantine, Framer
          Motion, React Hook Form, React Query, dentre outras.
        </S.TechText>

        <S.TechHeading>
          <img src="nodejs.svg" alt="Node" />
          <strong>Node</strong>
        </S.TechHeading>
        <S.TechText>
          Node é uma plataforma de exedcução de código javascript fora do
          navegador. Através dele, eu consigo desenvolver APIs REST em
          typescript, utilizando o Express. Sei lidar com bancos de dados
          utilizando ORMs como TypeORM, Prisma e Sequelize. Tenho alguns
          conhecimentos de arquitetura de software, como DDD e alguns princípios
          do SOLID. Sei escrever testes automatizados. Já tive um pouco de
          contato com Nest, GraphQL e Kafka. Embora eu seja capaz e não me
          importe de atuar como fullstack, hoje eu tenho um pouco de preferência
          pelo frontend.
        </S.TechText>

        <S.TechHeading>
          <img src="react-native.svg" alt="React Native" />
          <strong>React Native</strong>
        </S.TechHeading>
        <S.TechText>
          React Native é uma tecnologia que serve para desenvolver código para
          aplicativos tanto para Android como para IOS, com uma sintaxe muito
          semelhante a do React. Eu consigo criar aplicativos com React Native,
          mas considero minha experiência com essa tecnologia inferior a que eu
          tenho com as outras.
        </S.TechText>
      </S.TechsContainer>
    </Section>
  )
}
