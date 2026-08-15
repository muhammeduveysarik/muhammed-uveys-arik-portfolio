import SectionWrapper from './section-wrapper'

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="py-24 sm:py-32" delay={100}>
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
          <span className="gradient-text">Get in Touch</span>
        </h2>
        <div className="glass-card rounded-xl p-8 sm:p-10 gradient-border">
          <div className="max-w-xl">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              I&apos;m always open to discussing new opportunities, interesting projects, or just connecting with fellow developers. Feel free to reach out!
            </p>
            <a
              href="mailto:muveysarik6@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span suppressHydrationWarning>muveysarik6@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
