import { easeIn, easeOut, easeInOut, easeOutIn } from './helpers'


const elastic = (a, b) => {
  const
    _a = Math.min(Math.max(a, 1), 10),
    _b = Math.min(Math.max(b, .1), 2)

  return t => {
    if (t === 0 || t === 1) return t

    return -_a * Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (_b / (Math.PI * 2) * Math.asin(1 / _a))) * (Math.PI * 2)) / _b)
  }
}


export const elasticIn    = easeIn(elastic(1, .4))
export const elasticOut   = easeOut(elastic(1, .4))
export const elasticInOut = easeInOut(elastic(1, .4))
export const elasticOutIn = easeOutIn(elastic(1, .4))