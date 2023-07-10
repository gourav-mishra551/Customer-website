/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#1c1c3a',
        'regal-red': '#ff5f55;',
      },
    },
    fontFamily: {
      signature : ['Great Vibes'],
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '2rem',
      'full': '9999px',
      'large': '12px',
    }
  },
  
  plugins: [],
}
