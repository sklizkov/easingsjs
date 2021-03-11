export function backInOut(t) {
  const s = 1.70158 * 1.525

  if ((t *= 2) < 1) {
    return (t * t * ((s + 1) * t - s)) / 2
  } else {
    return ((t -= 2) * t * ((s + 1) * t + s) + 2) / 2
  }
}