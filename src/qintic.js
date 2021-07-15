import { easeIn, easeOut, easeInOut, easeOutIn } from './helpers'


const qintic = t => {
  return t * t * t * t * t
}


export const qinticIn    = easeIn(qintic)
export const qinticOut   = easeOut(qintic)
export const qinticInOut = easeInOut(qintic)
export const qinticOutIn = easeOutIn(qintic)