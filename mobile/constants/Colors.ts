const tintColorLight = '#2f95dc'
const tintColorDark = '#fff'

const colors = {
  mainOrange: '#FF8B33',
  mainBrown: '#7D3F3B',
  mainRed: '#E24A28',
  mainGreen: '#53694F',
  mainWhite: '#FFEBC2',
}

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    ...colors,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    ...colors,
  },
}
