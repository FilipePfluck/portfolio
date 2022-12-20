import { Timeline } from '@mantine/core'

import { Section, SectionHeading } from '../Section'
import { TimelineItem } from '../Timeline'

import * as S from './styles'

export const MyHistory = () => {
  return (
    <Section background="light" id="myHistory">
      <S.MyHistoryContainer>
        <SectionHeading>Minha História</SectionHeading>

        <Timeline active={5} color="violet">
          <TimelineItem
            title="2019 - 2021 · Instituto Ivoti"
            text="Eu fiz o Ensino Médio e um curso técnico de tecnologia da informação no Instituto Ivoti. Foi no técnico que eu aprendi o báscio de programação em algumas linguagens como C, Java e PHP. Também aprendi o básico de HTML, CSS, e SQL. Além da programação, tive aulas sobre hardware, redes e ferramentas gráficas."
          />
          <TimelineItem
            title="2020 - atualmente · Rocketseat "
            text="Durante o curso técnico, eu senti que meus aprendizados não estavam sendo suficientes, e queria ir além. Foi quando eu descobri a rocketseat. Participei de diversos eventos organizados por ele, como as Semanas Omnistack, as NLWs, e o DoWhile. Também me matriculei no GoStack, bootcamp onde me aprofundei em Node, React e React Native. Após o término do GoStack, conclui a trilha de React do Ignite, e atualmente estou assistindo as aulas da nova trilha de React que está sendo regravada."
          />
          <TimelineItem
            title="2020 - 2021 · Hackatons"
            text="Eu participei do Megahack 3, organizado pela Shawee, e do Hackstation, organizado pela Rocketseat. Nesses Hackatons, tive a oportunidade de conhecer pessoas novas, melhorei meu trabalho em equipe, e tive a experiência de pensar em uma ideia e desenvolver ela em um  curto período de tempo. Eu diria que meu maior aprendizado nos Hackatons foi a importância de um escopo."
          />
          <TimelineItem
            title="2021 - 2022 · Vobi"
            text="Minha primeira oportunidade de emprego foi na Vobi, uma Startup que desenvolve software para gestão de escritórios de design e arquitetura. Eu comecei como estagiário e posteriormente fui efetivado. Na vobi, trabalhei com React no frontend e Node no backend. Meu principal aprendizado na vobi foi descobrir como é o ambiente de trabalho: aprendi a lidar com as pessoas do time, aprendi sobre a metodologia de trabalho ágil, aprendi a receber demandas e lidar com prazos. Também melhorei muito as minhas habilidades com o Git."
          />
          <TimelineItem
            title="2022 - atualmente · Pato Academy"
            text="Estou matriculado no curso de segurança da informação do Gabriel Pato. Meu objetivo com isso é meramente aprimorar meus conhecimentos de informática, e poder desenvolver aplicações cada vez mais seguras. "
          />
          <TimelineItem
            title="2022 · Hacktoberfest "
            text="Em 2022 eu participei do Hacktoberfest, onde tive meu primeiro contato com contribuições em projetos open source. Fiz as 4 PRs necessárias, e achei uma experiência incrível. "
          />
        </Timeline>
      </S.MyHistoryContainer>
    </Section>
  )
}
