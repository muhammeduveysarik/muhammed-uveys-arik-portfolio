'use client'

import { useEffect, useRef, useState } from 'react'

type Language = 'en' | 'tr'

const content = {
  en: {
    label: 'SELECTED PROJECTS',
    heading: 'Things I’ve',
    headingAccent: 'built.',
    intro:
      'A selection of projects where I turn what I learn into practical applications and experiment with different technologies.',

    neuralFlowType: 'ARTIFICIAL INTELLIGENCE',
    neuralFlowDescription:
      'An AI-powered roadmap generator that transforms a user’s goal into a structured, step-by-step learning path with topics, projects, estimated durations, and actionable guidance.',

    devopsType: 'DEVOPS',
    devopsDescription:
      'A Flask-based status monitoring application running inside a Docker container. Includes service health checks, Gunicorn, Docker Compose, and an automated CI pipeline with GitHub Actions.',

    kariyerType: 'ARTIFICIAL INTELLIGENCE',
    kariyerDescription:
      'An AI-powered resume and job application assistant developed to support users throughout their career and job application processes.',

    stajType: 'WEB APPLICATION',
    stajDescription:
      'A web application for managing and tracking internship applications. Includes application management, status tracking, filtering, dashboard statistics, and a follow-up center.',

    dataPulseType: 'DATA ENGINEERING',
    dataPulseDescription:
      'A data engineering project designed to collect, process, transform, and analyze data through a structured pipeline. Built to explore practical ETL workflows and modern data engineering concepts.',

    liveSite: 'Live Site',
    github: 'GitHub',
    stack: 'TECHNOLOGIES',
  },

  tr: {
    label: 'SEÇİLİ PROJELER',
    heading: 'Ürettiğim',
    headingAccent: 'projeler.',
    intro:
      'Öğrendiklerimi gerçek uygulamalara dönüştürdüğüm ve farklı teknolojileri deneyimlediğim projelerden bazıları.',

    neuralFlowType: 'YAPAY ZEKÂ',
    neuralFlowDescription:
      'Kullanıcının hedefini analiz ederek konular, projeler, tahmini süreler ve uygulanabilir adımlardan oluşan kişiselleştirilmiş bir yol haritası oluşturan yapay zekâ destekli web uygulaması.',

    devopsType: 'DEVOPS',
    devopsDescription:
      'Docker container içerisinde çalışan Flask tabanlı durum takip uygulaması. Servis sağlık kontrolü, Gunicorn, Docker Compose ve GitHub Actions ile otomatik CI pipeline içerir.',

    kariyerType: 'YAPAY ZEKÂ',
    kariyerDescription:
      'Kullanıcıların kariyer ve iş başvuru süreçlerini desteklemek amacıyla geliştirilmiş yapay zekâ destekli özgeçmiş ve iş başvuru asistanı.',

    stajType: 'WEB UYGULAMASI',
    stajDescription:
      'Staj başvurularını tek noktadan yönetmek ve takip etmek için geliştirilmiş web uygulaması. Başvuru yönetimi, durum takibi, filtreleme, dashboard ve Takip Merkezi özelliklerini içerir.',

    dataPulseType: 'VERİ MÜHENDİSLİĞİ',
    dataPulseDescription:
      'Verileri toplamak, işlemek, dönüştürmek ve analiz etmek amacıyla geliştirilmiş bir veri mühendisliği projesi. ETL süreçleri ve modern veri mühendisliği yaklaşımlarını uygulamalı olarak deneyimlemek için geliştirildi.',

    liveSite: 'Canlı Site',
    github: 'GitHub',
    stack: 'TEKNOLOJİLER',
  },
}

