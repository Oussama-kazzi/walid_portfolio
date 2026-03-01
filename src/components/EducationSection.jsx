import React from "react";

export default function EducationSection() {
  const education = [
    {
      school: "CMC, Agadir",
      field: "Impression numérique",
      years: "2024 - Aujourd'hui",
      icon: "🎓",
    },
    {
      school: "FSJES",
      field: "Économie",
      years: "2022 - 2024",
      icon: "📚",
    },
    {
      school: "Lycée Haj said",
      field: "Baccalauréat",
      years: "2021 - 2022",
      icon: "🏫",
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12 text-center border-b-2 border-black pb-4 animate-fadeIn">
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group border-l-4 border-black pl-6 py-4 hover:bg-gray-50 transition-all duration-300 rounded-r-lg animate-fadeInUp"
              style={{
                animationDelay: `${0.1 * (index + 1)}s`,
                animationFillMode: "both",
              }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                  {edu.icon}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-black transition-colors">
                    {edu.school}
                  </h3>
                  <p className="text-lg text-black mb-1 font-semibold">
                    {edu.field}
                  </p>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                    {edu.years}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
