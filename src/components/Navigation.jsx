import React, { useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useContext(LanguageContext);

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.education, href: "#education" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-950 to-slate-900 border-b border-orange-500/20 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="block">
              <img
                src="/images/logo.png"
                alt="Walid Elmansouri logo"
                className="h-10 w-auto object-contain transition-opacity hover:opacity-80"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 font-medium hover:text-orange-500 transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            {/* CV Download */}
            <a
              href="/cv.pdf"
              download
              className="px-4 py-1.5 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-md transition-all text-sm"
            >
              {language === "en" ? "Download CV" : "Télécharger CV"}
            </a>
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 bg-orange-500/20 hover:bg-orange-500/30 text-orange-500 font-semibold border border-orange-500/50 rounded-md transition-all"
            >
              {language === "en" ? "FR" : "EN"}
            </button>
          </div>

          {/* Mobile menu button & Language Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 text-xs bg-orange-500/20 hover:bg-orange-500/30 text-orange-500 font-semibold border border-orange-500/50 rounded-md transition-all"
            >
              {language === "en" ? "FR" : "EN"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-orange-500 hover:bg-slate-800/50 focus:outline-none transition-colors"
            >
              <svg
                className={`h-6 w-6 transition-transform ${isOpen ? "rotate-90" : ""}`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-orange-500/20 bg-slate-900/95 backdrop-blur-md animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-white/80 font-medium hover:bg-slate-800 hover:text-orange-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/cv.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md bg-orange-500 hover:bg-orange-400 text-white font-semibold transition-colors text-sm"
            >
              {language === "en" ? "Download CV" : "Télécharger CV"}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
