import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "Vue", "TypeScript", "TailwindCss", "Svelte"];
  const backendSkills = ["Node.js", "Express", "MongoDB", "JWT", "bcrypt"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="glass rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            As a Frontend Developer with hands-on experience in HTML, CSS, JavaScript, React, and Tailwind CSS,
            I have developed responsive and interactive web applications, implementing smooth animations,
            dynamic content, and API integrations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education & Work Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>BS in Computer Science</strong> — University of Education (2023–2027)
              </li>
              <li>
                Relevant courses: Data Structures, Web Development, Cloud Computing...
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">Software Engineer at ABC Corp (2025–Present)</h4>
                <p>
                  Developed and maintained microservices for cloud-based applications.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Intern at DEF Startups (2024)</h4>
                <p>
                  Assisted in developing scalable REST APIs and participated in agile sprints.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      </RevealOnScroll>
    </section>
  );
};
