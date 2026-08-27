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
  },
  tr: {
    badge: 'Bilgisayar Mühendisliği Öğrencisi • Türkiye',
    title: 'Bilgisayar Mühendisliği Öğrencisi',
    description:
      'Uygulamalı projeler geliştirerek teknolojinin farklı alanlarını keşfeden bir Bilgisayar Mühendisliği öğrencisiyim. Yazılım mühendisliği ve problem çözme alanlarında sağlam bir temel oluştururken Veri, Yapay Zekâ, DevOps, Bulut ve Siber Güvenlik alanlarında kendimi geliştirmeye devam ediyorum.',
    cv: 'CV İndir',
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

    const timer = setTimeout(() => setVisible(true), 100)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('languageChange', handleLanguageChange)
    }
  }, [])

  const text = content[language]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div
        className={`max-w-[1200px] mx-auto px-6 text-center transition-all duration-1000 ${
          visible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Profile photo */}
        <div className="relative mx-auto mb-8 w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-2 ring-white/10 shadow-[0_0_40px_-8px_rgba(6,182,212,0.45)]">
          <Image
            src="/profile.jpg"
            alt="Muhammed Üveys Arık"
            fill
            priority
            sizes="(max-width: 640px) 112px, 128px"
            className="object-cover"
          />
        </div>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full text-xs sm:text-sm font-medium bg-white/5 border border-white/10 text-gray-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>

          {text.badge}
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
          <span className="gradient-text">
            Muhammed Üveys Arık
          </span>
        </h1>

        {/* Title */}
        <p className="text-lg sm:text-xl text-gray-400 mb-6 font-medium">
          {text.title}
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-400/80 text-base sm:text-lg leading-relaxed mb-10">
          {text.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">

          {/* GitHub */}
          <a
            href="https://github.com/muhammeduveysarik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile of Muhammed Üveys Arık"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-200"
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
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muveys/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile of Muhammed Üveys Arık"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-200"
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
          </a>

          {/* CV */}
          <a
            href="/Muhammed_Uveys_Arik_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{
              background:
                'linear-gradient(135deg, #06b6d4, #3b82f6)',
            }}
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
    </section>
  )
}
