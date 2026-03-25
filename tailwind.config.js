/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            DEFAULT: '#025384',
            light: '#036ba8',
            dark: '#013A5E',
            50: '#e6f2fa',
            100: '#b3d9ef',
            200: '#80bfe4',
            500: '#025384',
            600: '#013A5E',
            900: '#011e33',
          },
          green: {
            DEFAULT: '#086036',
            light: '#0a7a45',
            dark: '#064d2a',
            50: '#e6f5ed',
            100: '#b3e0ca',
            200: '#80cca7',
            500: '#086036',
            600: '#064d2a',
            900: '#032a17',
          },
        },
        primary: {
          DEFAULT: '#086036',
          hover: '#064d2a',
          light: '#e6f5ed',
        },
        secondary: {
          DEFAULT: '#025384',
          hover: '#013A5E',
          light: '#e6f2fa',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #025384 0%, #086036 100%)',
        'brand-gradient-reverse': 'linear-gradient(135deg, #086036 0%, #025384 100%)',
        'brand-gradient-subtle': 'linear-gradient(135deg, #e6f2fa 0%, #e6f5ed 100%)',
        'hero-overlay': 'rgba(0,0,0,0.35)',
        'hero-overlay-dark': 'rgba(0,0,0,0.45)',
      },
      boxShadow: {
        'brand': '0 4px 20px rgba(2, 83, 132, 0.15)',
        'brand-lg': '0 8px 30px rgba(2, 83, 132, 0.2)',
        'green': '0 4px 20px rgba(8, 96, 54, 0.15)',
        'green-lg': '0 8px 30px rgba(8, 96, 54, 0.2)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-ring': 'pulseRing 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.2)', opacity: '0.7' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
