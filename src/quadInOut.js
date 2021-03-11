export function quadInOut(t) {
  let _t = t * 2

  if (_t < 1) {
    return _t * _t / 2
  } else {
    _t -= 1

    return -(_t * (_t - 2) - 1) / 2
  }
}