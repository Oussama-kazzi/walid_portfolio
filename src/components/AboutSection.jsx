import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function AboutSection() {
  const { t } = useContext(LanguageContext);
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center border-b border-orange-500/30 pb-4 animate-fadeIn">
          {t.about.title}
        </h2>

        <p
          className="text-lg text-white/70 leading-relaxed text-center max-w-2xl mx-auto animate-fadeInUp"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          {t.about.bio}
        </p>
      </div>
    </section>
  );
}
