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

export default function SkillsSection() {
  const { t } = useContext(LanguageContext);
  const skillIcons = [
    {
      image: "/images/skills/photoshop.svg",
      fallback: PhotoshopIcon,
      alt: "Adobe Photoshop icon",
    },
    {
      image: "/images/skills/illustrator.svg",
      fallback: IllustratorIcon,
      alt: "Adobe Illustrator icon",
    },
    {
      image: "/images/skills/indesign.svg",
      fallback: InDesignIcon,
      alt: "Adobe InDesign icon",
    },
    {
      image: "/images/skills/digital-print.svg",
      fallback: PrintIcon,
      alt: "Digital printing icon",
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center border-b border-orange-500/30 pb-4 animate-fadeIn">
          {t.skills.title}
        </h2>

        {/* Technical Tools */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
            Design & Print Tools
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
            {t.skills.profesional.map((skill, idx) => {
              const iconConfig = skillIcons[idx] || skillIcons[3];
              const FallbackIcon = iconConfig.fallback;
              return (
                <div
                  key={skill.name}
                  className="group relative overflow-hidden rounded-2xl border border-orange-500/20 bg-gradient-to-br from-[#1a1d23]/95 to-[#2b2f38]/90 p-7 md:p-8 text-orange-500 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/70 hover:shadow-[0_18px_50px_rgba(255,140,66,0.2)] animate-fadeInUp"
                  style={{
                    animationDelay: `${0.1 + idx * 0.1}s`,
                    animationFillMode: "both",
                  }}
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="inline-flex h-7 items-center rounded-full border border-orange-500/35 px-3 text-xs tracking-wide text-orange-300/90">
                    {`0${idx + 1}`.slice(-2)}
                  </span>
                  <div className="mt-6 flex justify-center">
                    <img
                      src={iconConfig.image}
                      alt={iconConfig.alt}
                      className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const fallback = e.currentTarget.nextElementSibling;
                        if (fallback) {
                          fallback.style.display = "block";
                        }
                      }}
                    />
                    <div style={{ display: "none" }}>
                      <FallbackIcon />
                    </div>
                  </div>
                  <p className="mt-6 font-semibold text-center text-xl text-white">
                    {skill.name}
                  </p>
                  <p className="mt-2 text-center text-sm text-orange-200/75">
                    {skill.desc}
                  </p>
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
