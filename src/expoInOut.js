export function expoInOut(t) {
  if (t === 0 || t === 1) {
    return t
  } else {
    return t < .5
      ? Math.pow(2, (t * 20) - 10) / 2
      : -Math.pow(2, 10 - (t * 20)) / 2 + 1
  }
}