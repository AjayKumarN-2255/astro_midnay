/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        handwriting: ['Kalam', 'cursive'],
      },
      colors: {
        primary: "#00715D",
        secondary: "#FBD45B",
        heading: "#2A3936",
        paragraph: "#555555",
        highlight: "#ECECEC",
        card: "#F9F4E8"
      },
      spacing: {
        div_lg_gap: '120px',
        div_sm_gap: '80px',
      },
    },
  },
  plugins: [],
};

