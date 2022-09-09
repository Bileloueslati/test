module.exports = {
  content: ["./assets/**/*.tsx", "./templates/**/*.html.twig"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      container: {
        padding: {
          DEFAULT: "2rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
    },
  },
};
