import { easeOut, easeInOut } from './helpers'


const elastic = t => {
  return Math.pow(2, 10 * (t - 1)) * Math.cos(18 * (Math.PI / 3) * t)
}


export const elasticIn = elastic
export const elasticOut = easeOut(elastic)
export const elasticInOut = easeInOut(elastic)