/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'primary': '#556ee6',
        'light': 'rgba(85,110,230,.25)'
      },
      userSelect: {
        'none': 'none',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
       }
    },
  },
  plugins: [],
}

