'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },

  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window?.scrollY > 50)
    }
    window?.addEventListener?.('scroll', handleScroll)
    return () => window?.removeEventListener?.('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document?.querySelector?.(href)
    el?.scrollIntoView?.({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => {
            window?.scrollTo?.({ top: 0, behavior: 'smooth' })
          }}
          className="text-lg font-bold gradient-text tracking-tight"
        >
          MÜA
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks?.map?.((link: any) => (
            <button
              key={link?.href}
              onClick={() => handleNavClick(link?.href ?? '')}
              className="px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-white/5"
            >
              {link?.label ?? ''}
            </button>
          )) ?? null}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5 px-6 pb-4">
          {navLinks?.map?.((link: any) => (
            <button
              key={link?.href}
              onClick={() => handleNavClick(link?.href ?? '')}
              className="block w-full text-left px-3 py-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {link?.label ?? ''}
            </button>
          )) ?? null}
        </div>
      )}
    </nav>
  )
}
