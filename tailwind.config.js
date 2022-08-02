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

        light_background: '#fafafa',
        light_textColor: '#1d1d1f',
        light_primaryColor: '#009adc',
        textGrayLight: '#5e5e5e',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
        text_size: '18px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('tailwind-scrollbar')],
  variants: {
    scrollbar: ['rounded'],
  },
}
