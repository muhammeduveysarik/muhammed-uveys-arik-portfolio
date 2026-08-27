'use client'

import { useEffect, useRef, useState } from 'react'

type Language = 'en' | 'tr'

const content = {
  en: {
    label: 'ABOUT',
    heading: 'Building, learning,',
    headingAccent: 'and exploring.',
    intro:
      "I'm Muhammed Üveys Arık, a Computer Engineering student at Bilecik Şeyh Edebali University.",
    paragraph1:
      "I'm currently exploring Data, Artificial Intelligence, DevOps, Cloud Computing, and Cybersecurity while strengthening my foundations in programming, algorithms, and software engineering.",
    paragraph2:
      'I believe the best way to understand technology is to build with it. I work on hands-on projects, experiment with different tools, and turn what I learn into real applications.',
    philosophy: 'LEARNING PHILOSOPHY',
    philosophyText: 'Learn. Build. Improve. Repeat.',
    focus: 'CURRENT FOCUS',
    focusItems: ['DevOps', 'Cloud', 'Artificial Intelligence', 'Data'],
  },

  tr: {
    label: 'HAKKIMDA',
    heading: 'Üretiyor, öğreniyor',
    headingAccent: 've keşfediyorum.',
    intro:
      "Bilecik Şeyh Edebali Üniversitesi'nde Bilgisayar Mühendisliği öğrencisiyim.",
    paragraph1:
      'Programlama, algoritmalar ve yazılım mühendisliği temellerimi güçlendirirken Veri, Yapay Zekâ, DevOps, Bulut Bilişim ve Siber Güvenlik alanlarını keşfediyorum.',
    paragraph2:
      'Teknolojiyi anlamanın en iyi yollarından birinin onu kullanarak üretmek olduğuna inanıyorum. Uygulamalı projeler geliştiriyor, farklı araçları deniyor ve öğrendiklerimi gerçek uygulamalara dönüştürüyorum.',
    philosophy: 'ÖĞRENME YAKLAŞIMIM',
    philosophyText: 'Öğren. Üret. Geliştir. Tekrarla.',
    focus: 'ŞU ANKİ ODAĞIM',
    focusItems: ['DevOps', 'Bulut', 'Yapay Zekâ', 'Veri'],
  },
}

export default function About() {
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
      window.removeEventListener('languageChange', handleLanguageChange)
      observer.disconnect()
    }
  }, [])

  const text = content[language]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden border-t border-white/10 bg-[hsl(var(--background))]"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">

        {/* Small section label */}
        <div
          className={`mb-10 flex items-center gap-4 transition-all duration-700 ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          }`}
        >
          <span className="font-mono text-[11px] font-medium tracking-[0.28em] text-gray-500">
            01
          </span>

          <div className="h-px w-10 bg-gray-600/50" />

          <span className="font-mono text-[11px] font-medium tracking-[0.28em] text-gray-500">
            {text.label}
          </span>
        </div>

        {/* Main heading */}
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">

          <div>
            <h2
              className={`max-w-[720px] text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white transition-all duration-1000 sm:text-6xl lg:text-7xl xl:text-[5.5rem] ${
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

          {/* Intro */}
          <div
            className={`flex items-end transition-all delay-200 duration-1000 ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="max-w-xl text-xl leading-relaxed text-gray-300 sm:text-2xl">
              {text.intro}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`my-16 h-px origin-left bg-white/10 transition-transform delay-300 duration-1000 sm:my-20 ${
            visible ? 'scale-x-100' : 'scale-x-0'
          }`}
        />

        {/* Content */}
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-28">

          {/* Text */}
          <div className="space-y-8">
            <p
              className={`max-w-3xl text-lg leading-[1.8] text-gray-400 transition-all delay-300 duration-1000 sm:text-xl ${
                visible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              {text.paragraph1}
            </p>

            <p
              className={`max-w-3xl text-lg leading-[1.8] text-gray-400 transition-all delay-500 duration-1000 sm:text-xl ${
                visible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              {text.paragraph2}
            </p>
          </div>

          {/* Right information */}
          <div
            className={`transition-all delay-500 duration-1000 ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            {/* Philosophy */}
            <div className="border-t border-white/10 py-7">
              <p className="mb-4 font-mono text-[10px] tracking-[0.25em] text-gray-500">
                {text.philosophy}
              </p>

              <p className="text-xl font-medium tracking-tight text-gray-200 sm:text-2xl">
                {text.philosophyText}
              </p>
            </div>

            {/* Focus */}
            <div className="border-y border-white/10 py-7">
              <p className="mb-5 font-mono text-[10px] tracking-[0.25em] text-gray-500">
                {text.focus}
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {text.focusItems.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 sm:text-base"
                  >
                    <span className="text-[10px] text-gray-600">
                      0{index + 1}
                    </span>

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Very subtle decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full border border-white/[0.035]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-40 h-[260px] w-[260px] rounded-full border border-white/[0.025]"
      />
    </section>
  )
}
