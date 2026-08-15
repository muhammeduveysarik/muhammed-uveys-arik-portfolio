'use client'

import { useEffect, useRef, type ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  id?: string
  className?: string
  delay?: number
}

export default function SectionWrapper({ children, id, className = '', delay = 0 }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref?.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries?.forEach?.((entry: any) => {
          if (entry?.isIntersecting) {
            setTimeout(() => {
              el?.classList?.add?.('visible')
            }, delay)
            observer?.unobserve?.(el)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer?.observe?.(el)
    return () => observer?.disconnect?.()
  }, [delay])

  return (
    <section
      ref={ref}
      id={id}
      className={`animate-fade-up ${className}`}
    >
      {children}
    </section>
  )
}
