import { easeOut, easeInOut } from './helpers'


const cubic = t => {
  return Math.pow(t, 3)
}


export const cubicIn = cubic
export const cubicOut = easeOut(cubic)
export const cubicInOut = easeInOut(cubic)