import type { Config } from 'tailwindcss';
import defaults from 'tailwindcss/defaultTheme';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito"', ...defaults.fontFamily.sans],
        mono: ['"Ubuntu Mono"', ...defaults.fontFamily.mono],
      },
    },
  },
  plugins: [],
} satisfies Config;
