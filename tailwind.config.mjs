/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'preto-fachada': '#16130F',
        'vermelho-toldo': '#C81E1E',
        'dourado-script': '#C9A24B',
        'amarelo-calcada': '#F2C230',
        'branco-parede': '#F7F5F2',
      },
      fontFamily: {
        script: ['"Edwardian Script ITC"', '"Great Vibes"', '"Playball"', 'cursive'],
        sans: ['"Work Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
