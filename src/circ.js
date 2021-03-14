import { easeOut, easeInOut } from './helpers'


const circ = t => {
  return 1 - Math.sin(Math.acos(t))
}


export const circIn = circ
export const circOut = easeOut(circ)
export const circInOut = easeInOut(circ)