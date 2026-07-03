function App() {
  const projects = [
    {
      type: 'AI Application',
      title: 'NegotiAI',
      description:
        'An AI-powered negotiation practice app built during an 8-day challenge. It helps users practise negotiation scenarios and improve responses.',
      tags: ['Python', 'AI', 'Gradio'],
      link: 'https://github.com/vishnu220506',
    },
    {
      type: 'ERP Development',
      title: 'Odoo Real Estate Module',
      description:
        'A custom Odoo module with property listings, offers, tags, access rights, validations, computed fields, and property status workflows.',
      tags: ['Odoo', 'Python', 'XML'],
      link: 'https://github.com/vishnu220506/odoo-real-estate-module',
    },
    {
      type: 'Web Development',
      title: 'Personal Portfolio',
      description:
        'A modern portfolio website built with React, Tailwind CSS, GitHub Pages, and smooth UI styling.',
      tags: ['React', 'Tailwind', 'Vite'],
      link: 'https://vishnu220506.github.io/vishnu-portfolio/',
    },
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-white/10 bg-slate-950/80 px-6 py-4 backdrop-blur-xl md:px-10">
        <a href="#" className="text-sm font-bold tracking-[0.35em] text-cyan-300">
          SVK
        </a>

        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          <a href="#about" className="hover:text-cyan-300">About</a>
          <a href="#projects" className="hover:text-cyan-300">Projects</a>
          <a href="#journey" className="hover:text-cyan-300">Journey</a>
          <a href="#skills" className="hover:text-cyan-300">Skills</a>
          <a href="#contact" className="hover:text-cyan-300">Contact</a>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 font-semibold text-cyan-200 hover:bg-cyan-400 hover:text-slate-950"
          >
            Resume
          </a>
        </div>
      </nav>

      <section className="relative min-h-screen overflow-hidden px-6 pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0e7490_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#312e81_0%,transparent_35%)] opacity-40" />

        <div className="absolute left-[12%] top-[25%] h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
        <div className="absolute right-[18%] top-[35%] h-2 w-2 animate-pulse rounded-full bg-blue-300" />
        <div className="absolute left-[25%] bottom-[22%] h-2 w-2 animate-pulse rounded-full bg-purple-300" />
        <div className="absolute right-[32%] bottom-[18%] h-2 w-2 animate-pulse rounded-full bg-cyan-200" />

        <div className="relative z-10 flex min-h-[75vh] items-center justify-center">
          <div className="max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Personal Portfolio
            </p>

            <h1 className="mt-8 text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              Shreevishnu Kotthuri
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-300 md:text-2xl">
              Building practical AI, ERP, and web projects through hands-on Computer Science learning.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-400 md:text-lg">
              BSc (Hons) Computer Science student at Heriot-Watt University Dubai,
              preparing to specialise in Artificial Intelligence.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {['Artificial Intelligence', 'React', 'Python', 'Odoo ERP'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-8 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/20 hover:bg-cyan-300"
              >
                Explore Projects →
              </a>

              <a
                href="#journey"
                className="rounded-full border border-slate-600 px-8 py-3 text-sm font-bold text-slate-200 hover:border-cyan-300 hover:text-cyan-300"
              >
                View Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-cyan-400/30 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
            <div className="flex items-center justify-between">
              <span className="rounded-2xl bg-cyan-400/10 p-3 text-2xl">👤</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Active</span>
            </div>
            <h3 className="mt-5 text-xl font-bold">Mission Control</h3>
            <p className="mt-2 text-sm text-slate-400">About Me</p>
            <p className="mt-5 leading-7 text-slate-300">
              Computer Science student focused on building practical projects across AI,
              ERP systems, and modern web development.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-400/30 bg-slate-900/70 p-6 shadow-2xl shadow-blue-950/20">
            <div className="flex items-center justify-between">
              <span className="rounded-2xl bg-blue-400/10 p-3 text-2xl">💻</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">Active</span>
            </div>
            <h3 className="mt-5 text-xl font-bold">Technical Arsenal</h3>
            <p className="mt-2 text-sm text-slate-400">Core Technologies</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Python', 'React', 'JavaScript', 'Odoo', 'GitHub', 'Tailwind'].map((item) => (
                <span key={item} className="rounded-lg bg-slate-800 px-3 py-1 text-sm text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-purple-400/30 bg-slate-900/70 p-6 shadow-2xl shadow-purple-950/20">
            <div className="flex items-center justify-between">
              <span className="rounded-2xl bg-purple-400/10 p-3 text-2xl">✉️</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-purple-300">Ready</span>
            </div>
            <h3 className="mt-5 text-xl font-bold">Open Channels</h3>
            <p className="mt-2 text-sm text-slate-400">Get in Touch</p>
            <p className="mt-5 leading-7 text-slate-300">
              Open to student projects, collaboration, internships, and learning opportunities
              related to AI and software development.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-5xl gap-6 text-center md:grid-cols-4">
          <div>
            <p className="text-4xl font-extrabold text-cyan-300">3+</p>
            <p className="mt-2 text-sm text-slate-400">Projects Built</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-cyan-300">8-Day</p>
            <p className="mt-2 text-sm text-slate-400">AI Challenge Completed</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-cyan-300">1</p>
            <p className="mt-2 text-sm text-slate-400">Odoo ERP Module</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-cyan-300">BSc</p>
            <p className="mt-2 text-sm text-slate-400">Computer Science</p>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            About Me
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-2xl shadow-cyan-950/20">
              <h2 className="text-3xl font-bold md:text-4xl">
                Building practical skills across AI, ERP, and web development.
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                I am studying BSc (Hons) Computer Science at Heriot-Watt University Dubai.
                My current focus is strengthening my programming, software development,
                and problem-solving skills while preparing for an Artificial Intelligence
                specialisation in the later stage of my degree.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                I enjoy building practical projects that connect technical learning with
                real use cases, including AI applications, Odoo ERP modules, and modern web interfaces.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6">
                <p className="text-3xl font-bold text-cyan-300">01</p>
                <p className="mt-2 text-slate-300">AI-focused learning path</p>
              </div>
              <div className="rounded-3xl border border-blue-400/20 bg-blue-400/10 p-6">
                <p className="text-3xl font-bold text-blue-300">02</p>
                <p className="mt-2 text-slate-300">Hands-on project building</p>
              </div>
              <div className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6">
                <p className="text-3xl font-bold text-purple-300">03</p>
                <p className="mt-2 text-slate-300">ERP and web application experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Projects
          </p>

          <h2 className="mt-6 text-3xl font-bold md:text-4xl">
            Practical projects I have built and worked on.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-950/20"
              >
                <p className="text-sm text-cyan-300">{project.type}</p>
                <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Learning Journey
          </p>

          <h2 className="mt-6 text-3xl font-bold md:text-4xl">
            My current academic and technical path.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              ['🎓', 'Heriot-Watt University Dubai', 'BSc (Hons) Computer Science'],
              ['🧠', 'Artificial Intelligence Pathway', 'Planned specialisation'],
              ['✨', 'AI Challenge Project', 'NegotiAI'],
              ['⚙️', 'Odoo Technical Bootcamp', 'ERP module development'],
            ].map(([icon, title, subtitle]) => (
              <div key={title} className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                <p className="text-3xl">{icon}</p>
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-slate-400">{subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Skills
          </p>

          <h2 className="mt-6 text-3xl font-bold md:text-4xl">
            Technologies and areas I am developing.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              ['Programming', ['Python', 'JavaScript', 'React', 'HTML & CSS']],
              ['AI & Data', ['AI Applications', 'Prompt Design', 'Problem Solving', 'Learning AI Concepts']],
              ['ERP', ['Odoo Modules', 'Odoo ORM', 'XML Views', 'Business Workflows']],
              ['Tools', ['GitHub', 'VS Code', 'Vite', 'Tailwind CSS']],
            ].map(([title, items]) => (
              <div key={title} className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-xl font-bold text-cyan-300">{title}</h3>
                <ul className="mt-4 space-y-3 text-slate-300">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Contact
          </p>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            Let’s connect.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            I am open to learning opportunities, student projects, collaboration,
            internships, and technical discussions related to AI, software development,
            ERP systems, and web applications.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="mailto:skotthuri@gmail.com" className="rounded-full bg-cyan-400 px-8 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-300">
              Email Me
            </a>
            <a href="https://github.com/vishnu220506" target="_blank" rel="noreferrer" className="rounded-full border border-slate-600 px-8 py-3 text-sm font-bold text-slate-200 hover:border-cyan-300 hover:text-cyan-300">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/shreevishnu-kotthuri" target="_blank" rel="noreferrer" className="rounded-full border border-slate-600 px-8 py-3 text-sm font-bold text-slate-200 hover:border-cyan-300 hover:text-cyan-300">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Shreevishnu Kotthuri. Built with React and Tailwind CSS.
      </footer>
    </main>
  )
}

export default App