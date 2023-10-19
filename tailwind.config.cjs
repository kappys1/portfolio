/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      boxShadow: {
        'button-light':
          '0 0 #0000, 0 0 #0000, inset 0 1px 0 0 #fff, 0 0 0 1px rgba(0,0,0,.06), 0 1px 0 0 rgba(0,0,0,.08), 0 2px 2px 0 rgba(0,0,0,.04), 0 3px 3px 0 rgba(0,0,0,.02), 0 4px 4px 0 rgba(0,0,0,.01)',
        'button-dark':
          '0 0 #0000, 0 0 #0000, 0 -1px 0 0 hsla(0,0%,100%,.04), 0 0 0 1px hsla(0,0%,100%,.12), 0 0 1px 0 rgba(0,0,0,.04), 0 2px 2px 0 rgba(0,0,0,.04), 0 4px 2px 0 rgba(0,0,0,.04), 0 6px 3px 0 rgba(0,0,0,.04)',
      },
      colors: {
        primary: {
          50: '#ebfaff',
          100: '#d3f3ff',
          200: '#b1eaff',
          300: '#7ce0ff',
          400: '#3ecbff',
          500: '#12abff',
          600: '#008aff',
          700: '#0071ff',
          800: '#005ccf',
          900: '#0650a2',
          950: '#072448',
        },
        secondary: {
          50: '#f2fbfa',
          100: '#d2f5f4',
          200: '#a4ebe8',
          300: '#54d2d2',
          400: '#41bcc0',
          500: '#289ea4',
          600: '#1d7d84',
          700: '#1b656a',
          800: '#1a5055',
          900: '#1a4347',
          950: '#09262a',
        },
        third: {
          50: '#fffee7',
          100: '#fffdc1',
          200: '#fff886',
          300: '#ffeb41',
          400: '#ffdb0d',
          500: '#ffcb00',
          600: '#d19400',
          700: '#a66902',
          800: '#89520a',
          900: '#74430f',
          950: '#442304',
        },

        // color 111111 con 50% de opacidad
      },
      sans: {
        fontFamily: ['Montserrat'],
      },
      screens: {
        medium: '468px',
        mobile: '411px',
        tablet: '721px',
        laptop: '890px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('flowbite-typography'),
    require('flowbite/plugin'),
  ],
}
