const HALF_PI = Math.PI / 2

export function elasticOut(t) {
  return Math.sin(-13 * (t + 1) * HALF_PI) * Math.pow(2, -t * 10) + 1
}