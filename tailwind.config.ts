import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
    './src/data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0c0b0a',
        foreground: '#f5f1ea',
        accent: '#c3a66b',
        muted: '#1c1a18',
        card: '#141210',
        border: '#2a2622',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0,0,0,0.25)',
      },
      borderRadius: {
        xl: '1.25rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
