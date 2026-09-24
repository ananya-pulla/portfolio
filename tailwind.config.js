/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#FFE4EC',
        'brand-pink-subtle': '#FFF0F5',
        'brand-pink-border': '#FFD1DF',
        'brand-magenta': '#D9006C',
        'brand-wine': '#63001E',
        'brand-gold': '#FFBA20',
        'brand-dark': '#2E131C',
        'brand-lime': '#C8D879'
      },
      fontFamily: {
        serif: ['Epilogue', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace']
      }
    },
  },
  plugins: [],
}
