import SectionWrapper from './section-wrapper'

export default function About() {
  return (
    <SectionWrapper id="about" className="py-24 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="glass-card rounded-xl p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="hidden sm:block mt-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                Hi, I&apos;m <strong className="text-white">Muhammed Üveys Arık</strong> — a Computer Engineering student with a genuine curiosity for how software and systems work under the hood. I&apos;m currently learning and steadily developing my technical skills as I progress through my degree.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                My interests span backend development, cloud technologies, Linux, computer networks, and embedded systems. I value continuous learning and clean, well-structured code, and I&apos;m always working to strengthen my engineering foundation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
