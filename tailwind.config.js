/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        primary: "#FCE3BB",
        secondary: "#FCA925",
      },
      backgroundImage: {
        "detalles-fondo-md": "url('/img/DetallesFondo.png')",
        "detalles-fondo-lg": "url('/img/DetallesFondoGrande.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
