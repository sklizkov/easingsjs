import fs from 'fs'
import { optimize } from 'svgo'
import * as easings from '../dist/easing-fns.module.js'


const
  rowLength  = 4,
  marginSize = 20,
  itemSize   = 180,
  fontSize   = 16,

  width      = (itemSize + marginSize) * rowLength,
  height     = Math.ceil(Object.keys(easings).length / rowLength) * (itemSize + marginSize + fontSize),

  colors     = ['#833ab4', '#fd1d1d', '#fcb045']


const contentString = `<?xml version="1.0" encoding="UTF-8"?>
<svg
  viewBox="0 0 ${ width } ${ height }"
  xmlns="http://www.w3.org/2000/svg"
>

  <defs>
    <linearGradient id="g">
      ${ colors.map((color, k) => {
        return `<stop offset="${ 100 / (colors.length - 1) * k }%" stop-color="${ color }" />`
      }).join('') }
    </linearGradient>
  </defs>

  ${ Object.keys(easings).filter(n => n !== 'linear').concat(['linear']).map((name, i) => {
    const
      s = (itemSize + marginSize),
      r = Math.floor(i / rowLength),
      x = marginSize / 2 + s * i - r * s * rowLength,
      y = marginSize / 2 + fontSize + r * (s + fontSize),
      o = (itemSize / 2 - itemSize / 150 * 100 / 2)

    return `<g>

      <rect 
        x="${ x }" y="${ y }" 
        width="${ itemSize }" height="${ itemSize }" 
        rx="10" 
        fill="rgba(131, 59, 181, 0.03)" stroke="rgba(131, 59, 181, 0.08)"
      />

      <path 
        fill="transparent" stroke="url(#g)"
        d="${ createEasing(
          easings[name],
          x + o,
          y + o,
          itemSize / 150 // scale
        ) }"
        stroke-linecap="round" stroke-width="${ itemSize / 150 * 5 }"
      />

      <text 
        x="${ x + itemSize / 2 }" y="${ y - fontSize / 2 }" 
        text-anchor="middle" 
        fill="${ colors[0] }" 
        font-size="${ fontSize }px" font-weight="bold" font-family="monospace"
      >${ name }</text>

    </g>`
  }).join('') }

</svg>
`

fs.writeFile('preview.svg', optimize(contentString).data, err => {
  if (err) return console.log(err)
})

function createEasing(easing, offsetX = 0, offsetY = 0, scale = 1) {
  return new Array(101).fill('').map((_, i) => {
    const
      x = offsetX + round(Math.abs(i)) * scale,
      y = offsetY + round(100 * (1 - easing(Math.abs(i) * .01))) * scale

    return i ? ` ${ x } ${ y }` : `M${ x } ${ y } L`
  }).join('')
}

function round (n) {
  return Number(n.toFixed(1))
}
