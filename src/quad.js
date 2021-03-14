import { easeOut, easeInOut } from './helpers'


const quad = t => {
  return Math.pow(t, 2)
}


export const quadIn = quad
export const quadOut = easeOut(quad)
export const quadInOut = easeInOut(quad)