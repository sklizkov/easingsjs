const HALF_PI = Math.PI / 2

export function elasticIn(t) {
  return Math.sin(13 * t * HALF_PI) * Math.pow(2, 10 * (t - 1))
}