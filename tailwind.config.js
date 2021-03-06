module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-home-mobile': "url('/src/assets/home/background-home-mobile.jpg')",
        'background-destination-mobile': "url('/src/assets/destination/background-destination-mobile.jpg')",
        'background-crew-mobile': "url('/src/assets/crew/background-crew-mobile.jpg')",
        'background-technology-mobile': "url('/src/assets/technology/background-technology-mobile.jpg')",
        'background-home-tablet': "url('/src/assets/home/background-home-tablet.jpg')"
      },
      fontFamily: {
        'bellefair': ['Bellefair', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif']
      }
    },
  },
  plugins: [],
}
