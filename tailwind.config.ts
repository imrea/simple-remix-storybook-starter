import type { Config } from 'tailwindcss';
import defaults from 'tailwindcss/defaultTheme';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geologica"', ...defaults.fontFamily.sans],
        mono: ['"Ubuntu Mono"', ...defaults.fontFamily.mono],
      },
    },
  },
  plugins: [],
} satisfies Config;
