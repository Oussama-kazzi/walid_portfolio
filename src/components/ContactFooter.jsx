import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function ContactFooter() {
  const { t } = useContext(LanguageContext);
  return (
    <footer className="w-full py-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-orange-500/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent mb-12 animate-fadeIn">
            {t.contact.title}
          </h2>

          <p className="text-lg text-white/60 mb-12 max-w-2xl animate-fadeInUp">
            {t.contact.title === "Get In Touch"
              ? "I'm always interested in hearing about new projects and opportunities. Feel free to reach out!"
              : "Je suis toujours intéressé par les nouveaux projets et les opportunités. N'hésitez pas à me contacter!"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
            {/* Location */}
            <div
              className="flex flex-col items-center p-8 dark-card rounded-lg hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp"
              style={{ animationDelay: "0.1s", animationFillMode: "both" }}
            >
              <svg
                className="w-8 h-8 mb-4 text-orange-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
              <p className="text-sm font-semibold text-orange-500/70 mb-1">
                {t.contact.title === "Get In Touch" ? "Location" : "Lieu"}
              </p>
              <p className="font-bold text-lg text-white">
                {t.contact.location}
              </p>
              <p className="text-sm text-white/50 mt-1">
                {t.contact.title === "Get In Touch" ? "Morocco" : "Maroc"}
              </p>
            </div>

            {/* Email */}
            <div
              className="flex flex-col items-center p-8 dark-card rounded-lg hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp"
              style={{ animationDelay: "0.2s", animationFillMode: "both" }}
            >
              <svg
                className="w-8 h-8 mb-4 text-orange-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <p className="text-sm font-semibold text-orange-500/70 mb-1">
                {t.contact.title === "Get In Touch" ? "Email" : "E-mail"}
              </p>
              <a
                href="mailto:Walinavara337@gmail.com"
                className="font-bold text-lg text-white hover:text-orange-400 break-all transition-colors"
              >
                {t.contact.email}
              </a>
            </div>

            {/* Phone */}
            <div
              className="flex flex-col items-center p-8 dark-card rounded-lg hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp"
              style={{ animationDelay: "0.3s", animationFillMode: "both" }}
            >
              <svg
                className="w-8 h-8 mb-4 text-orange-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.92 7.02C17.45 6.18 16.51 5.55 15.46 5.55c-1.6 0-2.93 1.26-2.93 2.86 0 .35.07.68.19 1H8.07c.11-.32.19-.65.19-1 0-1.6-1.33-2.86-2.93-2.86-.76 0-1.46.3-1.96.77C2.73 5.5 2 6.9 2 8.5C2 15.21 7.84 21 14.5 21c1.6 0 3-1.33 3-2.93 0-.35-.07-.68-.19-1h5.08c.12.32.19.65.19 1 0 1.6 1.33 2.86 2.93 2.86.76 0 1.46-.3 1.96-.77 1.23-1.27 1.96-2.67 1.96-4.24 0-6.71-5.84-12.5-12.5-12.5z" />
              </svg>
              <p className="text-sm font-semibold text-orange-500/70 mb-1">
                {t.contact.title === "Get In Touch" ? "Phone" : "Téléphone"}
              </p>
              <a
                href="tel:+212646329748"
                className="font-bold text-lg text-white hover:text-orange-400 transition-colors"
              >
                {t.contact.phone}
              </a>
            </div>
          </div>

          <div
            className="w-full border-t border-orange-500/20 pt-8 animate-fadeInUp"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            <p className="text-sm text-white/50 mb-4">
              © 2025 Walid Elmansouri.{" "}
              {t.contact.title === "Get In Touch"
                ? "All rights reserved."
                : "Tous droits réservés."}
            </p>
            <p className="text-xs text-white/40">
              {t.contact.title === "Get In Touch"
                ? "Designed with modern aesthetics • Built with React & Tailwind CSS"
                : "Conçu avec une esthétique moderne • Construit avec React et Tailwind CSS"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
