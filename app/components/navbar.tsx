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
    const savedLanguage = localStorage.getItem('language')

    if (savedLanguage === 'tr' || savedLanguage === 'en') {
      setLanguage(savedLanguage)
    }

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
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark'

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
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 pt-4">

          <div
            className={`
              pointer-events-auto
              flex items-center justify-between
              rounded-2xl
              px-4 sm:px-5
              transition-all duration-500
              border
              ${
                scrolled
                  ? `
                    bg-white/80 dark:bg-black/70
                    backdrop-blur-2xl
                    border-black/10 dark:border-white/10
                    shadow-[0_10px_40px_rgba(0,0,0,0.10)]
                    dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                  `
                  : `
                    bg-white/55 dark:bg-black/35
                    backdrop-blur-xl
                    border-black/5 dark:border-white/10
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
                py-3
                text-[15px]
                font-bold
                tracking-[0.16em]
                text-black dark:text-white
                transition-all duration-300
                hover:opacity-60
              "
              aria-label="Back to top"
            >
              MÜA
            </button>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center">

              <div className="flex items-center gap-1 mr-4">
                {links.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="
                      relative
                      px-3 py-2
                      text-[13px]
                      font-medium
                      text-black/55 dark:text-white/55
                      hover:text-black dark:hover:text-white
                      rounded-lg
                      hover:bg-black/[0.04]
                      dark:hover:bg-white/[0.06]
                      transition-all duration-300
                    "
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* DIVIDER */}
              <div className="w-px h-5 bg-black/10 dark:bg-white/10 mr-4" />

              {/* LANGUAGE */}
              <div className="
                flex items-center
                rounded-full
                p-[3px]
                bg-black/[0.04]
                dark:bg-white/[0.06]
                border border-black/[0.06]
                dark:border-white/[0.08]
              ">
                <button
                  onClick={() => changeLanguage('en')}
                  className={`
                    px-3 py-1.5
                    rounded-full
                    text-[11px]
                    font-semibold
                    tracking-wide
                    transition-all duration-300
                    ${
                      language === 'en'
                        ? `
                          bg-black text-white
                          dark:bg-white dark:text-black
                          shadow-sm
                        `
                        : `
                          text-black/45
                          dark:text-white/45
                          hover:text-black
                          dark:hover:text-white
                        `
                    }
                  `}
                >
                  EN
                </button>

                <button
                  onClick={() => changeLanguage('tr')}
                  className={`
                    px-3 py-1.5
                    rounded-full
                    text-[11px]
                    font-semibold
                    tracking-wide
                    transition-all duration-300
                    ${
                      language === 'tr'
                        ? `
                          bg-black text-white
                          dark:bg-white dark:text-black
                          shadow-sm
                        `
                        : `
                          text-black/45
                          dark:text-white/45
                          hover:text-black
                          dark:hover:text-white
                        `
                    }
                  `}
                >
                  TR
                </button>
              </div>

              {/* THEME */}
              <button
                onClick={toggleTheme}
                className="
                  ml-2
                  w-9 h-9
                  flex items-center justify-center
                  rounded-full
                  text-black/60 dark:text-white/60
                  hover:text-black dark:hover:text-white
                  hover:bg-black/[0.05]
                  dark:hover:bg-white/[0.08]
                  transition-all duration-300
                "
                aria-label={
                  theme === 'dark'
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }
              >
                {theme === 'dark' ? (
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
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
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>

            </div>

            {/* MOBILE */}
            <div className="md:hidden flex items-center gap-1">

              {/* MOBILE THEME */}
              <button
                onClick={toggleTheme}
                className="
                  w-9 h-9
                  flex items-center justify-center
                  rounded-full
                  text-black/60 dark:text-white/60
                  hover:bg-black/5
                  dark:hover:bg-white/10
                  transition-all
                "
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                ) : (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>

              {/* HAMBURGER */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="
                  w-9 h-9
                  flex items-center justify-center
                  rounded-full
                  text-black/60 dark:text-white/60
                  hover:text-black dark:hover:text-white
                  hover:bg-black/5
                  dark:hover:bg-white/10
                  transition-all
                "
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
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
              md:hidden
              pointer-events-auto
              overflow-hidden
              transition-all duration-500
              ${
                mobileOpen
                  ? 'max-h-[500px] opacity-100 mt-2'
                  : 'max-h-0 opacity-0 mt-0'
              }
            `}
          >
            <div
              className="
                rounded-2xl
                border border-black/10 dark:border-white/10
                bg-white/90 dark:bg-black/85
                backdrop-blur-2xl
                shadow-xl
                p-3
              "
            >

              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="
                    block w-full
                    text-left
                    px-4 py-3
                    rounded-xl
                    text-sm
                    font-medium
                    text-black/60 dark:text-white/60
                    hover:text-black dark:hover:text-white
                    hover:bg-black/[0.04]
                    dark:hover:bg-white/[0.06]
                    transition-all duration-300
                  "
                >
                  {link.label}
                </button>
              ))}

              <div className="h-px bg-black/10 dark:bg-white/10 my-3" />

              <div className="flex gap-2">

                <button
                  onClick={() => changeLanguage('en')}
                  className={`
                    flex-1 py-2.5
                    rounded-xl
                    text-xs font-semibold
                    transition-all
                    ${
                      language === 'en'
                        ? 'bg-black text-white dark:bg-white dark:text-black'
                        : 'bg-black/[0.04] dark:bg-white/[0.06] text-black/50 dark:text-white/50'
                    }
                  `}
                >
                  English
                </button>

                <button
                  onClick={() => changeLanguage('tr')}
                  className={`
                    flex-1 py-2.5
                    rounded-xl
                    text-xs font-semibold
                    transition-all
                    ${
                      language === 'tr'
                        ? 'bg-black text-white dark:bg-white dark:text-black'
                        : 'bg-black/[0.04] dark:bg-white/[0.06] text-black/50 dark:text-white/50'
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
    </>
  )
}
