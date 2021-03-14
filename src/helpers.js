export const easeOut = easing => {
  return t => 1 - easing(1 - t)
}

export const easeInOut = easing => {
  return t => t < .5 ? easing(2 * t) / 2 : (2 - easing(2 * (1 - t))) / 2
}