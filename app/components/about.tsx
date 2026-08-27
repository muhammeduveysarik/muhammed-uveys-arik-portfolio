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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>

            <div>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                Hi, I&apos;m{' '}
                <strong className="text-white">
                  Muhammed Üveys Arık
                </strong>{' '}
                — a Computer Engineering student at Bilecik Şeyh Edebali
                University with a strong curiosity for technology and how
                different areas of computer engineering work together.
              </p>

              <p className="text-gray-400 text-base leading-relaxed mb-4">
                I&apos;m currently exploring and developing my skills across
                Data, Artificial Intelligence, DevOps, Cloud Computing, and
                Cybersecurity while continuing to strengthen my foundations
                in programming, algorithms, and software engineering.
              </p>

              <p className="text-gray-400 text-base leading-relaxed">
                I believe in learning by building. I actively work on
                hands-on projects, experiment with different technologies,
                and continuously improve my technical skills. My goal is to
                gain experience across multiple areas of computer engineering,
                understand how these technologies connect, and gradually
                develop deeper expertise through real-world projects.
              </p>
            </div>

          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
