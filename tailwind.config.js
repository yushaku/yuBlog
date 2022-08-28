/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark_background: '#0a192f',
        dark_subBackground: '#0f2243',
        dark_accentColor: '#64ffda',
        dark_textColor: '#ccd6f6',
        dark_subTextColor: '#8992b0',

        light_background: '#fffaf4',
        light_subBackground: '#f5f7fa',
        light_secondBackground: '#fffaf4',
        light_textColor: '#1d1d1f',
        light_accentColor: '#009adc',
        textGrayLight: '#5e5e5e',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('tailwind-scrollbar'), require('@tailwindcss/line-clamp')],
  variants: {
    scrollbar: ['rounded'],
  },
}
