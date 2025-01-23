const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        // sans: ['Quicksand', 'sans-serif'], // Sử dụng Open Sans cho font sans
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
      screens: {
        'xs': '320px', // Tạo breakpoint tùy chỉnh cho 320px
        '0.7xs': '340px', // Tạo breakpoint tùy chỉnh cho 340px
        '0.8xs': '380px', // Tạo breakpoint tùy chỉnh cho 380px
        '0.9xs': '400px', // Tạo breakpoint tùy chỉnh cho 400px
        '0.91xs': '420px', // Tạo breakpoint tùy chỉnh cho 400px
        '1xs': '440px', // Tạo breakpoint tùy chỉnh cho 440px
        '2xs': '480px', // Tạo breakpoint tùy chỉnh cho 480px
        '3xs': '520px', // Tạo breakpoint tùy chỉnh cho 520px
        '4xs': '870px', // Tạo breakpoint tùy chỉnh cho 870px
      },

    },
  },
  corePlugins: {
    fontSize: false,

  },
  plugins: [require("tailwindcss-fluid-type")],
};
