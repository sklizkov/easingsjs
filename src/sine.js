import { easeIn, easeOut, easeInOut, easeOutIn } from './helpers'


const sine = t => {
  const _t = Math.cos(t * (Math.PI / 2))

  return (Math.abs(_t) < 1e-14) ? 1 : 1 - _t
}


export const sineIn    = easeIn(sine)
export const sineOut   = easeOut(sine)
export const sineInOut = easeInOut(sine)
export const sineOutIn = easeOutIn(sine)