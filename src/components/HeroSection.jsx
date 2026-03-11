import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function HeroSection() {
  const { t } = useContext(LanguageContext);
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 pt-32">
      <div className="flex flex-col items-center justify-center text-center px-4 animate-fadeInUp">
        {/* Profile Photo with Float Animation */}
        <div className="mb-8 animate-float">
          <div className="w-64 h-64 rounded-full border-4 border-orange-500 overflow-hidden neon-glow">
            <img
              src="/images/walid.JPG"
              alt="Walid Elmansouri"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          {t.hero.name}
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent tracking-widest mb-8">
          {t.hero.title}
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-white/60 max-w-xl leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* CTA Button */}
        <button className="mt-12 px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50">
          <a href="#contact" className="text-white no-underline">
            {t.hero.cta}
          </a>
        </button>
      </div>
    </section>
  );
}
