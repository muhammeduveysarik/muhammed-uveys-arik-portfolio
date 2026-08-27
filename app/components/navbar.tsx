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

    if (savedLanguage === 'en' || savedLanguage === 'tr') {
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

    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const links = navLinks[language]

  return (
    <nav className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div className="mx-auto max-w-[1400px] px-4 pt-4 sm:px-8">

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
                  border-black/[0.08]
                  bg-white/[0.82]
                  shadow-[0_8px_40px_rgba(0,0,0,0.08)]
                  backdrop-blur-2xl
                  dark:border-white/[0.08]
                  dark:bg-[#080808]/[0.82]
                  dark:shadow-[0_8px_40px_rgba(0,0,0,0.35)]
                `
                : `
                  border-black/[0.06]
                  bg-white/[0.55]
                  backdrop-blur-xl
                  dark:border-white/[0.08]
                  dark:bg-black/[0.35]
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
              text-black
              transition-opacity
              hover:opacity-50
              dark:text-white
            "
            aria-label="Back to top"
          >
            MÜA
          </button>

          {/* DESKTOP */}

          <div className="hidden items-center md:flex">

            {/* LINKS */}

            <div className="mr-5 flex items-center gap-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() =>
                    handleNavClick(link.href)
                  }
                  className="
                    rounded-lg
                    px-3 py-2
                    text-[12px]
                    font-medium
                    text-black/45
                    transition-all duration-300
                    hover:bg-black/[0.04]
                    hover:text-black
                    dark:text-white/45
                    dark:hover:bg-white/[0.05]
                    dark:hover:text-white
                  "
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="mr-5 h-5 w-px bg-black/10 dark:bg-white/10" />

            {/* LANGUAGE */}

            <div className="
              flex items-center
              rounded-full
              border border-black/[0.07]
              bg-black/[0.035]
              p-[3px]
              dark:border-white/[0.08]
              dark:bg-white/[0.05]
            ">

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
                      ? `
                        bg-black text-white
                        shadow-sm
                        dark:bg-white dark:text-black
                      `
                      : `
                        text-black/40
                        hover:text-black
                        dark:text-white/40
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
                  rounded-full
                  px-3 py-1.5
                  text-[10px]
                  font-semibold
                  tracking-[0.08em]
                  transition-all duration-300
                  ${
                    language === 'tr'
                      ? `
                        bg-black text-white
                        shadow-sm
                        dark:bg-white dark:text-black
                      `
                      : `
                        text-black/40
                        hover:text-black
                        dark:text-white/40
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
                flex h-9 w-9
                items-center justify-center
                rounded-full
                text-black/50
                transition-all duration-300
                hover:bg-black/[0.05]
                hover:text-black
                dark:text-white/50
                dark:hover:bg-white/[0.07]
                dark:hover:text-white
              "
              aria-label={
                theme === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
            >
              {theme === 'dark' ? (

                /* SUN */

                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="M4.93 4.93l1.41 1.41" />
                  <path d="M17.66 17.66l1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="M6.34 17.66l-1.41 1.41" />
                  <path d="M19.07 4.93l-1.41 1.41" />
                </svg>

              ) : (

                /* MOON */

                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>

              )}
            </button>

          </div>

          {/* MOBILE CONTROLS */}

          <div className="flex items-center gap-1 md:hidden">

            <button
              onClick={toggleTheme}
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                text-black/55
                transition-all
                hover:bg-black/5
                dark:text-white/55
                dark:hover:bg-white/[0.07]
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
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <button
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                text-black/55
                transition-all
                hover:bg-black/5
                dark:text-white/55
                dark:hover:bg-white/[0.07]
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
              border border-black/[0.08]
              bg-white/[0.92]
              p-3
              shadow-xl
              backdrop-blur-2xl
              dark:border-white/[0.08]
              dark:bg-[#080808]/[0.92]
            "
          >

            {links.map((link) => (
              <button
                key={link.href}
                onClick={() =>
                  handleNavClick(link.href)
                }
                className="
                  block w-full
                  rounded-xl
                  px-4 py-3
                  text-left
                  text-sm
                  font-medium
                  text-black/55
                  transition-all
                  hover:bg-black/[0.04]
                  hover:text-black
                  dark:text-white/55
                  dark:hover:bg-white/[0.05]
                  dark:hover:text-white
                "
              >
                {link.label}
              </button>
            ))}

            <div className="my-3 h-px bg-black/[0.08] dark:bg-white/[0.08]" />

            <div className="flex gap-2">

              <button
                onClick={() =>
                  changeLanguage('en')
                }
                className={`
                  flex-1 rounded-xl py-2.5
                  text-xs font-semibold
                  transition-all
                  ${
                    language === 'en'
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'bg-black/[0.04] text-black/45 dark:bg-white/[0.05] dark:text-white/45'
                  }
                `}
              >
                English
              </button>

              <button
                onClick={() =>
                  changeLanguage('tr')
                }
                className={`
                  flex-1 rounded-xl py-2.5
                  text-xs font-semibold
                  transition-all
                  ${
                    language === 'tr'
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'bg-black/[0.04] text-black/45 dark:bg-white/[0.05] dark:text-white/45'
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
