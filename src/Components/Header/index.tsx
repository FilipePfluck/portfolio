import { useTheme } from 'next-themes'
import { FaLinkedin, FaGithub, FaTwitch, FaSun, FaMoon } from 'react-icons/fa'

import * as S from './styles'

import { data } from '../../data'
import { useRouter } from 'next/router'
import { Locale } from '../../types'
import { useEffect, useState } from 'react'

interface HeaderProps {
  currentSection: string
}

export const Header = ({ currentSection }: HeaderProps) => {
  const { locale, push } = useRouter()
  const { theme, setTheme } = useTheme()

  const [firstLanguage] = useState<string>(locale as Locale)
  const [isInBrowser, setIsInBrowser] = useState(false)

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  const headerData = data.header[locale as Locale]

  const changeLanguage = (value: string) => {
    if (value === '🇧🇷 pt-BR') {
      push('/', '/', { locale: 'pt-BR' })
    } else {
      push('/', '/', { locale: 'en' })
    }
  }

  useEffect(() => {
    setIsInBrowser(true)
  }, [])

  return (
    <S.HeaderContainer>
      <div>
        <S.Nav>
          <S.Link href="#aboutMe" isSelected={currentSection === 'aboutMe'}>
            {headerData.aboutMe}
            {currentSection === 'aboutMe' && (
              <S.CurrentSectionIndicator
                layout
                layoutId="underline"
                transition={{ duration: 0.2 }}
              />
            )}
          </S.Link>
          <S.Link href="#myHistory" isSelected={currentSection === 'myHistory'}>
            {headerData.myHistory}
            {currentSection === 'myHistory' && (
              <S.CurrentSectionIndicator
                layout
                layoutId="underline"
                transition={{ duration: 0.2 }}
              />
            )}
          </S.Link>
          <S.Link href="#projects" isSelected={currentSection === 'projects'}>
            {headerData.projects}
            {currentSection === 'projects' && (
              <S.CurrentSectionIndicator
                layout
                layoutId="underline"
                transition={{ duration: 0.2 }}
              />
            )}
          </S.Link>
          <S.Link href="#techs" isSelected={currentSection === 'techs'}>
            {headerData.techs}
            {currentSection === 'techs' && (
              <S.CurrentSectionIndicator
                layout
                layoutId="underline"
                transition={{ duration: 0.2 }}
              />
            )}
          </S.Link>
        </S.Nav>

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

          <div>
            <S.LanguageSelect
              data={['🇧🇷 pt-BR', '🇺🇸 en-US']}
              defaultValue={firstLanguage === 'pt-BR' ? '🇧🇷 pt-BR' : '🇺🇸 en-US'}
              onChange={changeLanguage}
            />

            <S.ThemeSwitch
              onChange={toggleTheme}
              color="violet"
              thumbIcon={
                theme === 'light' ? <FaSun size={12} /> : <FaMoon size={12} />
              }
            />
          </div>
        </S.RightContent>
      </div>
    </S.HeaderContainer>
  )
}
