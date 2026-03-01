import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white py-20 pt-32">
      <div className="flex flex-col items-center justify-center text-center px-4 animate-fadeInUp">
        {/* Profile Photo with Float Animation */}
        <div className="mb-8 animate-float">
          <div className="w-48 h-48 rounded-full border-4 border-black bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <svg
              className="w-full h-full text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">
          WALID ELMANSOURI
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-black tracking-widest mb-8">
          INFOGRAPHISTE MACHINISTE
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
          Graphic Designer & Digital Print Specialist
        </p>

        {/* CTA Button */}
        <button className="mt-12 px-8 py-3 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">
          <a href="#contact">Get In Touch</a>
        </button>
      </div>
    </section>
  );
}
