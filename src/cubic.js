import { easeIn, easeOut, easeInOut, easeOutIn } from './helpers'


const cubic = t => {
  return t * t * t
}


export const cubicIn    = easeIn(cubic)
export const cubicOut   = easeOut(cubic)
export const cubicInOut = easeInOut(cubic)
export const cubicOutIn = easeOutIn(cubic)