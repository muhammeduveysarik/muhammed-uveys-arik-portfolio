'use client'

import { useEffect, useRef, useState } from 'react'

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
    label: 'SKILLS & INTERESTS',
    heading: 'Tools I use.',
    headingAccent: 'Fields I explore.',
    intro:
      'Developing practical technical skills while exploring the areas of computer engineering that interest me most.',
    technical: 'TECHNICAL SKILLS',
    exploring: 'CURRENTLY EXPLORING',
  },

  tr: {
    label: 'YETENEKLER & İLGİ ALANLARI',
    heading: 'Kullandığım araçlar.',
    headingAccent: 'Keşfettiğim alanlar.',
    intro:
      'Pratik teknik becerilerimi geliştirirken bilgisayar mühendisliğinde ilgimi çeken farklı alanları keşfetmeye devam ediyorum.',
    technical: 'TEKNİK YETENEKLER',
    exploring: 'KEŞFETTİĞİM ALANLAR',
  },
}

export default function Skills() {
  const [language, setLanguage] = useState<Language>('en')
  const [visible, setVisible] = useState(false)

  const sectionRef = useRef<HTMLElement | null>(null)

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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.15,
      }
    )

    const currentSection = sectionRef.current

    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      window.removeEventListener(
        'languageChange',
        handleLanguageChange
      )

      observer.disconnect()
    }
  }, [])

  const text = content[language]

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden border-t border-white/[0.08] bg-[hsl(var(--background))]"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">

        {/* SECTION LABEL */}
        <div
          className={`mb-14 flex items-center gap-4 transition-all duration-700 ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-5 opacity-0'
          }`}
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/30">
            03
          </span>

          <span className="h-px w-10 bg-white/15" />

          <span className="font-mono text-[10px] tracking-[0.3em] text-white/35">
            {text.label}
          </span>
        </div>

        {/* TOP */}
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">

          {/* HEADING */}
          <div
            className={`transition-all duration-1000 ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="max-w-[800px] text-[clamp(3.2rem,6.5vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
              {text.heading}

              <span className="mt-2 block text-white/30">
                {text.headingAccent}
              </span>
            </h2>
          </div>

          {/* INTRO */}
          <div
            className={`flex items-end transition-all delay-150 duration-1000 ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="max-w-xl text-lg leading-[1.75] text-white/45 sm:text-xl">
              {text.intro}
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-16 overflow-hidden sm:my-20">
          <div
            className={`h-px origin-left bg-white/10 transition-transform delay-200 duration-1000 ${
              visible ? 'scale-x-100' : 'scale-x-0'
            }`}
          />
        </div>

        {/* SKILLS CONTENT */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* TECHNICAL */}
          <div
            className={`transition-all delay-300 duration-1000 ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">

              <p className="font-mono text-[10px] tracking-[0.28em] text-white/35">
                {text.technical}
              </p>

              <span className="font-mono text-[10px] text-white/20">
                01 — 07
              </span>

            </div>

            <div>
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill}
                  className="group flex items-center justify-between border-b border-white/[0.08] py-5"
                >
                  <div className="flex items-center gap-5">

                    <span className="font-mono text-[10px] text-white/20">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="text-xl font-medium tracking-tight text-white/75 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white sm:text-2xl">
                      {skill}
                    </span>

                  </div>

                  <span className="translate-x-2 text-lg text-white/0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-white/40">
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* EXPLORING */}
          <div
            className={`transition-all delay-500 duration-1000 ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">

              <p className="font-mono text-[10px] tracking-[0.28em] text-white/35">
                {text.exploring}
              </p>

              <span className="font-mono text-[10px] text-white/20">
                01 — 06
              </span>

            </div>

            <div>
              {exploringAreas.map((area, index) => (
                <div
                  key={area}
                  className="group flex items-center justify-between border-b border-white/[0.08] py-5"
                >
                  <div className="flex items-center gap-5">

                    <span className="font-mono text-[10px] text-white/20">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="text-xl font-medium tracking-tight text-white/75 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white sm:text-2xl">
                      {area}
                    </span>

                  </div>

                  <span className="translate-x-2 text-lg text-white/0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-white/40">
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* BACKGROUND DETAILS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[300px] top-[120px] h-[650px] w-[650px] rounded-full border border-white/[0.02]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[70px] top-[350px] h-[220px] w-[220px] rounded-full border border-white/[0.02]"
      />

    </section>
  )
}
