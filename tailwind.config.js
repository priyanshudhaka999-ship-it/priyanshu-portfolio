/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F3EFEA',
          300: '#EAE3DC',
          400: '#DDD4CA',
        },
        obsidian: {
          900: '#141413',
          800: '#22211F',
          700: '#3B3936',
          500: '#64615C',
          400: '#8C8881',
        },
        accent: {
          terracotta: '#C85A32',
          terracottaLight: '#F6E8E2',
          indigo: '#2B4C7E',
          indigoLight: '#E6ECF5',
          emerald: '#1F6E58',
          emeraldLight: '#E3F2EE',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 4px 24px -4px rgba(20, 20, 19, 0.04), 0 2px 8px -2px rgba(20, 20, 19, 0.03)',
        'elevated': '0 20px 45px -12px rgba(20, 20, 19, 0.08), 0 4px 16px -4px rgba(20, 20, 19, 0.04)',
        'glow-warm': '0 0 40px -10px rgba(200, 90, 50, 0.22)',
      },
      backgroundImage: {
        'radial-warm': 'radial-gradient(circle at 50% 0%, rgba(200, 90, 50, 0.08), transparent 65%)',
        'grid-pattern': 'linear-gradient(to right, rgba(20, 20, 19, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(20, 20, 19, 0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
