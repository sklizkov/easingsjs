import { easeIn, easeOut, easeInOut, easeOutIn } from './helpers'


const quartic = t => {
  return t * t * t * t
}


export const quarticIn    = easeIn(quartic)
export const quarticOut   = easeOut(quartic)
export const quarticInOut = easeInOut(quartic)
export const quarticOutIn = easeOutIn(quartic)