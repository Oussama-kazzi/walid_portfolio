import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Packaging pour parfum",
      date: "Sep 2025",
      description:
        "Design and creation of premium fragrance packaging with attention to aesthetic details and printing specifications.",
      icon: "📦",
    },
    {
      title:
        "Atelier de création de magazines - Mise en page et design éditorial",
      date: "Feb 2025",
      description:
        "Comprehensive magazine layout and editorial design workshop, focusing on typography, color theory, and page composition.",
      icon: "📰",
    },
    {
      title: "Atelier de création de logos",
      date: "Jan 2025",
      description:
        "Logo design workshop covering brand identity, vector graphics, and minimalist design principles.",
      icon: "✏️",
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12 text-center border-b-2 border-black pb-4 animate-fadeIn">
          Projects & Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border-2 border-black p-8 rounded-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp"
              style={{
                animationDelay: `${0.1 * (index + 1)}s`,
                animationFillMode: "both",
              }}
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm font-semibold mb-4 opacity-75">
                {project.date}
              </p>
              <p className="text-sm leading-relaxed opacity-90">
                {project.description}
              </p>
              <div className="mt-6 pt-4 border-t border-current opacity-50 group-hover:opacity-100 transition-opacity">
                <p className="text-xs font-semibold">Learn More →</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
