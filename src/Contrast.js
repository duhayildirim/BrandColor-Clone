// text color according to the hue of the color palettes
const getContrastYIQ = (hexcolor) => {
  let r = parseInt(hexcolor.substr(0, 2), 16)
  let g = parseInt(hexcolor.substr(2, 2), 16)
  let b = parseInt(hexcolor.substr(4, 2), 16)
  let yiq = (r(r * 299) + g(g * 587) + b(b * 114)) / 1000

  return (yiq >= 128) ? 'black' : 'white'
}

export default getContrastYIQ