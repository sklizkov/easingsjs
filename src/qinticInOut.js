export function qinticInOut(t) {
  if (( t *= 2) < 1) {
    return t * t * t * t * t / 2
  } else {
    return ((t -= 2) * t * t * t * t + 2) / 2
  }
}