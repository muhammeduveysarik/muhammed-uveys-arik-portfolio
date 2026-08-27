'use client'

import { useEffect, useState } from 'react'
import SectionWrapper from './section-wrapper'

type Language = 'en' | 'tr'

const content = {
  en: {
    heading: 'Projects',

    devopsType: 'DevOps Project',
    devopsDescription:
      'A Flask-based status monitoring application running inside a Docker container. The project includes service health checks, a Gunicorn production server, Docker Compose, and an automated CI pipeline with GitHub Actions.',

    kariyerType: 'AI Project',
    kariyerDescription:
      'An AI-powered resume and job application assistant. It is a web-based artificial intelligence project developed to support users throughout their career and job application processes.',

    stajType: 'Web Application',
    stajDescription:
      'A web application developed to manage and track internship applications in one place. It includes application creation and editing, status tracking, filtering, dashboard statistics, and a Follow-up Center that analyzes application waiting times.',

    liveSite: 'Live Site ↗',
    github: 'View on GitHub ↗',
  },

  tr: {
    heading: 'Projeler',

    devopsType: 'DevOps Projesi',
    devopsDescription:
      'Docker container içerisinde çalışan Flask tabanlı durum takip uygulaması. Projede servis sağlık kontrolü, Gunicorn production sunucusu, Docker Compose ve GitHub Actions ile otomatik CI pipeline bulunmaktadır.',

    kariyerType: 'Yapay Zekâ Projesi',
    kariyerDescription:
      'Yapay zekâ destekli özgeçmiş ve iş başvuru asistanı. Kullanıcıların kariyer süreçlerini desteklemek amacıyla geliştirilen web tabanlı bir yapay zekâ projesidir.',

    stajType: 'Web Uygulaması',
    stajDescription:
      'Staj başvurularını tek noktadan yönetmek ve takip etmek için geliştirilmiş web uygulaması. Başvuru ekleme, düzenleme, durum takibi, filtreleme, dashboard istatistikleri ve başvuruların bekleme sürelerini analiz eden Takip Merkezi özelliklerini içerir.',

    liveSite: 'Canlı Site ↗',
    github: "GitHub'da Görüntüle ↗",
  },
}

export default function Projects() {
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
    <SectionWrapper id="projects" className="py-24 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-6">

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10">
          <span className="gradient-text">
            {text.heading}
          </span>
        </h2>

        <div className="flex flex-col gap-6">

          {/* DevOps Status Dashboard */}
          <div className="glass-card rounded-xl p-8 sm:p-10">
            <div className="flex flex-col gap-6">

              <div>
                <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                  {text.devopsType}
                </span>

                <h3 className="mt-4 text-2xl font-semibold text-white">
                  DevOps Status Dashboard
                </h3>

                <p className="mt-3 max-w-3xl text-gray-400 leading-relaxed">
                  {text.devopsDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  'Docker',
                  'Docker Compose',
                  'Python',
                  'Flask',
                  'Gunicorn',
                  'GitHub Actions',
                  'CI/CD',
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-white/5 px-3 py-1.5 text-sm text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div>
                <a
                  href="https://github.com/muhammeduveysarik/devops-status-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
                >
                  {text.github}
                </a>
              </div>

            </div>
          </div>

          {/* KariyerAI */}
          <div className="glass-card rounded-xl p-8 sm:p-10">
            <div className="flex flex-col gap-6">

              <div>
                <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                  {text.kariyerType}
                </span>

                <h3 className="mt-4 text-2xl font-semibold text-white">
                  KariyerAI
                </h3>

                <p className="mt-3 max-w-3xl text-gray-400 leading-relaxed">
                  {text.kariyerDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  'Python',
                  'AI',
                  'Flask',
                  'Vercel',
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-white/5 px-3 py-1.5 text-sm text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">

                <a
                  href="https://kariyerai.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
                >
                  {text.liveSite}
                </a>

                <a
                  href="https://github.com/muhammeduveysarik/kariyerai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  {text.github}
                </a>

              </div>
            </div>
          </div>

          {/* StajRadar */}
          <div className="glass-card rounded-xl p-8 sm:p-10">
            <div className="flex flex-col gap-6">

              <div>
                <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                  {text.stajType}
                </span>

                <h3 className="mt-4 text-2xl font-semibold text-white">
                  StajRadar
                </h3>

                <p className="mt-3 max-w-3xl text-gray-400 leading-relaxed">
                  {text.stajDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  'Next.js',
                  'React',
                  'TypeScript',
                  'Tailwind CSS',
                  'Vercel',
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-white/5 px-3 py-1.5 text-sm text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">

                <a
                  href="https://stajradar.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
                >
                  {text.liveSite}
                </a>

                <a
                  href="https://github.com/muhammeduveysarik/stajradar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  {text.github}
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  )
}
