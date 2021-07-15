import { easeIn, easeOut, easeInOut, easeOutIn } from './helpers'


const expo = t => {
  return t && Math.pow(2, (t - 1) * 10)
}


export const expoIn    = easeIn(expo)
export const expoOut   = easeOut(expo)
export const expoInOut = easeInOut(expo)
export const expoOutIn = easeOutIn(expo)