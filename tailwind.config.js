module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-home-mobile': "url('/src/assets/home/background-home-mobile.jpg')"
      },
      fontFamily: {
        'bellefair': ['Bellefair', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif']
      }
    },
  },
  plugins: [],
}
