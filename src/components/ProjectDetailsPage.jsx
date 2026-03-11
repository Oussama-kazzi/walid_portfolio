import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { projectCategories, projects } from "../data/projects";

export default function ProjectDetailsPage() {
  const { projectId } = useParams();
  const { language } = useContext(LanguageContext);
  const [selectedImage, setSelectedImage] = useState(null);

  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-24 flex items-center justify-center">
        <div className="dark-card rounded-xl p-10 text-center max-w-xl w-full">
          <h1 className="text-3xl text-white font-bold mb-4">
            {language === "en" ? "Project not found" : "Projet introuvable"}
          </h1>
          <Link
            to="/"
            className="inline-flex px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-400 transition-colors"
          >
            {language === "en" ? "Back to Home" : "Retour à l'accueil"}
          </Link>
        </div>
      </section>
    );
  }

  const category = projectCategories.find(
    (item) => item.key === project.category,
  );
  const projectImages =
    project.images && project.images.length > 0
      ? project.images
      : [project.image];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex px-5 py-2 rounded-lg border border-orange-500/60 text-orange-400 hover:bg-orange-500/10 transition-colors"
          >
            {language === "en" ? "← Back" : "← Retour"}
          </Link>
          <span className="text-sm text-orange-400/80">
            {language === "en" ? category?.labelEn : category?.labelFr}
          </span>
        </div>

        <article className="dark-card rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6">
            {projectImages.map((imageSrc, index) => (
              <button
                type="button"
                key={imageSrc}
                onClick={() => setSelectedImage(imageSrc)}
                className={`rounded-xl overflow-hidden bg-slate-100 ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <img
                  src={imageSrc}
                  alt={`${language === "en" ? project.titleEn : project.titleFr} ${index + 1}`}
                  className="w-full h-[300px] md:h-[420px] object-contain hover:scale-[1.01] transition-transform cursor-zoom-in"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          <div className="p-8 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {language === "en" ? project.titleEn : project.titleFr}
            </h1>
            <p className="text-orange-400/80 text-lg mb-6">
              {language === "en" ? project.subtitleEn : project.subtitleFr}
            </p>
            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              {language === "en"
                ? project.descriptionEn
                : project.descriptionFr}
            </p>
          </div>
        </article>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 px-3 py-1 rounded-md border border-orange-500/60 text-orange-400 hover:bg-orange-500/10"
          >
            {language === "en" ? "Close" : "Fermer"}
          </button>
          <img
            src={selectedImage}
            alt={language === "en" ? project.titleEn : project.titleFr}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(event) => event.stopPropagation()}
            loading="eager"
          />
        </div>
      )}
    </section>
  );
}
