import { easeOut, easeInOut } from './helpers'


const back = k => {
  return t => Math.pow(t, 2) * ((k + 1) * t - k)
}


export const backIn = back(1.6)
export const backOut = easeOut(back(1.6))
export const backInOut = easeInOut(back(2.3))