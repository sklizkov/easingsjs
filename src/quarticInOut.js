export function quarticInOut(t) {
  if (t < .5) {
    return Math.pow(t, 4) * 8
  } else {
    return -Math.pow(t - 1, 4) * 8 + 1
  }
}