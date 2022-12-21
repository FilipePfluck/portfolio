import { useState } from 'react'
import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel'

import { ProjectCard } from '../ProjectCard'
import { Section, SectionHeading } from '../Section'
import * as S from './styles'

import { data } from '../../data'
import { useRouter } from 'next/router'
import { Locale } from '../../types'

export const Projects = () => {
  const { locale } = useRouter()

  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [embla, setEmbla] = useState<Embla | null>(null)

  const transitionDuration = 200

  useAnimationOffsetEffect(embla, transitionDuration)

  const projects = data.projects[locale as Locale]

  const selectedProject = selectedId ? projects[selectedId - 1] : null
  const projectsDescription =
    data.projectDescription[locale as Locale].description

  return (
    <Section id="projects">
      <S.ProjectsContainer>
        <SectionHeading>Projetos</SectionHeading>

        <S.ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              onClick={() => setSelectedId(project.id)}
              githubUrl={project.github_url}
              imageUrl={project.images[0]}
              name={project.name}
            />
          ))}
        </S.ProjectsGrid>
        <S.SectionDescription>
          {projectsDescription}
          <a
            href="https://github.com/FilipePfluck?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </S.SectionDescription>
      </S.ProjectsContainer>

      <S.ProjectModal
        withCloseButton={false}
        opened={!!selectedId}
        onClose={() => setSelectedId(null)}
        title={selectedProject?.name}
        centered
        transitionDuration={transitionDuration}
      >
        {
          // This validation is to prevent an error in Mantine Carousel from happening
          // when the modal is closed
        }
        {!!selectedId && (
          <S.ImagesCarousel
            loop
            getEmblaApi={setEmbla}
            withControls={
              selectedProject ? selectedProject?.images.length >= 2 : false
            }
          >
            {selectedProject?.images.map((src) => (
              <Carousel.Slide key={selectedProject?.id}>
                <img src={src} alt={selectedProject?.name} />
              </Carousel.Slide>
            ))}
          </S.ImagesCarousel>
        )}
        <p>{selectedProject?.description}</p>
      </S.ProjectModal>
    </Section>
  )
}
