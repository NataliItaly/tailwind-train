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
      "font-disabled-input": "#c7bcd1",
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
        hero: "url('../assets/images/home-page/home/start-screen-bg.png')",
        social1: "url(../assets/icons/social/watsapp.svg)",
        social2: "url(../assets/icons/social/tik-tok.svg)",
        social3: "url(../assets/icons/social/instagram.svg)",
        social4: "url(../assets/icons/social/facebook.svg)",
        call: "url(../assets/icons/call-me.svg)",
        shootingList: "url(../assets/images/home-page/about/shooting-bg1.png)",
        success: "url(../assets/images/home-page/success/success-cell-bg.png)",
        help: "url(../assets/images/home-page/help/help-bg.png)",
        memory: "linear-gradient(#71d154 460px, #fff 460px);",
        memoryList: "url(../assets/images/home-page/memory/memory-bg.png)",
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
