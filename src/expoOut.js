export function expoOut(t) {
  if (t === 1) {
    return t
  } else {
    return 1 - Math.pow(2, -t * 10)
  }
}