'use client'

import { useEffect, useState } from 'react'

type Language = 'en' | 'tr'

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

  useEffect(() => {
    // Siteyi her zaman DARK tut
    document.documentElement.classList.add('dark')
    document.documentElement.style.colorScheme = 'dark'
    localStorage.removeItem('theme')

    const savedLanguage = localStorage.getItem('language')

    if (savedLanguage === 'en' || savedLanguage === 'tr') {
      setLanguage(savedLanguage)
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
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
      window.removeEventListener(
        'languageChange',
        handleLanguageChange
      )
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

  const handleNavClick = (href: string) => {
    setMobileOpen(false)

    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const links = navLinks[language]

  return (
    <nav className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div className="mx-auto max-w-[1400px] px-4 pt-4 sm:px-8">

        {/* NAVBAR */}
        <div
          className={`
            pointer-events-auto
            flex items-center justify-between
            rounded-2xl
            border
            px-5
            transition-all duration-500
            ${
              scrolled
                ? `
                    border-white/[0.08]
                    bg-[#080808]/[0.88]
                    shadow-[0_8px_40px_rgba(0,0,0,0.40)]
                    backdrop-blur-2xl
                  `
                : `
                    border-white/[0.07]
                    bg-black/[0.38]
                    backdrop-blur-xl
                  `
            }
          `}
        >

          {/* LOGO */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
            className="
              py-4
              text-sm
              font-bold
              tracking-[0.22em]
              text-white
              transition-opacity
              hover:opacity-60
            "
            aria-label="Back to top"
          >
            MÜA
          </button>

          {/* DESKTOP */}
          <div className="hidden items-center md:flex">

            {/* NAV LINKS */}
            <div className="mr-5 flex items-center gap-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="
                    rounded-lg
                    px-3 py-2
                    text-[12px]
                    font-medium
                    text-white/45
                    transition-all duration-300
                    hover:bg-white/[0.05]
                    hover:text-white
                  "
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* DIVIDER */}
            <div className="mr-5 h-5 w-px bg-white/10" />

            {/* LANGUAGE */}
            <div
              className="
                flex items-center
                rounded-full
                border border-white/[0.08]
                bg-white/[0.05]
                p-[3px]
              "
            >
              <button
                onClick={() => changeLanguage('en')}
                className={`
                  rounded-full
                  px-3 py-1.5
                  text-[10px]
                  font-semibold
                  tracking-[0.08em]
                  transition-all duration-300
                  ${
                    language === 'en'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-white/40 hover:text-white'
                  }
                `}
              >
                EN
              </button>

              <button
                onClick={() => changeLanguage('tr')}
                className={`
                  rounded-full
                  px-3 py-1.5
                  text-[10px]
                  font-semibold
                  tracking-[0.08em]
                  transition-all duration-300
                  ${
                    language === 'tr'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-white/40 hover:text-white'
                  }
                `}
              >
                TR
              </button>
            </div>
          </div>

          {/* MOBILE */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                text-white/55
                transition-all
                hover:bg-white/[0.07]
                hover:text-white
              "
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                >
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            pointer-events-auto
            overflow-hidden
            transition-all duration-500
            md:hidden
            ${
              mobileOpen
                ? 'mt-2 max-h-[520px] opacity-100'
                : 'mt-0 max-h-0 opacity-0'
            }
          `}
        >
          <div
            className="
              rounded-2xl
              border border-white/[0.08]
              bg-[#080808]/[0.95]
              p-3
              shadow-xl
              backdrop-blur-2xl
            "
          >
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="
                  block w-full
                  rounded-xl
                  px-4 py-3
                  text-left
                  text-sm
                  font-medium
                  text-white/55
                  transition-all
                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                {link.label}
              </button>
            ))}

            <div className="my-3 h-px bg-white/[0.08]" />

            {/* MOBILE LANGUAGE */}
            <div className="flex gap-2">
              <button
                onClick={() => changeLanguage('en')}
                className={`
                  flex-1 rounded-xl py-2.5
                  text-xs font-semibold
                  transition-all
                  ${
                    language === 'en'
                      ? 'bg-white text-black'
                      : 'bg-white/[0.05] text-white/45'
                  }
                `}
              >
                English
              </button>

              <button
                onClick={() => changeLanguage('tr')}
                className={`
                  flex-1 rounded-xl py-2.5
                  text-xs font-semibold
                  transition-all
                  ${
                    language === 'tr'
                      ? 'bg-white text-black'
                      : 'bg-white/[0.05] text-white/45'
                  }
                `}
              >
                Türkçe
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
