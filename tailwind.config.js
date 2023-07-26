/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-blue-bg': '#101023',
        'dark-grey-button': '#D0CFD9',
        'dark-grey-button-hover': '#F5F5F6',
        'blob': '#201F38',
        'border': '#201F38',
      },
      width: {
        '380': '380px',
        '800': '800px',
        '850': '850px',
        '1400': '1400px',
        '1700': '1500px',
        '1600': '1600px',
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        marquee2: 'marquee2 28s linear infinite',
        pulse: 'pulse 1s infinite ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-102%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(102%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulse: {

          '50%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(2)',
          }
        },
      },
    },
    fontFamily: {
      'inter': ['Inter'],
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      md: ['15px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '3xl': ['30px', '36px'],
      '4xl': ['36px', '40px'],
      '5xl': ['48px', '48px'],
      '6xl': ['60px', '60px'],
      '7xl': ['80px', '72px'],
      '8xl': ['96px', '96px'],
      '9xl': ['128px', '128px'],
    }
  },
  plugins: [],
}
