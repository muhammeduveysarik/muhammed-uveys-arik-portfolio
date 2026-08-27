'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

type Language = 'en' | 'tr'

const content = {
  en: {
    badge: 'Computer Engineering Student • Türkiye',
    title: 'Computer Engineering Student',
    description:
      "I'm a Computer Engineering student exploring different areas of technology through hands-on projects. I'm currently developing my skills across Data, Artificial Intelligence, DevOps, Cloud, and Cybersecurity while building a strong foundation in software engineering and problem solving.",
    cv: 'Download CV',
    student: 'STUDENT',
    focus: 'FOCUS',
    mindset: 'MINDSET',
    university: 'Bilecik Şeyh Edebali University',
    focusText: 'Data • AI • DevOps • Cloud',
    mindsetText: 'Learning by building',
  },

  tr: {
    badge: 'Bilgisayar Mühendisliği Öğrencisi • Türkiye',
    title: 'Bilgisayar Mühendisliği Öğrencisi',
    description:
      'Bilgisayar Mühendisliği öğrencisiyim ve uygulamalı projeler aracılığıyla teknolojinin farklı alanlarını keşfediyorum. Şu anda Veri, Yapay Zekâ, DevOps, Bulut ve Siber Güvenlik alanlarında becerilerimi geliştirirken, yazılım mühendisliği ve problem çözme konusunda da sağlam bir temel oluşturuyorum.',
    cv: "CV'yi indir",
    student: 'ÖĞRENCİ',
    focus: 'ODAK',
    mindset: 'ZİHNİYET',
    university: 'Bilecik Şeyh Edebali Üniversitesi',
    focusText: 'Veri • Yapay Zekâ • DevOps • Bulut',
    mindsetText: 'İnşa ederek öğrenme',
  },
}

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language')

    if (savedLanguage === 'tr' || savedLanguage === 'en') {
      setLanguage(savedLanguage)
    }

    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<Language>
      setLanguage(customEvent.detail)
    }

    window.addEventListener('languageChange', handleLanguageChange)

    const timer = setTimeout(() => {
      setVisible(true)
    }, 100)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('languageChange', handleLanguageChange)
    }
  }, [])

  const text = content[language]

  return (
    <section
      id="hero"
      className="
        relative min-h-screen overflow-hidden
        bg-[#f7f7f5] text-zinc-950
        transition-colors duration-500
        dark:bg-[#08090a] dark:text-white
      "
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute -left-40 top-0
            h-[600px] w-[600px]
            rounded-full
            bg-black/[0.025]
            blur-[100px]
            dark:bg-white/[0.035]
          "
        />

        <div
          className="
            absolute right-[5%] top-[10%]
            h-[700px] w-[700px]
            rounded-full
            border border-black/[0.05]
            dark:border-white/[0.06]
          "
        />

        <div
          className="
            absolute bottom-0 left-0 right-0 h-40
            bg-gradient-to-t
            from-black/[0.025]
            to-transparent
            dark:from-black/20
          "
        />
      </div>

      <div
        className="
          relative z-10
          mx-auto flex min-h-screen max-w-[1450px]
          items-center
          px-6 pb-16 pt-32
          sm:px-10
          lg:px-14
        "
      >
        <div
          className="
            grid w-full items-center gap-14
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-16
          "
        >
          {/* LEFT */}
          <div
            className={`transition-all duration-1000 ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            {/* BADGE */}
            <div
              className="
                mb-8 inline-flex items-center gap-3
                rounded-full
                border border-black/10
                bg-black/[0.025]
                px-5 py-2.5
                text-sm font-medium
                text-zinc-600
                backdrop-blur-md
                dark:border-white/15
                dark:bg-white/[0.04]
                dark:text-gray-300
              "
            >
              <span
                className="
                  h-2 w-2 rounded-full
                  bg-zinc-900
                  dark:bg-white
                "
              />

              {text.badge}
            </div>

            {/* NAME */}
            <div className="mb-8">
              <h1
                className="
                  font-semibold
                  tracking-[-0.055em]
                  text-zinc-950
                  dark:text-white
                "
              >
                <span
                  className="
                    block
                    text-[clamp(3.6rem,7vw,8rem)]
                    leading-[0.88]
                  "
                >
                  Muhammed
                </span>

                <span
                  className="
                    mt-7 block
                    text-[clamp(3.6rem,7vw,8rem)]
                    leading-[0.88]
                  "
                >
                  Üveys Arık
                </span>
              </h1>
            </div>

            {/* TITLE */}
            <p
              className="
                mb-7
                text-xl font-medium
                text-zinc-600
                sm:text-2xl
                dark:text-gray-400
              "
            >
              {text.title}
            </p>

            {/* DESCRIPTION */}
            <p
              className="
                mb-10
                max-w-[720px]
                text-base
                leading-[1.75]
                text-zinc-600
                sm:text-lg
                dark:text-gray-400
              "
            >
              {text.description}
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center gap-3">
              {/* GITHUB */}
              <a
                href="https://github.com/muhammeduveysarik"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center gap-3
                  rounded-xl
                  border border-black/10
                  bg-white
                  px-6 py-3.5
                  text-sm font-semibold
                  text-zinc-900
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-black/20
                  hover:shadow-md
                  dark:border-white/15
                  dark:bg-white/[0.025]
                  dark:text-white
                  dark:shadow-none
                  dark:hover:border-white/30
                  dark:hover:bg-white/[0.07]
                "
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 6.8c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.22.69.82.57A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>

                GitHub

                <span
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                >
                  ↗
                </span>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/muveys/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center gap-3
                  rounded-xl
                  border border-black/10
                  bg-white
                  px-6 py-3.5
                  text-sm font-semibold
                  text-zinc-900
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-black/20
                  hover:shadow-md
                  dark:border-white/15
                  dark:bg-white/[0.025]
                  dark:text-white
                  dark:shadow-none
                  dark:hover:border-white/30
                  dark:hover:bg-white/[0.07]
                "
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>

                LinkedIn

                <span
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                >
                  ↗
                </span>
              </a>

              {/* CV */}
              <a
                href="/Muhammed_Uveys_Arik_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-3
                  rounded-xl
                  bg-zinc-950
                  px-6 py-3.5
                  text-sm font-semibold
                  text-white
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-zinc-800
                  dark:bg-white
                  dark:text-black
                  dark:hover:bg-gray-200
                "
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>

                {text.cv}
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className={`relative mx-auto w-full max-w-[550px] transition-all delay-200 duration-1000 lg:mx-0 ${
              visible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-10 opacity-0'
            }`}
          >
            {/* PHOTO */}
            <div
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-[32px]
                border border-black/10
                bg-zinc-200
                shadow-2xl
                dark:border-white/10
                dark:bg-[#111]
              "
            >
              <Image
                src="/profile.jpg"
                alt="Muhammed Üveys Arık"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 550px"
                className="object-cover"
              />

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/20
                  via-transparent
                  to-transparent
                  dark:from-black/30
                "
              />
            </div>

            {/* INFORMATION CARD */}
            <div
              className="
                relative
                mx-5 -mt-20
                rounded-2xl
                border border-black/10
                bg-white/95
                p-6
                shadow-2xl
                backdrop-blur-xl
                sm:mx-8
                dark:border-white/10
                dark:bg-[#121314]/95
              "
            >
              <div className="grid gap-6 sm:grid-cols-3">
                <div>
                  <p
                    className="
                      mb-2
                      text-[11px]
                      font-medium
                      uppercase
                      tracking-[0.2em]
                      text-zinc-500
                      dark:text-gray-500
                    "
                  >
                    {text.student}
                  </p>

                  <p
                    className="
                      text-sm
                      font-semibold
                      leading-relaxed
                      text-zinc-900
                      dark:text-white
                    "
                  >
                    {text.university}
                  </p>
                </div>

                <div>
                  <p
                    className="
                      mb-2
                      text-[11px]
                      font-medium
                      uppercase
                      tracking-[0.2em]
                      text-zinc-500
                      dark:text-gray-500
                    "
                  >
                    {text.focus}
                  </p>

                  <p
                    className="
                      text-sm
                      font-semibold
                      leading-relaxed
                      text-zinc-900
                      dark:text-white
                    "
                  >
                    {text.focusText}
                  </p>
                </div>

                <div>
                  <p
                    className="
                      mb-2
                      text-[11px]
                      font-medium
                      uppercase
                      tracking-[0.2em]
                      text-zinc-500
                      dark:text-gray-500
                    "
                  >
                    {text.mindset}
                  </p>

                  <p
                    className="
                      text-sm
                      font-semibold
                      leading-relaxed
                      text-zinc-900
                      dark:text-white
                    "
                  >
                    {text.mindsetText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
