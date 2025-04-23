import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 t0-purple-600 bg-clip-text text-transparent leading-right">
          Hi, I'm Naveed Khan
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          As a Frontend Developer with hands-on experience in HTML, CSS,
          JavaScript, React, and Tailwind CSS, I have developed responsive and
          interactive web applications, implementing features like dynamic
          content rendering, drag-and-drop functionality, and smooth animations.
        </p>

        <div className="flex justify-center space-x-4 ">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,24,0.4)"
          >
            {" "}
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,24,0.4)"
          >
            {" "}
            Contact Me
          </a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
