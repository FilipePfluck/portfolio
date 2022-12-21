import { Timeline } from '@mantine/core'
import { useRouter } from 'next/router'

import { Section, SectionHeading } from '../Section'
import { TimelineItem } from '../Timeline'

import { data } from '../../data'

import * as S from './styles'
import { Locale } from '../../types'

export const MyHistory = () => {
  const { locale } = useRouter()

  const myHistoryData = data.myHistory[locale as Locale]

  const timeLineItems = myHistoryData.timelineItems

  return (
    <Section background="light" id="myHistory">
      <S.MyHistoryContainer>
        <SectionHeading>{myHistoryData.sectionTitle}</SectionHeading>

        <Timeline active={5} color="violet">
          {timeLineItems.map((item) => (
            <TimelineItem
              key={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Timeline>
      </S.MyHistoryContainer>
    </Section>
  )
}
