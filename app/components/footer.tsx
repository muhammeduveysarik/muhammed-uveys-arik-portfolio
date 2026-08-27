'use client'

import { useEffect, useState } from 'react'

type Language = 'en' | 'tr'

const content = {
  en: {
    rights: 'All rights reserved.',
    backToTop: 'BACK TO TOP',
    navigation: 'NAVIGATION',
    about: 'About',
    education: 'Education',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },

  tr: {
    rights: 'Tüm hakları saklıdır.',
    backToTop: 'YUKARI DÖN',
    navigation: 'NAVİGASYON',
    about: 'Hakkımda',
    education: 'Eğitim',
    skills: 'Yetenekler',
    projects: 'Projeler',
    contact: 'İletişim',
  },
}

export default function Footer() {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language')

    if (savedLanguage === 'en' || savedLanguage === 'tr') {
      setLanguage(savedLanguage)
    }

    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<Language>
      setLanguage(customEvent.detail)
    }

    window.addEventListener('languageChange', handleLanguageChange)

    return () => {
      window.removeEventListener(
        'languageChange',
        handleLanguageChange
      )
    }
  }, [])

  const text = content[language]

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <footer className="relative border-t border-white/[0.08] bg-[hsl(var(--background))]">

      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14">

        {/* TOP */}

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">

          {/* NAME */}

          <div>
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
              className="group text-left"
            >
              <p className="text-2xl font-semibold tracking-[-0.03em] text-white/90 transition-colors group-hover:text-white sm:text-3xl">
                Muhammed Üveys Arık
              </p>

              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/35">
                Computer Engineering Student
              </p>
            </button>
          </div>

          {/* NAVIGATION */}

          <div>
            <p className="mb-5 font-mono text-[9px] tracking-[0.28em] text-white/25">
              {text.navigation}
            </p>

            <div className="flex flex-col items-start gap-3">

              <button
                onClick={() => scrollTo('#about')}
                className="text-sm text-white/45 transition-colors hover:text-white"
              >
                {text.about}
              </button>

              <button
                onClick={() => scrollTo('#education')}
                className="text-sm text-white/45 transition-colors hover:text-white"
              >
                {text.education}
              </button>

              <button
                onClick={() => scrollTo('#skills')}
                className="text-sm text-white/45 transition-colors hover:text-white"
              >
                {text.skills}
              </button>

              <button
                onClick={() => scrollTo('#projects')}
                className="text-sm text-white/45 transition-colors hover:text-white"
              >
                {text.projects}
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="text-sm text-white/45 transition-colors hover:text-white"
              >
                {text.contact}
              </button>

            </div>
          </div>

          {/* SOCIAL */}

          <div>
            <p className="mb-5 font-mono text-[9px] tracking-[0.28em] text-white/25">
              SOCIAL
            </p>

            <div className="flex flex-col items-start gap-3">

              <a
                href="https://github.com/muhammeduveysarik"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white"
              >
                GitHub

                <span className="text-white/25 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/muveys/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white"
              >
                LinkedIn

                <span className="text-white/25 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>

            </div>
          </div>

        </div>

        {/* DIVIDER */}

        <div className="my-12 h-px bg-white/[0.08]" />

        {/* BOTTOM */}

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-white/30">
            © 2026 Muhammed Üveys Arık. {text.rights}
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
            className="group flex items-center gap-3 font-mono text-[9px] tracking-[0.22em] text-white/30 transition-colors hover:text-white"
          >
            {text.backToTop}

            <span className="text-base transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </button>

        </div>

      </div>
    </footer>
  )
}
