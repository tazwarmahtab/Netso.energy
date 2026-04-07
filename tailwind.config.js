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
      fontFamily: {
        geist: ['var(--font-geist)'],
        inter: ['var(--font-inter)'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        opensans: ['var(--font-opensans)', 'sans-serif'],
        fira: ['var(--font-fira)', 'monospace'],
      },
      colors: {
        navy: '#0A1628',
        'solar-gold': '#FFB800',
        'leaf-green': '#2ECC71',
        'electric-blue': '#3498DB',
        'slate-gray': '#34495E',
        'alert-red': '#E74C3C',
        'eco-green': '#27AE60',
        teal: '#00D4FF',
        amber: '#FF8C42',
      },
    },
  },
  plugins: [],
}
