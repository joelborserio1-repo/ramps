/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Friendly, light brand system — white-dominant with a fresh teal
        // primary and a warm coral accent. Deliberately distinct from the
        // logo's black/orange so the site doesn't read like other operators.
        brand: {
          navy: '#0F2A3A', // ink: headings + strong text
          slate: '#52636F', // secondary / body text (AA on white)
          teal: '#0EA5A0', // bright accent (icons, highlights, glows)
          'teal-deep': '#0B7C79', // CTAs, links, hover (AA contrast on white)
          coral: '#FF6B57', // warm decorative accent (stars, motif) — not for text
          'coral-soft': '#FF8A78', // coral hover / gradient stop
          'coral-deep': '#C0392B', // accessible coral for error text (AA on white)
          cloud: '#EFF5F7', // soft section background
          mist: '#F7FAFB', // lightest tint
          line: '#E2EAEE', // hairline borders
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['"Sora Variable"', 'Sora', 'system-ui', 'sans-serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Soft, friendly elevation for a light theme (no harsh dark glows).
        soft: '0 10px 30px -12px rgba(15, 42, 58, 0.18)',
        card: '0 18px 45px -20px rgba(15, 42, 58, 0.22)',
        'teal-glow': '0 14px 36px -12px rgba(14, 165, 160, 0.45)',
        'teal-glow-lg': '0 24px 60px -16px rgba(14, 165, 160, 0.5)',
      },
      backgroundImage: {
        'teal-gradient': 'linear-gradient(135deg, #0EA5A0 0%, #0B7C79 100%)',
        'coral-gradient': 'linear-gradient(135deg, #FF8A78 0%, #FF6B57 100%)',
        'hero-glow':
          'radial-gradient(55% 55% at 78% 22%, rgba(14,165,160,0.14) 0%, rgba(255,255,255,0) 70%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
