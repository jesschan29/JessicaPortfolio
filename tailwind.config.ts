import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      colors: {
        'skyblue': '#8dadc9',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'custom-blue': '#ceccd8',
        'custom-skyblue': '#8dadc9',
        'custom-skills': '#8a81a9',
        'custom-darkblue': '#231942',
      },
      textColor: {
        'custom-header': '#231942',
        'custom-link': '#123499',
      },
      fontSize: {
        'custom-small': '12px',
      }
    },
  },
  plugins: [],
}
export default config;