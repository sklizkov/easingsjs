import { easeIn, easeOut, easeInOut, easeOutIn } from './helpers'


const quad = t => {
  return t * t
}


export const quadIn    = easeIn(quad)
export const quadOut   = easeOut(quad)
export const quadInOut = easeInOut(quad)
export const quadOutIn = easeOutIn(quad)