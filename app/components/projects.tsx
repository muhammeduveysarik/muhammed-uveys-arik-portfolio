import SectionWrapper from "./section-wrapper"

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="py-24 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10">
          <span className="gradient-text">Projects</span>
        </h2>

        <div className="flex flex-col gap-6">

          {/* DevOps Project */}
          <div className="glass-card rounded-xl p-8 sm:p-10">
            <div className="flex flex-col gap-6">
              <div>
                <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                  DevOps Project
                </span>

                <h3 className="mt-4 text-2xl font-semibold text-white">
                  DevOps Status Dashboard
                </h3>

                <p className="mt-3 max-w-3xl text-gray-400 leading-relaxed">
                  Docker container içerisinde çalışan Flask tabanlı durum takip
                  uygulaması. Projede servis sağlık kontrolü, Gunicorn production
                  sunucusu, Docker Compose ve GitHub Actions ile otomatik CI
                  pipeline bulunmaktadır.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "Docker",
                  "Docker Compose",
                  "Python",
                  "Flask",
                  "Gunicorn",
                  "GitHub Actions",
                  "CI/CD",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-white/5 px-3 py-1.5 text-sm text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div>
                <a
                  href="https://github.com/muhammeduveysarik/devops-status-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
                >
                  GitHub&apos;da Görüntüle ↗
                </a>
              </div>
            </div>
          </div>

          {/* KariyerAI Project */}
          <div className="glass-card rounded-xl p-8 sm:p-10">
            <div className="flex flex-col gap-6">
              <div>
                <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                  AI Project
                </span>

                <h3 className="mt-4 text-2xl font-semibold text-white">
                  KariyerAI
                </h3>

                <p className="mt-3 max-w-3xl text-gray-400 leading-relaxed">
                  Yapay zekâ destekli özgeçmiş ve iş başvuru asistanı.
                  Kullanıcıların kariyer süreçlerini desteklemek amacıyla
                  geliştirilen web tabanlı bir yapay zekâ projesidir.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "AI",
                  "Flask",
                  "Vercel",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-white/5 px-3 py-1.5 text-sm text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://kariyerai.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
                >
                  Canlı Site ↗
                </a>

                <a
                  href="https://github.com/muhammeduveysarik/kariyerai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  GitHub&apos;da Görüntüle ↗
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  )
}
