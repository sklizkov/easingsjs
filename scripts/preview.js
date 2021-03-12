const
  fs           = require('fs'),
  { optimize } = require('svgo'),
  easings      = require('../dist/easing-fns.cjs.js')


const
  length  = 6,
  padding = length * 10,
  width   = length * 140 + padding,
  height  = length * 160 + padding

const
  colors = ['#833ab4', '#fd1d1d', '#fcb045']

const content = `<?xml version="1.0" encoding="UTF-8"?>
<svg
  viewBox="0 0 ${ width } ${ height }" 
  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <defs>
    <linearGradient id="g">
      ${ colors.map((color, k) => `<stop offset="${ 100 / (colors.length - 1) * k }%" stop-color="${ color }"></stop>`).join('') }
    </linearGradient>
  </defs>

  ${ Object.keys(easings).filter(n => n !== 'linear').concat(['linear']).map((name, i) => {
    const
      x = 150 * i - (Math.floor(i / 6) * width),
      y = 170 * Math.floor(i / 6)

    return `<g>
      <rect 
        x="${ x + 10 }" y="${ y + 30 }" 
        width="120" height="120" 
        rx="10" 
        fill="rgba(131, 59, 181, 0.03)" stroke="rgba(131, 59, 181, 0.08)"
      />
      
      <path 
        fill="transparent" stroke="url(#g)"
        d="${ createEasing(easings[name], 20 + x, 40 + y) }" 
        stroke-linecap="round" stroke-width="4"
      ></path>
      
      <text 
        x="${ x + 70 }" y="${ y + 17 }" 
        text-anchor="middle" 
        fill="${ colors[0] }" 
        font-size="1em" font-weight="bold" font-family="monospace"
      >${ name }</text>
    </g>`
  }).join('') }
</svg>`

fs.writeFile('preview.svg', optimize(content).data, err => {
  if (err) return console.log(err)
})


function createEasing(easing, offsetX = 0, offsetY = 0) {
  const
    scaleDown = .01,
    scaleUp = 100,
    points = [],
    from = 0,
    to = scaleUp

  for (let i = from; i <= to; i++) {
    const
      x = round(Math.abs(i)) + offsetX,
      y = round(scaleUp * (1 - easing(Math.abs(i) * scaleDown))) + offsetY

    if (i === from) {
      points.push(`M${x} ${y} L`)
    } else {
      points.push(` ${x} ${y}`)
    }
  }

  return points.join('')
}

function round (n) {
  return Number(n.toFixed(1))
}