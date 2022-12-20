import { Timeline as MantineTimeline, TimelineItemProps } from '@mantine/core'

import * as S from './styles'

interface Props extends TimelineItemProps {
  text?: string
}

export const TimelineItem = ({ text, title, ...props }: Props) => {
  return (
    <MantineTimeline.Item {...props}>
      <S.TimelineItemContainer>
        <S.TimelineTitle>{title}</S.TimelineTitle>
        <S.TimeLineText>{text}</S.TimeLineText>
      </S.TimelineItemContainer>
    </MantineTimeline.Item>
  )
}
