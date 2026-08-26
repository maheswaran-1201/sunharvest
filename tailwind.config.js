/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sun: {
          forest: '#23452B',
          olive: '#536B35',
          gold: '#D99A28',
          orange: '#E99A32',
          sand: '#F5EBD8',
          cream: '#FCF8EF',
          charcoal: '#25271F',
          surface: '#FAF4E8',
          border: '#E8DEC8',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 4px 20px -2px rgba(35, 69, 43, 0.06)',
        'soft-md': '0 10px 30px -4px rgba(35, 69, 43, 0.08)',
        'soft-lg': '0 20px 40px -6px rgba(35, 69, 43, 0.12)',
        'glow-gold': '0 0 25px rgba(217, 154, 40, 0.25)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite 1s',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.85 },
        },
      },
    },
  },
  plugins: [],
};
