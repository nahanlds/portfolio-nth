/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      azul: {
        escuro: "#27374D",
        paragrafo: "#526D82",
        claro: "#008E97",
        hover: "#FC4C02",
      },
      fundo: {
        branco: "#F6F1F1",
        cinza: "#d1d5db",
      },
    },
    extend: {
      boxShadow: {
        "3xl": "1px 5px 10px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
