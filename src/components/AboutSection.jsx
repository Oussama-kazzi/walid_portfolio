import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12 text-center border-b-2 border-black pb-4 animate-fadeIn">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div
            className="text-center p-6 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 animate-fadeInUp"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            <p className="text-3xl font-bold mb-2">1+</p>
            <p className="font-semibold">Years Experience</p>
          </div>
          <div
            className="text-center p-6 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 animate-fadeInUp"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            <p className="text-3xl font-bold mb-2">3+</p>
            <p className="font-semibold">Design Tools</p>
          </div>
          <div
            className="text-center p-6 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 animate-fadeInUp"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            <p className="text-3xl font-bold mb-2">100%</p>
            <p className="font-semibold">Quality Focused</p>
          </div>
        </div>

        <p
          className="text-lg text-black leading-relaxed text-center max-w-2xl mx-auto animate-fadeInUp"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          Graphic Designer and Print Machinist with 1+ years of experience.
          Specialized in digital printing, quality control, color management,
          and technical printing constraints.
        </p>
      </div>
    </section>
  );
}
