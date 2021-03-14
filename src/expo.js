import { easeOut, easeInOut } from './helpers'


const expo = t => {
  return t && Math.pow(2, (t - 1) * 10)
}


export const expoIn = expo
export const expoOut = easeOut(expo)
export const expoInOut = easeInOut(expo)