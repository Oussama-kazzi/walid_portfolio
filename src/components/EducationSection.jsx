import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function EducationSection() {
  const { t } = useContext(LanguageContext);

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center border-b border-orange-500/30 pb-4 animate-fadeIn">
          {t.education.title}
        </h2>

        <div className="space-y-6">
          {t.education.items.map((edu, index) => {
            const icons = ["🎓", "📚", "🏫"];
            return (
              <div
                key={index}
                className="group border-l-4 border-orange-500 pl-6 py-4 hover:bg-orange-500/5 transition-all duration-300 rounded-r-lg animate-fadeInUp dark-card"
                style={{
                  animationDelay: `${0.1 * (index + 1)}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                    {icons[index]}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {edu.name}
                    </h3>
                    <p className="text-lg text-white/80 mb-1 font-semibold">
                      {edu.field}
                    </p>
                    <p className="text-sm text-orange-500/60 group-hover:text-orange-400 transition-colors">
                      {edu.year}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
