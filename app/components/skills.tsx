'use client'

import { useEffect, useState } from 'react'
import SectionWrapper from './section-wrapper'

type Language = 'en' | 'tr'

const technicalSkills = [
  'C',
  'Python',
  'Linux',
  'Docker',
  'Git',
  'GitHub',
  'CI/CD',
]

const exploringAreas = [
  'Data',
  'Artificial Intelligence',
  'DevOps',
  'Cloud Computing',
  'Cybersecurity',
  'Software Engineering',
]

const content = {
  en: {
    heading: 'Skills & Interests',
    technical: 'Technical Skills',
    exploring: 'Currently Exploring',
  },

  tr: {
    heading: 'Yetenekler & İlgi Alanları',
    technical: 'Teknik Yetenekler',
    exploring: 'Keşfettiğim Alanlar',
  },
}

export default function Skills() {
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
      id="skills"
      className="py-24 sm:py-32"
      delay={100}
    >
      <div className="max-w-[1200px] mx-auto px-6">

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
          <span className="gradient-text">
            {text.heading}
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Technical Skills */}
          <div className="glass-card rounded-xl p-6 hover:border-cyan-500/20 transition-all duration-300 group">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 18l6-6-6-6" />
                  <path d="M8 6l-6 6 6 6" />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-white">
                {text.technical}
              </h3>

            </div>

            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

          {/* Exploring Areas */}
          <div className="glass-card rounded-xl p-6 hover:border-cyan-500/20 transition-all duration-300 group">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-white">
                {text.exploring}
              </h3>

            </div>

            <div className="flex flex-wrap gap-2">
              {exploringAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors duration-200"
                >
                  {area}
                </span>
              ))}
            </div>

          </div>

        </div>
      </div>
    </SectionWrapper>
  )
}
