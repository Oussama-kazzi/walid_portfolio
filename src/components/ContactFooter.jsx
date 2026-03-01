import React from "react";

export default function ContactFooter() {
  return (
    <footer className="w-full py-20 px-4 bg-white border-t-2 border-black">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h2 className="text-4xl font-bold text-black mb-12 animate-fadeIn">Contact Me</h2>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl animate-fadeInUp">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
            {/* Location */}
            <div className="flex flex-col items-center p-6 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:shadow-lg animate-fadeInUp"
              style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <svg
                className="w-8 h-8 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
              <p className="text-sm font-semibold opacity-75 mb-1">Location</p>
              <p className="font-bold text-lg">Agadir, Drarga</p>
              <p className="text-sm opacity-75 mt-1">Morocco</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center p-6 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:shadow-lg animate-fadeInUp"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <svg
                className="w-8 h-8 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <p className="text-sm font-semibold opacity-75 mb-1">Email</p>
              <a
                href="mailto:Walinavara337@gmail.com"
                className="font-bold text-lg hover:underline break-all"
              >
                Walinavara337@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center p-6 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:shadow-lg animate-fadeInUp"
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <svg
                className="w-8 h-8 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.92 7.02C17.45 6.18 16.51 5.55 15.46 5.55c-1.6 0-2.93 1.26-2.93 2.86 0 .35.07.68.19 1H8.07c.11-.32.19-.65.19-1 0-1.6-1.33-2.86-2.93-2.86-.76 0-1.46.3-1.96.77C2.73 5.5 2 6.9 2 8.5C2 15.21 7.84 21 14.5 21c1.6 0 3-1.33 3-2.93 0-.35-.07-.68-.19-1h5.08c.12.32.19.65.19 1 0 1.6 1.33 2.86 2.93 2.86.76 0 1.46-.3 1.96-.77 1.23-1.27 1.96-2.67 1.96-4.24 0-6.71-5.84-12.5-12.5-12.5z" />
              </svg>
              <p className="text-sm font-semibold opacity-75 mb-1">Phone</p>
              <a
                href="tel:+212646329748"
                className="font-bold text-lg hover:underline"
              >
                +212 646329748
              </a>
            </div>
          </div>

          <div className="w-full border-t-2 border-black pt-8 animate-fadeInUp"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <p className="text-sm text-gray-600 mb-4">
              © 2025 Walid Elmansouri. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Designed with modern aesthetics • Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