export default function Projects() {
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
        threshold: 0.08,
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

  const projects = [
    {
      number: '01',
      type: text.neuralFlowType,
      title: 'NeuralFlow',
      description: text.neuralFlowDescription,
      technologies: [
        'Next.js',
        'TypeScript',
        'React',
        'Tailwind CSS',
        'AI / LLM',
        'Groq API',
        'React Flow',
        'Vercel',
      ],
      github: 'https://github.com/muhammeduveysarik/neuralflow',
      live: 'https://neuralflow-six.vercel.app/',
    },

    {
      number: '02',
      type: text.devopsType,
      title: 'DevOps Status Dashboard',
      description: text.devopsDescription,
      technologies: [
        'Docker',
        'Docker Compose',
        'Python',
        'Flask',
        'Gunicorn',
        'GitHub Actions',
        'CI/CD',
      ],
      github:
        'https://github.com/muhammeduveysarik/devops-status-app',
      live: null,
    },

    {
      number: '03',
      type: text.kariyerType,
      title: 'KariyerAI',
      description: text.kariyerDescription,
      technologies: ['Python', 'AI', 'Flask', 'Vercel'],
      github:
        'https://github.com/muhammeduveysarik/kariyerai',
      live: 'https://kariyerai.vercel.app',
    },

    {
      number: '04',
      type: text.stajType,
      title: 'StajRadar',
      description: text.stajDescription,
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Vercel',
      ],
      github:
        'https://github.com/muhammeduveysarik/stajradar',
      live: 'https://stajradar.vercel.app',
    },

    {
      number: '05',
      type: text.dataPulseType,
      title: 'DataPulse',
      description: text.dataPulseDescription,
      technologies: [
        'Python',
        'Pandas',
        'ETL',
        'Data Pipeline',
        'CSV',
        'Data Engineering',
      ],
      github:
        'https://github.com/muhammeduveysarik/datapulse',
      live: null,
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="projects"
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
            04
          </span>

          <span className="h-px w-10 bg-white/15" />

          <span className="font-mono text-[10px] tracking-[0.3em] text-white/35">
            {text.label}
          </span>
        </div>

        {/* HEADER */}

        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">

          <div
            className={`transition-all duration-1000 ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-[clamp(3.5rem,7vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.06em] text-white">
              {text.heading}

              <span className="block text-white/30">
                {text.headingAccent}
              </span>
            </h2>
          </div>

          <div
            className={`flex items-end transition-all delay-150 duration-1000 ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="max-w-xl text-lg leading-[1.8] text-white/45 sm:text-xl">
              {text.intro}
            </p>
          </div>

        </div>

        {/* PROJECTS */}

        <div className="mt-20 border-t border-white/10 sm:mt-28">

          {projects.map((project, index) => (
            <article
              key={project.title}
              style={{
                transitionDelay: `${250 + index * 150}ms`,
              }}
              className={`group border-b border-white/10 py-14 transition-all duration-1000 sm:py-20 ${
                visible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-12 opacity-0'
              }`}
            >

              <div className="grid gap-10 lg:grid-cols-[120px_1fr_0.9fr] lg:gap-14">

                {/* NUMBER */}

                <div>
                  <span className="font-mono text-sm tracking-[0.2em] text-white/25">
                    {project.number}
                  </span>
                </div>

                {/* MAIN PROJECT INFO */}

                <div>

                  <p className="mb-5 font-mono text-[10px] tracking-[0.28em] text-white/35">
                    {project.type}
                  </p>

                  <h3 className="max-w-2xl text-4xl font-medium leading-[1] tracking-[-0.045em] text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl lg:text-6xl">
                    {project.title}
                  </h3>

                  <p className="mt-7 max-w-2xl text-base leading-[1.8] text-white/45 sm:text-lg">
                    {project.description}
                  </p>

                </div>

                {/* RIGHT SIDE */}

                <div className="flex flex-col justify-between gap-10">

                  {/* TECHNOLOGIES */}

                  <div>

                    <p className="mb-5 font-mono text-[9px] tracking-[0.25em] text-white/25">
                      {text.stack}
                    </p>

                    <div className="flex flex-wrap gap-x-5 gap-y-3">

                      {project.technologies.map(
                        (technology, techIndex) => (
                          <span
                            key={technology}
                            className="flex items-center gap-2 text-sm text-white/55"
                          >
                            <span className="font-mono text-[8px] text-white/20">
                              {String(techIndex + 1).padStart(
                                2,
                                '0'
                              )}
                            </span>

                            {technology}
                          </span>
                        )
                      )}

                    </div>

                  </div>

                  {/* LINKS */}

                  <div className="flex flex-wrap gap-x-8 gap-y-4">

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-3 border-b border-white/20 pb-2 text-sm font-medium text-white/80 transition-colors hover:border-white hover:text-white"
                      >
                        {text.liveSite}

                        <span className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1">
                          ↗
                        </span>
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-3 border-b border-white/20 pb-2 text-sm font-medium text-white/80 transition-colors hover:border-white hover:text-white"
                    >
                      {text.github}

                      <span className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1">
                        ↗
                      </span>
                    </a>

                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>

      {/* SUBTLE BACKGROUND DECORATION */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[350px] top-[250px] h-[700px] w-[700px] rounded-full border border-white/[0.02]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[80px] top-[520px] h-[220px] w-[220px] rounded-full border border-white/[0.02]"
      />

    </section>
  )
}
