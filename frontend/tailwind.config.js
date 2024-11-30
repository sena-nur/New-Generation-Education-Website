/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./components/**/*.{html,js}"],
  theme: {
    colors: {
      "main-background": "#fafbf7",
      "text-white": "#fff",
      "text-black": "#000",
      "footer-bg": "#101010",
      "text-gray": "#333",
      "video-bg": "#222",
      "gray-medium": "#777",
      "gray-light2": "#aaa",
      "category-primary": "#1eb2a6",
      "random-bg": "rgba(50,210,215,0.2)",
      "custom-blue": "#1E90FF",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      "custom-orange": "#ff7849",

      "button-background": "#dd6748",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      "gray-lighter": "#e3e3e3",
      "deep-orange": "#ffab91",
      "deep2-orange": "#ffefca",
      "dark-purple": "#4748ab",
      "state-purple": "#5859cd",
      "trial-bg": "rgb(222,245,255)",
    },
    extend: {
      backgroundImage: {
        "hero-background": "url('/src/assets/hero-background.jpg')",
      },
      backgroundColor: {
        "hero-dark": "rgba(0, 0, 0, 0.7)",
        "navbar-light": "rgba(255,255,255,1)",
      },
      brightness: {
        15: ".15",
      },
      height: {
        180: "45rem",
      },
      boxShadow: {
        "6xl": "0px 0px 80px 30px rgba(0,0,0, 0.6)",
        "3xl": "0px 0px 30px 3px rgba(0,0,0, 0.1)",
        "category-shadow": "0px 0px 30px 4px rgba(30,178,166,0.5) ",
        "btn-blue": "0px 0px 20px 8px rgba(30,178,166,0.3)",
      },
    },
  },
  plugins: [],
};
