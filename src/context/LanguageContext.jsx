import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    // Hero Section
    hero: {
      name: "WALID ELMANSOURI",
      title: "INFOGRAPHISTE MACHINISTE",
      subtitle: "Graphic Designer & Digital Print Specialist",
      cta: "Get In Touch",
    },
    // About Section
    about: {
      title: "About Me",
      stats: [
        { label: "Years Experience", value: "1+" },
        { label: "Tools Mastered", value: "3+" },
        { label: "Quality Standard", value: "100%" },
      ],
      bio: "Creative and detail-oriented graphic designer and print machinist with expertise in Adobe Creative Suite and digital printing. Passionate about transforming ideas into compelling visual designs.",
    },
    // Skills Section
    skills: {
      title: "Skills",
      profesional: [
        { name: "Photoshop", desc: "Image editing & design" },
        { name: "Illustrator", desc: "Vector graphics" },
        { name: "InDesign", desc: "Layout & publishing" },
        { name: "Digital Printing", desc: "Print production" },
        { name: "Color Management", desc: "Color accuracy" },
        { name: "Quality Control", desc: "Standards & QA" },
      ],
      languages: [
        { name: "Arabic", level: "Native" },
        { name: "French", level: "Fluent" },
        { name: "English", level: "Proficient" },
      ],
    },
    // Projects Section
    projects: {
      title: "Recent Projects",
      items: [
        {
          title: "Packaging Design",
          date: "2024",
          description:
            "Created elegant packaging for premium parfum collection",
        },
        {
          title: "Magazine Creation",
          date: "2024",
          description: "Designed and produced full-color magazine layouts",
        },
        {
          title: "Logo Workshop",
          date: "2023",
          description: "Developed brand identity and logo designs",
        },
      ],
    },
    // Education Section
    education: {
      title: "Education",
      items: [
        {
          name: "CMC Agadir",
          field: "Graphic Design & Print",
          year: "2022-2023",
        },
        {
          name: "FSJES",
          field: "Business & Management",
          year: "2020-2022",
        },
        {
          name: "Lycée Haj Said",
          field: "General Education",
          year: "2018-2020",
        },
      ],
    },
    // Contact Section
    contact: {
      title: "Get In Touch",
      location: "Agadir Drarga",
      email: "Walinavara337@gmail.com",
      phone: "+212 646329748",
    },
  },
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      education: "Éducation",
      contact: "Contact",
    },
    // Hero Section
    hero: {
      name: "WALID ELMANSOURI",
      title: "INFOGRAPHISTE MACHINISTE",
      subtitle: "Designer Graphique & Spécialiste en Impression Numérique",
      cta: "Me Contacter",
    },
    // About Section
    about: {
      title: "À Propos",
      stats: [
        { label: "Années d'Expérience", value: "1+" },
        { label: "Outils Maîtrisés", value: "3+" },
        { label: "Normes de Qualité", value: "100%" },
      ],
      bio: "Designer graphique créatif et attentif aux détails avec expertise en Adobe Creative Suite et impression numérique. Passionné par transformer les idées en designs visuels captivants.",
    },
    // Skills Section
    skills: {
      title: "Compétences",
      profesional: [
        { name: "Photoshop", desc: "Édition d'images & design" },
        { name: "Illustrator", desc: "Graphiques vectoriels" },
        { name: "InDesign", desc: "Mise en page & édition" },
        { name: "Impression Numérique", desc: "Production d'impression" },
        { name: "Gestion des Couleurs", desc: "Précision des couleurs" },
        { name: "Contrôle de Qualité", desc: "Normes & QA" },
      ],
      languages: [
        { name: "Arabe", level: "Natif" },
        { name: "Français", level: "Courant" },
        { name: "Anglais", level: "Compétent" },
      ],
    },
    // Projects Section
    projects: {
      title: "Projets Récents",
      items: [
        {
          title: "Conception d'Emballage",
          date: "2024",
          description:
            "Création d'emballage élégant pour une collection de parfum haut de gamme",
        },
        {
          title: "Création de Magazine",
          date: "2024",
          description:
            "Conception et production de mises en page de magazine en couleur",
        },
        {
          title: "Atelier de Logo",
          date: "2023",
          description:
            "Développement d'identité de marque et de conceptions de logo",
        },
      ],
    },
    // Education Section
    education: {
      title: "Éducation",
      items: [
        {
          name: "CMC Agadir",
          field: "Design Graphique & Impression",
          year: "2022-2023",
        },
        {
          name: "FSJES",
          field: "Commerce & Gestion",
          year: "2020-2022",
        },
        {
          name: "Lycée Haj Said",
          field: "Éducation Générale",
          year: "2018-2020",
        },
      ],
    },
    // Contact Section
    contact: {
      title: "Me Contacts",
      location: "Agadir Drarga",
      email: "Walinavara337@gmail.com",
      phone: "+212 646329748",
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
