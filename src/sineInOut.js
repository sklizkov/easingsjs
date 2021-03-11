const PI = Math.PI

export function sineInOut(t) {
  return -(Math.cos(t * PI) - 1) / 2
}