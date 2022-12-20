import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { styled } from '../../stitches.config'

import { AboutMe } from '../Components/AboutMe'
import { Header } from '../Components/Header'
import { MyHistory } from '../Components/MyHistory'
import { Projects } from '../Components/Projects'
import { Techs } from '../Components/Techs'

const Container = styled('div', {
  minHeight: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'scroll',
})

const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 72,
})

export default function Home() {
  const [currentSection, setCurrentSection] = useState('aboutMe')

  const { ref: aboutMeRef, inView: isAboutMeIntersecting } = useInView({
    threshold: 0.1,
  })
  const { ref: _aboutMeRef, inView: isAboutMeFullyIntersecting } = useInView({
    threshold: 1,
  })
  const { ref: myHistoryRef, inView: isMyHistoryIntersecting } = useInView({
    threshold: 0.1,
  })
  const { ref: projectsRef, inView: isProjectsIntersecting } = useInView({
    threshold: 0.1,
  })
  const { ref: techsRef, inView: isTechsIntersecting } = useInView({
    threshold: 0.1,
  })

  useEffect(() => {
    setCurrentSection((state) => {
      if (isMyHistoryIntersecting && !isAboutMeIntersecting) {
        if (state === 'projects' && isProjectsIntersecting) return 'projects'
        return 'myHistory'
      }

      if (isProjectsIntersecting && !isMyHistoryIntersecting) {
        if (state === 'techs' && isTechsIntersecting) return 'techs'
        return 'projects'
      }

      if (isTechsIntersecting && !isProjectsIntersecting) {
        return 'techs'
      }

      if (state === 'myHistory' && !isAboutMeFullyIntersecting)
        return 'myHistory'

      return 'aboutMe'
    })
  }, [
    isAboutMeIntersecting,
    isMyHistoryIntersecting,
    isProjectsIntersecting,
    isTechsIntersecting,
    isAboutMeFullyIntersecting,
  ])

  console.log(currentSection)

  return (
    <Container>
      <Header currentSection={currentSection} />
      <Main>
        <div ref={aboutMeRef}>
          <div ref={_aboutMeRef}>
            <AboutMe />
          </div>
        </div>

        <div ref={myHistoryRef}>
          <MyHistory />
        </div>

        <div ref={projectsRef}>
          <Projects />
        </div>

        <div ref={techsRef}>
          <Techs />
        </div>
      </Main>
    </Container>
  )
}
