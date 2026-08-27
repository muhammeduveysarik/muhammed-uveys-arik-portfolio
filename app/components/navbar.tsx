'use client'

import { useState, useEffect } from 'react'

const navLinks = {
  en: [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  tr: [
    { label: 'Hakkımda', href: '#about' },
    { label: 'Eğitim', href: '#education' },
    { label: 'Yetenekler', href: '#skills' },
    { label: 'Projeler', href: '#projects' },
    { label: 'İletişim', href: '#contact' },
  ],
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [language, setLanguage] = useState<'en' | 'tr'>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language')

    if (savedLanguage === 'tr' || savedLanguage === 'en') {
      setLanguage(savedLanguage)
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<'en' | 'tr'>
      setLanguage(customEvent.detail)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('languageChange', handleLanguageChange)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('languageChange', handleLanguageChange)
    }
  }, [])

  const changeLanguage = (lang: 'en' | 'tr') => {
    setLanguage(lang)
    localStorage.setItem('language', lang)

    window.dispatchEvent(
      new CustomEvent('languageChange', {
        detail: lang,
      })
    )
  }

  const handleNavClick = (href: string) => {
    setMobileOpen(false)

    const el = document.querySelector(href)

    el?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const links = navLinks[language]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }}
          className="text-lg font-bold gradient-text tracking-tight"
        >
          MÜA
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">

          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}

          {/* Language Switcher */}
          <div className="ml-4 flex items-center gap-1 p-1 rounded-lg bg-white/5 border border-white/10">

            <button
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                language === 'en'
                  ? 'bg-cyan-500/20 text-cyan-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              EN
            </button>

            <button
              onClick={() => changeLanguage('tr')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                language === 'tr'
                  ? 'bg-cyan-500/20 text-cyan-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              TR
            </button>

          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5 px-6 pb-4">

          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-3 py-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </button>
          ))}

          {/* Mobile Language Switcher */}
          <div className="flex gap-2 mt-3">

            <button
              onClick={() => changeLanguage('en')}
              className={`px-4 py-2 rounded-lg text-sm ${
                language === 'en'
                  ? 'bg-cyan-500/20 text-cyan-400'
                  : 'bg-white/5 text-gray-400'
              }`}
            >
              English
            </button>

            <button
              onClick={() => changeLanguage('tr')}
              className={`px-4 py-2 rounded-lg text-sm ${
                language === 'tr'
                  ? 'bg-cyan-500/20 text-cyan-400'
                  : 'bg-white/5 text-gray-400'
              }`}
            >
              Türkçe
            </button>

          </div>
        </div>
      )}
    </nav>
  )
}
