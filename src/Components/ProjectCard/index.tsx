import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

import * as S from './styles'

interface PropCards {
  id: number
  onClick: () => void
  name: string
  imageUrl: string
  githubUrl?: string
  prodUrl?: string
}

export const ProjectCard = ({
  id,
  onClick,
  githubUrl,
  prodUrl,
  imageUrl,
  name,
}: PropCards) => {
  return (
    <>
      <S.ProjectCardContainer
        layout
        layoutId={`project-container-${id}`}
        onClick={onClick}
      >
        <S.ImageContainer>
          <Image fill src={imageUrl} alt={name} />
        </S.ImageContainer>
        <S.ProjectCardBody>
          <strong>{name}</strong>
        </S.ProjectCardBody>
        <S.ProjectCardFooter>
          <div>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub size={20} />
            </a>

            {prodUrl && (
              <a
                href={prodUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt size={20} />
              </a>
            )}
          </div>
        </S.ProjectCardFooter>
      </S.ProjectCardContainer>
    </>
  )
}
