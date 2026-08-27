'use client'

import { useEffect, useState } from 'react'

type Language = 'en' | 'tr'
type Theme = 'light' | 'dark'

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
  const [language, setLanguage] = useState<Language>('en')
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    /* Language */
    const savedLanguage = localStorage.getItem('language')

    if (savedLanguage === 'tr' || savedLanguage === 'en') {
      setLanguage(savedLanguage)
    }

    /* Theme */
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme)
    } else {
      setTheme(
        document.documentElement.classList.contains('dark')
          ? 'dark'
          : 'light'
      )
    }

    /* Scroll */
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<Language>
      setLanguage(customEvent.detail)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('languageChange', handleLanguageChange)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('languageChange', handleLanguageChange)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)

    localStorage.setItem('language', lang)

    window.dispatchEvent(
      new CustomEvent('languageChange', {
        detail: lang,
      })
    )
  }

  const toggleTheme = () => {
    const newTheme: Theme =
      theme === 'dark' ? 'light' : 'dark'

    setTheme(newTheme)

    localStorage.setItem('theme', newTheme)

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    document.documentElement.style.colorScheme = newTheme
  }

  const handleNavClick = (href: string) => {
    setMobileOpen(false)

    const element = document.querySelector(href)

    element?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const links = navLinks[language]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-slate-200/70 dark:border-white/5 shadow-sm dark:shadow-lg'
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
          aria-label="Back to top"
        >
          MÜA
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">

          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-3 py-2 text-sm text-slate-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}

          {/* Language Switcher */}
          <div className="ml-4 flex items-center gap-1 p-1 rounded-lg bg-slate-100/80 dark:bg-white/5 border border-slate-200 dark:border-white/10">

            <button
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                language === 'en'
                  ? 'bg-cyan-500/15 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400'
                  : 'text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              EN
            </button>

            <button
              onClick={() => changeLanguage('tr')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                language === 'tr'
                  ? 'bg-cyan-500/15 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400'
                  : 'text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              TR
            </button>

          </div>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="ml-2 w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
            aria-label={
              theme === 'dark'
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            title={
              theme === 'dark'
                ? 'Light mode'
                : 'Dark mode'
            }
          >
            {theme === 'dark' ? (
              /* Sun */
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              /* Moon */
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

        </div>

        {/* Mobile Right Controls */}
        <div className="md:hidden flex items-center gap-2">

          {/* Mobile Theme Button */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-700 dark:text-gray-300"
            aria-label={
              theme === 'dark'
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
          >
            {theme === 'dark' ? (
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-white"
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
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 px-6 pb-4">

          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-3 py-3 text-sm text-slate-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </button>
          ))}

          {/* Mobile Language Switcher */}
          <div className="flex gap-2 mt-3">

            <button
              onClick={() => changeLanguage('en')}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                language === 'en'
                  ? 'bg-cyan-500/15 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-gray-400'
              }`}
            >
              English
            </button>

            <button
              onClick={() => changeLanguage('tr')}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                language === 'tr'
                  ? 'bg-cyan-500/15 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-gray-400'
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
