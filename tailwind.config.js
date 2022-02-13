module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      deep: {
        1: '#0e0e30',
        2: '#0a0a24',
        3: '#050512'
      },
      accent: {
        1: '#ffc800',
        2: '#edba00',
        3: '#c79c00',
      },
      comp: {
        1: '#d417d1',
        2: '#a611a3',
        3: '#7d0f7b',
      },
      forest: {
        1: '#0f662b',
        2: '#0c5423',
        3: '#09421b'
      },
      ocean: '#898F9C',

      bluep: {
        1: '#2D3E40',
        2: '#387373',
        3: '#93BFB7',
        4: '#97A6A0',
        5: '#E4F2E7', 
      }
    },
    extend: {},
  },
  plugins: [],
}
