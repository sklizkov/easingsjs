import { easeIn, easeOut, easeInOut, easeOutIn } from './helpers'


const bounce = t => {
  let pow2, b = 4
  while (t < (( pow2 = Math.pow(2, --b)) - 1) / 11) {}
  return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow(( pow2 * 3 - 2 ) / 22 - t, 2)
}


export const bounceIn    = easeIn(bounce)
export const bounceOut   = easeOut(bounce)
export const bounceInOut = easeInOut(bounceIn)
export const bounceOutIn = easeOutIn(bounceIn)