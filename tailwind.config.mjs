/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand tokens — sampled to approximate the Ramp Ability logo.
        // Verify exact hex values against the supplied logo PNG before launch.
        brand: {
          black: '#0A0A0A',
          'black-pure': '#000000',
          orange: '#F5821F',
          'orange-bright': '#FF7A00',
          white: '#FFFFFF',
          grey: '#A1A1AA',
        },
      },
      fontFamily: {
        // Headlines: Sora (heavy weights). Body: Inter.
        display: ['"Sora Variable"', 'Sora', 'system-ui', 'sans-serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'orange-glow': '0 0 40px -8px rgba(245, 130, 31, 0.45)',
        'orange-glow-lg': '0 0 80px -10px rgba(255, 122, 0, 0.55)',
        card: '0 20px 50px -20px rgba(0, 0, 0, 0.8)',
      },
      backgroundImage: {
        'orange-gradient': 'linear-gradient(135deg, #FF7A00 0%, #F5821F 100%)',
        'hero-glow':
          'radial-gradient(60% 60% at 75% 30%, rgba(245,130,31,0.22) 0%, rgba(10,10,10,0) 70%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
