const HALF_PI = Math.PI / 2

export function elasticInOut(t) {
  if (t < .5) {
    return Math.sin(13 * HALF_PI * 2 * t) * Math.pow(2, 10 * (2 * t - 1)) / 2
  } else {
    return Math.sin(-13 * HALF_PI * ((2 * t - 1) + 1)) * Math.pow(2, -10 * (2 * t - 1)) / 2 + 1
  }
}