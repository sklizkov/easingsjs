export function bounceOut(t) {
  const
    a = 4 / 11,
    b = 8 / 11,
    c = 9 / 10,

    ca = 4356 / 361,
    cb = 35442 / 1805,
    cc = 16061 / 1805,

    t2 = t * t

  if (t < a) {
    return t2 * 7.5625
  } else {
    if (t < b) {
      return 9.075 * t2 - 9.9 * t + 3.4
    } else {
      if (t < c) {
        return ca * t2 - cb * t + cc
      } else {
        return 10.8 * t * t - 20.52 * t + 10.72
      }
    }
  }
}