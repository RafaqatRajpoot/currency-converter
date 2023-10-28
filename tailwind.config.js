/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'custom-blue': '#EAEAFE',
        'custom-green': 'rgba(221, 246, 243, 1)', // 
        'custom-purple': '#26278D',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans'], // Use 'sans' as the generic font family
      },
    },
  },
  plugins: [],
}
