export function circInOut(t) {
  if (((t *= 2) < 1)) {
    return -(Math.sqrt(1 - t * t) - 1) / 2
  } else {
    return (Math.sqrt(1 - (t -= 2) * t) + 1) / 2
  }
}