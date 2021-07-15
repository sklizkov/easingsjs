import { easeIn, easeOut, easeInOut, easeOutIn } from './helpers'


const back = k => {
  return t => t * t * ((k + 1) * t - k)
}


export const backIn    = easeIn(back(1.6))
export const backOut   = easeOut(back(1.6))
export const backInOut = easeInOut(back(2.3))
export const backOutIn = easeOutIn(back(2.3))