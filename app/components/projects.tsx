import SectionWrapper from './section-wrapper'

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="py-24 sm:py-32" delay={100}>
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
          <span className="gradient-text">Projects</span>
        </h2>
        <div className="glass-card rounded-xl p-8 sm:p-10 border-dashed border-2 border-white/10 hover:border-cyan-500/20 transition-all duration-300">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center bg-cyan-500/10">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Projects Coming Soon
            </h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Selected projects will be featured here as I continue to build and develop my skills. Please check back soon to see what I&apos;m working on.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
