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
    info1Title: 'Student',
    info1Text: 'Bilecik Şeyh Edebali University',
    info2Title: 'Focus',
    info2Text: 'Data • AI • DevOps • Cloud',
    info3Title: 'Mindset',
    info3Text: 'Learning by building',
  },

  tr: {
    badge: 'Bilgisayar Mühendisliği Öğrencisi • Türkiye',
    title: 'Bilgisayar Mühendisliği Öğrencisi',
    description:
      'Uygulamalı projeler geliştirerek teknolojinin farklı alanlarını keşfeden bir Bilgisayar Mühendisliği öğrencisiyim. Yazılım mühendisliği ve problem çözme alanlarında sağlam bir temel oluştururken Veri, Yapay Zekâ, DevOps, Bulut ve Siber Güvenlik alanlarında kendimi geliştirmeye devam ediyorum.',
    cv: 'CV İndir',
    info1Title: 'Öğrenci',
    info1Text: 'Bilecik Şeyh Edebali Üniversitesi',
    info2Title: 'Odak',
    info2Text: 'Data • AI • DevOps • Cloud',
    info3Title: 'Yaklaşım',
    info3Text: 'Yaparak öğrenme',
  },
}

export default function Hero() {
  const [language, setLanguage] = useState<Language>('en')
  const [visible, setVisible] = useState(false)

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
    }, 80)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('languageChange', handleLanguageChange)
    }
  }, [])

  const text = content[language]

  const reveal = visible
    ? 'opacity-100 translate-y-0 blur-0'
    : 'opacity-0 translate-y-6 blur-sm'

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden border-b border-black/5 dark:border-white/5"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#f8f8f7] dark:bg-[#080808]" />

      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.7), transparent 35%), radial-gradient(circle at 80% 30%, rgba(120,120,120,0.12), transparent 35%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(100,100,100,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(100,100,100,0.2) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center w-full">

          {/* LEFT */}
          <div className="max-w-3xl">

            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 transition-all duration-700 ${reveal}`}
            >
              <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
              {text.badge}
            </div>

            {/* Name */}
            <h1
              className={`mt-8 text-[clamp(3.6rem,7vw,7.5rem)] leading-[0.88] tracking-[-0.06em] font-semibold text-zinc-950 dark:text-white transition-all duration-1000 delay-100 ${reveal}`}
            >
              Muhammed
              <br />
              Üveys Arık
            </h1>

            {/* Title */}
            <p
              className={`mt-7 text-xl md:text-2xl font-medium tracking-[-0.02em] text-zinc-700 dark:text-zinc-400 transition-all duration-1000 delay-200 ${reveal}`}
            >
              {text.title}
            </p>

            {/* Description */}
            <p
              className={`mt-6 max-w-2xl text-base md:text-lg leading-8 text-zinc-600 dark:text-zinc-400 transition-all duration-1000 delay-300 ${reveal}`}
            >
              {text.description}
            </p>

            {/* Buttons */}
            <div
              className={`mt-9 flex flex-wrap gap-3 transition-all duration-1000 delay-[400ms] ${reveal}`}
            >
              <a
                href="https://github.com/muhammeduveysarik"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-900 dark:text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:hover:bg-white/[0.07] hover:shadow-lg"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>

                GitHub

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/muveys/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-900 dark:text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:hover:bg-white/[0.07] hover:shadow-lg"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>

                LinkedIn

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <a
                href="/Muhammed_Uveys_Arik_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl bg-zinc-950 dark:bg-white px-5 py-3 text-sm font-medium text-white dark:text-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <svg
                  width="18"
                  height="18"
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
            className={`relative transition-all duration-1000 delay-300 ${
              visible
                ? 'opacity-100 translate-x-0 blur-0'
                : 'opacity-0 translate-x-8 blur-sm'
            }`}
          >
            <div className="relative mx-auto max-w-[560px]">

              {/* Halo */}
              <div className="absolute -inset-10 rounded-full border border-black/5 dark:border-white/10" />
              <div className="absolute inset-8 rounded-full border border-black/5 dark:border-white/[0.06]" />

              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-black/10 dark:border-white/10 bg-zinc-200 dark:bg-zinc-900 shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Muhammed Üveys Arık"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              {/* Floating Info Card */}
              <div className="absolute -bottom-8 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-white/10 bg-black/60 dark:bg-black/55 p-5 backdrop-blur-2xl shadow-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                      {text.info1Title}
                    </p>
                    <p className="mt-1 text-sm text-white">
                      {text.info1Text}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                      {text.info2Title}
                    </p>
                    <p className="mt-1 text-sm text-white">
                      {text.info2Text}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                      {text.info3Title}
                    </p>
                    <p className="mt-1 text-sm text-white">
                      {text.info3Text}
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
