/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        customGray: "#F5F5F5",
        primary: "#F5F5F5"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'lol' : ['Anton', 'sans-serif'],
        'rs' : ['Rubik Iso', 'cursive'],
        'bo' : ['Bungee Outline', 'cursive'],
        'jb' : ['JetBrains Mono', 'monospace'],
        'bs' : ['Big Shoulders Display', 'cursive'],
        'hj' : ['Handjet', 'cursive'],
        'js' : ['Josefin Sans', 'sans-serif'],
        'na' : ['Nabla', 'cursive'],
        'sg' : ['Space Grotesk', 'sans-serif'],
        'lo' : ['Lilita One', 'cursive'],
        'pp' : ['Poppins', 'sans-serif'],
        'te' : ['Teko', 'sans-serif'],
        lato: "var(--font-lato)",
        montserrat: "var(--font-montserrat)",
      },
    },
  },
  plugins: [],
}