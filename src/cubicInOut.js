export function cubicInOut(t) {
  if (t < .5) {
    return t * t * t * 4
  } else {
    return Math.pow(2 * t - 2, 3) / 2 + 1
  }
}