'use client'

import { useEffect, useRef, useState } from 'react'

type Language = 'en' | 'tr'

const content = {
  en: {
    label: 'EDUCATION',
    title1: 'Academic',
    title2: 'foundation.',
    university: 'Bilecik Şeyh Edebali University',
    department: 'Computer Engineering',
    degree: 'Bachelor of Science',
    status: 'Currently pursuing',
    location: 'Bilecik, Türkiye',
    description:
      'Building a strong foundation in computer engineering while expanding my technical knowledge through hands-on projects, independent learning, and real-world experimentation.',
    programLabel: 'PROGRAM',
    degreeLabel: 'DEGREE',
    statusLabel: 'STATUS',
    locationLabel: 'LOCATION',
  },

  tr: {
    label: 'EĞİTİM',
    title1: 'Akademik',
    title2: 'temelim.',
    university: 'Bilecik Şeyh Edebali Üniversitesi',
    department: 'Bilgisayar Mühendisliği',
    degree: 'Lisans',
    status: 'Öğrenim devam ediyor',
    location: 'Bilecik, Türkiye',
    description:
      'Bilgisayar mühendisliği alanında güçlü bir temel oluştururken uygulamalı projeler, bireysel öğrenme ve gerçek dünya çalışmalarıyla teknik bilgimi geliştiriyorum.',
    programLabel: 'PROGRAM',
    degreeLabel: 'DERECE',
    statusLabel: 'DURUM',
    locationLabel: 'KONUM',
  },
}

export default function Education() {
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
      id="education"
      className="relative overflow-hidden border-t border-white/[0.08] bg-[hsl(var(--background))]"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">

        {/* TOP LABEL */}
        <div
          className={`mb-14 flex items-center gap-4 transition-all duration-700 ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-5 opacity-0'
          }`}
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-gray-600">
            02
          </span>

          <span className="h-px w-10 bg-white/15" />

          <span className="font-mono text-[10px] tracking-[0.3em] text-gray-500">
            {text.label}
          </span>
        </div>

        {/* TOP AREA */}
        <div className="grid items-end gap-14 lg:grid-cols-2 lg:gap-24">

          {/* BIG TITLE */}
          <div
            className={`transition-all duration-1000 ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-[clamp(3.5rem,7vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.06em] text-white">
              {text.title1}

              <span className="block text-white/30">
                {text.title2}
              </span>
            </h2>
          </div>

          {/* UNIVERSITY */}
          <div
            className={`pb-2 transition-all delay-150 duration-1000 ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="mb-5 font-mono text-[10px] tracking-[0.3em] text-gray-600">
              UNIVERSITY
            </p>

            <h3 className="max-w-xl text-3xl font-medium leading-[1.1] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              {text.university}
            </h3>
          </div>
        </div>

        {/* LONG DIVIDER */}
        <div className="my-16 overflow-hidden sm:my-20">
          <div
            className={`h-px origin-left bg-white/10 transition-transform delay-200 duration-1000 ${
              visible ? 'scale-x-100' : 'scale-x-0'
            }`}
          />
        </div>

        {/* BOTTOM AREA */}
        <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-28">

          {/* DESCRIPTION */}
          <div
            className={`transition-all delay-300 duration-1000 ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <p className="max-w-xl text-lg leading-[1.8] text-white/45 sm:text-xl">
              {text.description}
            </p>
          </div>

          {/* INFORMATION LIST */}
          <div
            className={`transition-all delay-400 duration-1000 ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >

            {/* PROGRAM */}
            <div className="grid grid-cols-[100px_1fr] gap-5 border-t border-white/10 py-7 sm:grid-cols-[150px_1fr]">

              <span className="font-mono text-[9px] tracking-[0.25em] text-white/30">
                {text.programLabel}
              </span>

              <span className="text-lg font-medium text-white/85 sm:text-xl">
                {text.department}
              </span>

            </div>

            {/* DEGREE */}
            <div className="grid grid-cols-[100px_1fr] gap-5 border-t border-white/10 py-7 sm:grid-cols-[150px_1fr]">

              <span className="font-mono text-[9px] tracking-[0.25em] text-white/30">
                {text.degreeLabel}
              </span>

              <span className="text-lg font-medium text-white/70 sm:text-xl">
                {text.degree}
              </span>

            </div>

            {/* STATUS */}
            <div className="grid grid-cols-[100px_1fr] gap-5 border-t border-white/10 py-7 sm:grid-cols-[150px_1fr]">

              <span className="font-mono text-[9px] tracking-[0.25em] text-white/30">
                {text.statusLabel}
              </span>

              <span className="text-lg font-medium text-white/70 sm:text-xl">
                {text.status}
              </span>

            </div>

            {/* LOCATION */}
            <div className="grid grid-cols-[100px_1fr] gap-5 border-y border-white/10 py-7 sm:grid-cols-[150px_1fr]">

              <span className="font-mono text-[9px] tracking-[0.25em] text-white/30">
                {text.locationLabel}
              </span>

              <span className="text-lg font-medium text-white/70 sm:text-xl">
                {text.location}
              </span>

            </div>

          </div>
        </div>
      </div>

      {/* DECORATIVE CIRCLES */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[250px] top-[100px] h-[600px] w-[600px] rounded-full border border-white/[0.025]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[80px] top-[270px] h-[260px] w-[260px] rounded-full border border-white/[0.025]"
      />
    </section>
  )
}
