/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#868e96",
          700: "#495057",
          800: "#343a40",
          900: "#1a1d23",
          950: "#0f1117",
        },
        accent: "#ff8c42",
        accentDark: "#ff7a1f",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
        pulse: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.8" },
          "100%": { opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(255, 140, 66, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(255, 140, 66, 0.8)" },
          "100%": { boxShadow: "0 0 5px rgba(255, 140, 66, 0.5)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        fadeIn: "fadeIn 0.6s ease-out",
        fadeInUp: "fadeInUp 0.6s ease-out",
        slideIn: "slideIn 0.6s ease-out",
        scaleIn: "scaleIn 0.6s ease-out",
        glow: "glow 3s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(135deg, #1a1d23 0%, #2d2f37 100%)",
        "gradient-orange": "linear-gradient(135deg, #ff8c42 0%, #ff7a1f 100%)",
      },
    },
  },
  plugins: [],
};
