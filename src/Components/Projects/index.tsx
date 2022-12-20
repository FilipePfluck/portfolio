import { useState } from 'react'
import { ProjectCard } from '../ProjectCard'
import { Section, SectionHeading } from '../Section'
import * as S from './styles'

import { data } from '../../data'

export const Projects = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const selectedProject = selectedId ? data.projects[selectedId - 1] : null

  return (
    <Section id="projects">
      <S.ProjectsContainer>
        <SectionHeading>Projetos</SectionHeading>

        <S.ProjectsGrid>
          {data.projects.map((project) => (
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
          Eses são só alguns dos meus projetos. Quer ver todos? Eles estão no
          meu
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
      >
        <S.ImagesCarousel loop>
          {selectedProject?.images.map((src) => (
            <img
              src={src}
              key={selectedProject?.id}
              alt={selectedProject?.name}
            />
          ))}
        </S.ImagesCarousel>
        <p>{selectedProject?.description}</p>
      </S.ProjectModal>
    </Section>
  )
}
