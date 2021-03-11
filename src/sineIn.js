const HALF_PI = Math.PI / 2

export function sineIn(t) {
  const _t = Math.cos(t * HALF_PI)

  return (Math.abs(_t) < 1e-14) ? 1 : 1 - _t
}