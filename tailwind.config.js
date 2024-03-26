/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    colors: {
      "brand-1": "#782aac",
      "brand-2": "#71d154",
      "brand-3": "#e1392c",
      "brand-4": "#fdde42",
      "font-color-1": "#300e47",
      "font-color-2": "#ffffff",
      "font-links": "#3B1157",
      "font-input": "#c4c0c7",
      "font-secondary-input": "#645c6a",
      "font-disabled-input": "#f8f7f9",
      "btn-bg-hover": "#9932cc",
      "btn-bg-focus": "#62228D",
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      fontFamily: {
        "text-main": ["Roboto"],
        "text-title": ["IBM Plex Mono"],
      },
      backgroundImage: {
        hero: "url('../assets/images/home/start-screen-bg.png')",
        social1: "url(../assets/icons/social/watsapp.svg)",
        social2: "url(../assets/icons/social/tik-tok.svg)",
        social3: "url(../assets/icons/social/instagram.svg)",
        social4: "url(../assets/icons/social/facebook.svg)",
        call: "url(../assets/icons/call-me.svg)",
        shooting1: "url(../assets/images/about/shooting-bg1.png)",
        success: "url(../assets/images/success/success-cell-bg.png)",
        help: "url(../assets/images/help/help-bg.png)",
      },
      writingMode: {
        "writing-mode": "vertical-rl",
      },
      radius: {
        "border-radius": "1rem",
      },
    },
  },
  plugins: [],
};
