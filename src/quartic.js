import { easeOut, easeInOut } from './helpers'


const quartic = t => {
  return Math.pow(t, 4)
}


export const quarticIn = quartic
export const quarticOut = easeOut(quartic)
export const quarticInOut = easeInOut(quartic)