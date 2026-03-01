import React from "react";

// Minimalist SVG Icons
const PhotoshopIcon = () => (
  <svg
    className="w-16 h-16 transition-transform group-hover:scale-110"
    viewBox="0 0 100 100"
    fill="none"
    stroke="black"
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
    stroke="black"
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
    stroke="black"
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
    stroke="black"
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
    stroke="black"
    strokeWidth="2"
  >
    <circle cx="50" cy="50" r="35" />
    <circle cx="50" cy="50" r="10" fill="black" />
    <path d="M 50 25 L 60 35 L 50 45 L 40 35 Z" fill="black" />
    <path d="M 75 50 L 65 60 L 55 50 L 65 40 Z" fill="black" opacity="0.5" />
  </svg>
);

const QualityIcon = () => (
  <svg
    className="w-16 h-16 transition-transform group-hover:scale-110"
    viewBox="0 0 100 100"
    fill="none"
    stroke="black"
    strokeWidth="2"
  >
    <path d="M 50 10 L 90 25 L 90 50 C 90 75 50 90 50 90 C 50 90 10 75 10 50 L 10 25 Z" />
    <path d="M 35 50 L 45 60 L 65 40" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function SkillsSection() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12 text-center border-b-2 border-black pb-4 animate-fadeIn">
          Skills
        </h2>

        {/* Technical Tools */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-black mb-10 text-center">
            Design & Print Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Adobe Photoshop */}
            <div className="group flex flex-col items-center justify-center p-8 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:shadow-xl animate-fadeInUp"
              style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <PhotoshopIcon />
              <p className="mt-6 font-semibold text-center text-lg">Adobe Photoshop</p>
              <p className="mt-2 text-sm opacity-75">Digital Editing</p>
            </div>

            {/* Adobe Illustrator */}
            <div className="group flex flex-col items-center justify-center p-8 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:shadow-xl animate-fadeInUp"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <IllustratorIcon />
              <p className="mt-6 font-semibold text-center text-lg">Adobe Illustrator</p>
              <p className="mt-2 text-sm opacity-75">Vector Graphics</p>
            </div>

            {/* Adobe InDesign */}
            <div className="group flex flex-col items-center justify-center p-8 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:shadow-xl animate-fadeInUp"
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <InDesignIcon />
              <p className="mt-6 font-semibold text-center text-lg">Adobe InDesign</p>
              <p className="mt-2 text-sm opacity-75">Page Layout</p>
            </div>
          </div>

          {/* Specialized Skills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Digital Printing */}
            <div className="group flex flex-col items-center justify-center p-8 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:shadow-xl animate-fadeInUp"
              style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <PrintIcon />
              <p className="mt-6 font-semibold text-center text-lg">Digital Printing</p>
              <p className="mt-2 text-sm opacity-75">Print Production</p>
            </div>

            {/* Color Management */}
            <div className="group flex flex-col items-center justify-center p-8 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:shadow-xl animate-fadeInUp"
              style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              <ColorIcon />
              <p className="mt-6 font-semibold text-center text-lg">Color Management</p>
              <p className="mt-2 text-sm opacity-75">Color Theory</p>
            </div>

            {/* Quality Control */}
            <div className="group flex flex-col items-center justify-center p-8 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:shadow-xl animate-fadeInUp"
              style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              <QualityIcon />
              <p className="mt-6 font-semibold text-center text-lg">Quality Control</p>
              <p className="mt-2 text-sm opacity-75">Standards & Testing</p>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-2xl font-bold text-black mb-10 text-center">
            Languages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="p-6 border-2 border-black rounded-lg text-center hover:bg-black hover:text-white transition-all duration-300 transform hover:shadow-lg animate-fadeInUp"
              style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <p className="font-bold text-lg">Arabic</p>
              <p className="text-sm opacity-75 mt-2">Native</p>
              <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                <div className="bg-black h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="p-6 border-2 border-black rounded-lg text-center hover:bg-black hover:text-white transition-all duration-300 transform hover:shadow-lg animate-fadeInUp"
              style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
              <p className="font-bold text-lg">French</p>
              <p className="text-sm opacity-75 mt-2">Fluent</p>
              <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                <div className="bg-black h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="p-6 border-2 border-black rounded-lg text-center hover:bg-black hover:text-white transition-all duration-300 transform hover:shadow-lg animate-fadeInUp"
              style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
              <p className="font-bold text-lg">English</p>
              <p className="text-sm opacity-75 mt-2">Proficient</p>
              <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                <div className="bg-black h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
            <div className="p-4 border-2 border-black rounded text-center">
              <p className="font-semibold">English</p>
              <p className="text-sm text-gray-700">Bien</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
