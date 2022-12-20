import { useTheme } from 'next-themes'
import { useViewportSize } from '@mantine/hooks'
import { FaLinkedin, FaGithub, FaTwitch, FaSun, FaMoon } from 'react-icons/fa'

import * as S from './styles'

interface HeaderProps {
  currentSection: string
}

export const Header = ({ currentSection }: HeaderProps) => {
  const { theme, setTheme } = useTheme()

  const { width } = useViewportSize()

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <S.HeaderContainer>
      <div>
        {width > 460 && (
          <S.Nav>
            <S.Link href="#aboutMe" isSelected={currentSection === 'aboutMe'}>
              Sobre mim
              {currentSection === 'aboutMe' && (
                <S.CurrentSectionIndicator
                  layout
                  layoutId="underline"
                  transition={{ duration: 0.2 }}
                />
              )}
            </S.Link>
            <S.Link
              href="#myHistory"
              isSelected={currentSection === 'myHistory'}
            >
              Minha história
              {currentSection === 'myHistory' && (
                <S.CurrentSectionIndicator
                  layout
                  layoutId="underline"
                  transition={{ duration: 0.2 }}
                />
              )}
            </S.Link>
            <S.Link href="#projects" isSelected={currentSection === 'projects'}>
              Projetos
              {currentSection === 'projects' && (
                <S.CurrentSectionIndicator
                  layout
                  layoutId="underline"
                  transition={{ duration: 0.2 }}
                />
              )}
            </S.Link>
            <S.Link href="#techs" isSelected={currentSection === 'techs'}>
              Tecnologias
              {currentSection === 'techs' && (
                <S.CurrentSectionIndicator
                  layout
                  layoutId="underline"
                  transition={{ duration: 0.2 }}
                />
              )}
            </S.Link>
          </S.Nav>
        )}
        <S.RightContent>
          <a
            href="https://www.linkedin.com/in/filipe-hebestreit-pfluck-9389a31a6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/FilipePfluck"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.twitch.tv/filipepfluck"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitch />
          </a>

          <S.ThemeSwitch
            onChange={toggleTheme}
            color="violet"
            thumbIcon={
              theme === 'light' ? <FaSun size={12} /> : <FaMoon size={12} />
            }
          />
        </S.RightContent>
      </div>
    </S.HeaderContainer>
  )
}
