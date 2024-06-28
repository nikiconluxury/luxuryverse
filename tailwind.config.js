/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'purple': 'rgb(164, 126, 255)',
        'purple': 'rgb(47, 89, 53)',
        'dark': '#212529',
        'purpleAsh': '#CECECE',
        'ash': 'rgb(29, 29, 29)'
      },
      fontSize: {
        '7xl': '85px',
      },
      backgroundImage: {
        // 'bannerBg': "url('../assets/bg.svg')",
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animationPlayState: {
        running: 'running',
        paused: 'paused',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.animation-paused': {
          'animation-play-state': 'paused',
        },
        '.animation-running': {
          'animation-play-state': 'running',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
