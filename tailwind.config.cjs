/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    daisyui: {
      themes: ["lemonade"],
    },
    plugins: [require("daisyui"), require("@tailwindcss/typography")],
  };