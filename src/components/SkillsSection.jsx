import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

// Minimalist SVG Icons - Orange theme
const PhotoshopIcon = () => (
  <svg
    className="w-16 h-16 transition-transform group-hover:scale-110"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="10" y="10" width="80" height="80" rx="5" />
    <circle cx="35" cy="35" r="15" />
    <path d="M 50 25 L 50 45 M 45 35 L 55 35" strokeLinecap="round" />
    <path d="M 30 60 L 70 60 M 30 70 L 70 70" strokeLinecap="round" />
  </svg>
);

const IllustratorIcon = () => (
  <svg
    className="w-16 h-16 transition-transform group-hover:scale-110"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="10" y="10" width="80" height="80" rx="5" />
    <path d="M 50 20 L 65 60 L 35 60 Z" />
    <path d="M 45 45 L 55 45" strokeLinecap="round" />
    <path d="M 30 70 L 45 70 L 50 55 L 55 70 L 70 70" strokeLinecap="round" />
  </svg>
);

const InDesignIcon = () => (
  <svg
    className="w-16 h-16 transition-transform group-hover:scale-110"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="10" y="10" width="80" height="80" rx="5" />
    <rect x="20" y="25" width="60" height="50" />
    <line x1="30" y1="35" x2="70" y2="35" strokeLinecap="round" />
    <line x1="30" y1="45" x2="70" y2="45" strokeLinecap="round" />
    <line x1="30" y1="55" x2="70" y2="55" strokeLinecap="round" />
    <line x1="30" y1="65" x2="50" y2="65" strokeLinecap="round" />
  </svg>
);

const PrintIcon = () => (
  <svg
    className="w-16 h-16 transition-transform group-hover:scale-110"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="15" y="20" width="70" height="60" rx="3" />
    <line x1="20" y1="50" x2="80" y2="50" strokeLinecap="round" />
    <line x1="20" y1="60" x2="80" y2="60" strokeLinecap="round" />
    <line x1="20" y1="70" x2="60" y2="70" strokeLinecap="round" />
    <path d="M 30 80 L 30 85 M 70 80 L 70 85" strokeLinecap="round" />
  </svg>
);

const ColorIcon = () => (
  <svg
    className="w-16 h-16 transition-transform group-hover:scale-110"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="50" cy="50" r="35" />
    <circle cx="50" cy="50" r="10" fill="currrentColor" />
    <path d="M 50 25 L 60 35 L 50 45 L 40 35 Z" fill="currentColor" />
    <path
      d="M 75 50 L 65 60 L 55 50 L 65 40 Z"
      fill="currentColor"
      opacity="0.5"
    />
  </svg>
);

const QualityIcon = () => (
  <svg
    className="w-16 h-16 transition-transform group-hover:scale-110"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M 50 10 L 90 25 L 90 50 C 90 75 50 90 50 90 C 50 90 10 75 10 50 L 10 25 Z" />
    <path
      d="M 35 50 L 45 60 L 65 40"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function SkillsSection() {
  const { t } = useContext(LanguageContext);

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center border-b border-orange-500/30 pb-4 animate-fadeIn">
          {t.skills.title}
        </h2>

        {/* Technical Tools */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-10 text-center">
            Design & Print Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {t.skills.profesional.slice(0, 3).map((skill, idx) => {
              const icons = [PhotoshopIcon, IllustratorIcon, InDesignIcon];
              const Icon = icons[idx];
              return (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-8 dark-card rounded-xl hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp text-orange-500"
                  style={{
                    animationDelay: `${0.1 + idx * 0.1}s`,
                    animationFillMode: "both",
                  }}
                >
                  <Icon />
                  <p className="mt-6 font-semibold text-center text-lg text-white">
                    {skill.name}
                  </p>
                  <p className="mt-2 text-sm opacity-60">{skill.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Specialized Skills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.skills.profesional.slice(3).map((skill, idx) => {
              const icons = [PrintIcon, ColorIcon, QualityIcon];
              const Icon = icons[idx];
              return (
                <div
                  key={idx + 3}
                  className="group flex flex-col items-center justify-center p-8 dark-card rounded-xl hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp text-orange-500"
                  style={{
                    animationDelay: `${0.4 + idx * 0.1}s`,
                    animationFillMode: "both",
                  }}
                >
                  <Icon />
                  <p className="mt-6 font-semibold text-center text-lg text-white">
                    {skill.name}
                  </p>
                  <p className="mt-2 text-sm opacity-60">{skill.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-10 text-center">
            {t.skills.title === "Skills" ? "Languages" : "Langues"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {t.skills.languages.map((lang, idx) => (
              <div
                key={idx}
                className="p-6 dark-card rounded-lg text-center hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp"
                style={{
                  animationDelay: `${0.7 + idx * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                <p className="font-bold text-lg text-white">{lang.name}</p>
                <p className="text-sm text-orange-500/70 mt-2">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
