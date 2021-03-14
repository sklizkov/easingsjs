import { easeOut, easeInOut } from './helpers'


const qintic = t => {
  return Math.pow(t, 5)
}


export const qinticIn = qintic
export const qinticOut = easeOut(qintic)
export const qinticInOut = easeInOut(qintic)