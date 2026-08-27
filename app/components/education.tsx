'use client'

import { useEffect, useState } from 'react'
import SectionWrapper from './section-wrapper'

type Language = 'en' | 'tr'

const content = {
  en: {
    heading: 'Education',
    university: 'Bilecik Şeyh Edebali University',
    degree: 'Bachelor of Science — Computer Engineering',
    status: 'Currently pursuing · Bilecik, Türkiye',
  },

  tr: {
    heading: 'Eğitim',
    university: 'Bilecik Şeyh Edebali Üniversitesi',
    degree: 'Lisans — Bilgisayar Mühendisliği',
    status: 'Öğrenim devam ediyor · Bilecik, Türkiye',
  },
}

export default function Education() {
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
      window.removeEventListener('languageChange', handleLanguageChange)
    }
  }, [])

  const text = content[language]

  return (
    <SectionWrapper
      id="education"
      className="py-24 sm:py-32"
      delay={100}
    >
      <div className="max-w-[1200px] mx-auto px-6">

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
          <span className="gradient-text">
            {text.heading}
          </span>
        </h2>

        <div className="glass-card rounded-xl p-8 sm:p-10 gradient-border">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">

            <div
              className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
              style={{
                background:
                  'linear-gradient(135deg, #06b6d4, #3b82f6)',
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
              </svg>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                {text.university}
              </h3>

              <p className="text-cyan-400 font-medium text-sm mb-1">
                {text.degree}
              </p>

              <p className="text-gray-500 text-sm">
                {text.status}
              </p>
            </div>

          </div>
        </div>

      </div>
    </SectionWrapper>
  )
}
