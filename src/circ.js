import { easeIn, easeOut, easeInOut, easeOutIn } from './helpers'


const circ = t => {
  return 1 - Math.sin(Math.acos(t))
}


export const circIn    = easeIn(circ)
export const circOut   = easeOut(circ)
export const circInOut = easeInOut(circ)
export const circOutIn = easeOutIn(circ)