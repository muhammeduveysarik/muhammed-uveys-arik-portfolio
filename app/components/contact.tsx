'use client'

import { useEffect, useRef, useState } from 'react'

type Language = 'en' | 'tr'

const content = {
  en: {
    label: 'CONTACT',
    heading: "Let's build",
    headingAccent: 'something.',
    description:
      "I'm always open to discussing new opportunities, interesting projects, internships, collaborations, or simply connecting with people in technology.",
    emailLabel: 'EMAIL',
    socialLabel: 'SOCIAL',
    emailAction: 'Send an email',
  },

  tr: {
    label: 'İLETİŞİM',
    heading: 'Birlikte bir şeyler',
    headingAccent: 'üretelim.',
    description:
      'Yeni fırsatlar, projeler, stajlar, iş birlikleri veya teknoloji alanındaki insanlarla bağlantı kurmak için her zaman iletişime açığım.',
    emailLabel: 'E-POSTA',
    socialLabel: 'SOSYAL',
    emailAction: 'E-posta gönder',
  },
}

export default function Contact() {
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
      id="contact"
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
            05
          </span>

          <span className="h-px w-10 bg-white/15" />

          <span className="font-mono text-[10px] tracking-[0.3em] text-white/35">
            {text.label}
          </span>
        </div>

        {/* MAIN */}

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-28">

          {/* LEFT */}

          <div
            className={`transition-all duration-1000 ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }`}
          >
            <h2 className="text-[clamp(3.5rem,7vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.06em] text-white">
              {text.heading}

              <span className="block text-white/30">
                {text.headingAccent}
              </span>
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-[1.8] text-white/45 sm:text-xl">
              {text.description}
            </p>
          </div>

          {/* RIGHT */}

          <div
            className={`flex flex-col justify-end transition-all delay-200 duration-1000 ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }`}
          >

            {/* EMAIL */}

            <div className="border-t border-white/10 py-8">
              <p className="mb-4 font-mono text-[9px] tracking-[0.28em] text-white/30">
                {text.emailLabel}
              </p>

              <a
                href="mailto:muveysarik6@gmail.com"
                className="group inline-flex max-w-full items-center gap-4 text-xl font-medium text-white/80 transition-colors hover:text-white sm:text-2xl"
              >
                <span className="break-all">
                  muveysarik6@gmail.com
                </span>

                <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>

            {/* SOCIAL */}

            <div className="border-y border-white/10 py-8">
              <p className="mb-5 font-mono text-[9px] tracking-[0.28em] text-white/30">
                {text.socialLabel}
              </p>

              <div className="flex flex-wrap gap-x-8 gap-y-4">

                <a
                  href="https://github.com/muhammeduveysarik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border-b border-white/20 pb-2 text-sm font-medium text-white/65 transition-colors hover:border-white hover:text-white"
                >
                  GitHub

                  <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/muveys/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border-b border-white/20 pb-2 text-sm font-medium text-white/65 transition-colors hover:border-white hover:text-white"
                >
                  LinkedIn

                  <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

              </div>
            </div>

          </div>
        </div>

        {/* BIG EMAIL CTA */}

        <div
          className={`mt-24 transition-all delay-500 duration-1000 sm:mt-32 ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <a
            href="mailto:muveysarik6@gmail.com"
            className="group flex items-center justify-between border-y border-white/10 py-8 transition-colors hover:border-white/25 sm:py-10"
          >
            <span className="text-2xl font-medium tracking-tight text-white/80 transition-colors group-hover:text-white sm:text-4xl">
              {text.emailAction}
            </span>

            <span className="text-3xl text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-2 group-hover:text-white sm:text-5xl">
              ↗
            </span>
          </a>
        </div>

      </div>

      {/* DECORATION */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[350px] -right-[250px] h-[700px] w-[700px] rounded-full border border-white/[0.025]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[120px] -right-[20px] h-[300px] w-[300px] rounded-full border border-white/[0.02]"
      />

    </section>
  )
}
