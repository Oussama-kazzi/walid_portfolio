import React, { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { projectCategories, projects } from "../data/projects";

export default function ProjectsSection() {
  const { t, language } = useContext(LanguageContext);
  const [activeCategory, setActiveCategory] = useState("logos");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const filteredProjects = useMemo(
    () => projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * projectsPerPage;
    return filteredProjects.slice(start, start + projectsPerPage);
  }, [filteredProjects, currentPage]);

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center border-b border-orange-500/30 pb-4 animate-fadeIn">
          {t.projects.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[280px,1fr] gap-8">
          <aside className="dark-card rounded-xl p-4 h-fit animate-fadeInUp">
            <h3 className="text-white font-semibold mb-4 text-lg">
              {language === "en"
                ? "Project Categories"
                : "Catégories de Projets"}
            </h3>
            <div className="flex md:flex-col gap-3">
              {projectCategories.map((category) => {
                const label =
                  language === "en" ? category.labelEn : category.labelFr;
                const isActive = category.key === activeCategory;

                return (
                  <button
                    key={category.key}
                    onClick={() => {
                      setActiveCategory(category.key);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-3 rounded-lg text-left border transition-all duration-300 ${
                      isActive
                        ? "border-orange-500 bg-orange-500/15 text-orange-400"
                        : "border-orange-500/20 text-white/80 hover:border-orange-500/60 hover:text-orange-400"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </aside>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paginatedProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group dark-card rounded-xl overflow-hidden hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300 transform animate-fadeInUp"
                  style={{
                    animationDelay: `${0.1 * (index + 1)}s`,
                    animationFillMode: "both",
                  }}
                >
                  <img
                    src={project.image}
                    alt={language === "en" ? project.titleEn : project.titleFr}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {language === "en" ? project.titleEn : project.titleFr}
                    </h3>
                    <p className="text-sm text-orange-400/80 mb-5">
                      {language === "en"
                        ? project.subtitleEn
                        : project.subtitleFr}
                    </p>

                    <div className="flex justify-end">
                      <Link
                        to={`/projects/${project.id}`}
                        className="w-10 h-10 rounded-full border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center"
                        aria-label={
                          language === "en"
                            ? "Open project details"
                            : "Ouvrir les détails du projet"
                        }
                      >
                        →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`w-10 h-10 rounded-md border transition-all duration-300 ${
                      currentPage === index + 1
                        ? "border-orange-500 bg-orange-500 text-white"
                        : "border-orange-500/40 text-orange-400 hover:bg-orange-500/10"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 h-10 rounded-md border border-orange-500 text-orange-400 hover:bg-orange-500/10 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {language === "en" ? "Next" : "Suivant"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
