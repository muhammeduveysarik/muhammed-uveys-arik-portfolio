'use client'

import { useEffect, useRef, useState } from 'react'

type Language = 'en' | 'tr'

const content = {
  en: {
    label: 'EDUCATION',
    heading: 'Academic',
    headingAccent: 'foundation.',
    university: 'Bilecik Şeyh Edebali University',
    degree: 'Bachelor of Science',
    department: 'Computer Engineering',
    status: 'Currently pursuing',
    location: 'Bilecik, Türkiye',
    description:
      'Building a strong foundation in computer engineering while expanding my knowledge through hands-on projects and independent learning.',
    programLabel: 'PROGRAM',
    statusLabel: 'STATUS',
    locationLabel: 'LOCATION',
  },

  tr: {
    label: 'EĞİTİM',
    heading: 'Akademik',
    headingAccent: 'temelim.',
    university: 'Bilecik Şeyh Edebali Üniversitesi',
    degree: 'Lisans',
    department: 'Bilgisayar Mühendisliği',
    status: 'Öğrenim devam ediyor',
    location: 'Bilecik, Türkiye',
    description:
      'Bilgisayar mühendisliği alanında güçlü bir akademik temel oluştururken uygulamalı projeler ve bireysel çalışmalarla teknik bilgimi geliştiriyorum.',
    programLabel: 'PROGRAM',
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
        threshold: 0.2,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
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
      className="relative overflow-hidden border-t border-white/10 bg-[hsl(var(--background))]"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">

        {/* SECTION LABEL */}
        <div
          className={`mb-12 flex items-center gap-4 transition-all duration-700 ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          }`}
        >
          <span className="font-mono text-[11px] tracking-[0.28em] text-gray-500">
            02
          </span>

          <div className="h-px w-10 bg-gray-600/50" />

          <span className="font-mono text-[11px] tracking-[0.28em] text-gray-500">
            {text.label}
          </span>
        </div>

        {/* HEADING */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

          <div>
            <h2
              className={`text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white transition-all duration-1000 sm:text-6xl lg:text-7xl ${
                visible
                  ? 'translate-y-0 opacity-100 blur-0'
                  : 'translate-y-10 opacity-0 blur-sm'
              }`}
            >
              {text.heading}

              <span className="mt-2 block text-gray-500">
                {text.headingAccent}
              </span>
            </h2>
          </div>

          {/* UNIVERSITY */}
          <div
            className={`flex items-end transition-all delay-200 duration-1000 ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div>
              <p className="mb-3 font-mono text-[10px] tracking-[0.25em] text-gray-500">
                UNIVERSITY
              </p>

              <h3 className="max-w-2xl text-2xl font-medium leading-tight tracking-tight text-gray-200 sm:text-3xl lg:text-4xl">
                {text.university}
              </h3>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div
          className={`my-16 h-px origin-left bg-white/10 transition-transform delay-300 duration-1000 sm:my-20 ${
            visible ? 'scale-x-100' : 'scale-x-0'
          }`}
        />

        {/* LOWER CONTENT */}
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-28">

          {/* DESCRIPTION */}
          <div
            className={`transition-all delay-300 duration-1000 ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <p className="max-w-2xl text-lg leading-[1.8] text-gray-400 sm:text-xl">
              {text.description}
            </p>
          </div>

          {/* DETAILS */}
          <div
            className={`transition-all delay-500 duration-1000 ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >

            {/* PROGRAM */}
            <div className="group border-t border-white/10 py-7">
              <div className="grid grid-cols-[110px_1fr] gap-6 sm:grid-cols-[140px_1fr]">

                <p className="font-mono text-[10px] tracking-[0.22em] text-gray-500">
                  {text.programLabel}
                </p>

                <div>
                  <p className="text-lg font-medium text-gray-200">
                    {text.department}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {text.degree}
                  </p>
                </div>

              </div>
            </div>

            {/* STATUS */}
            <div className="group border-t border-white/10 py-7">
              <div className="grid grid-cols-[110px_1fr] gap-6 sm:grid-cols-[140px_1fr]">

                <p className="font-mono text-[10px] tracking-[0.22em] text-gray-500">
                  {text.statusLabel}
                </p>

                <p className="text-lg font-medium text-gray-300">
                  {text.status}
                </p>

              </div>
            </div>

            {/* LOCATION */}
            <div className="group border-y border-white/10 py-7">
              <div className="grid grid-cols-[110px_1fr] gap-6 sm:grid-cols-[140px_1fr]">

                <p className="font-mono text-[10px] tracking-[0.22em] text-gray-500">
                  {text.locationLabel}
                </p>

                <p className="text-lg font-medium text-gray-300">
                  {text.location}
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SUBTLE BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-24 h-[500px] w-[500px] rounded-full border border-white/[0.025]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-52 h-[260px] w-[260px] rounded-full border border-white/[0.02]"
      />

    </section>
  )
}
