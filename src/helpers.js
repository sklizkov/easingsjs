export const easeIn = easing => easing

export const easeOut = easing => t => 1 - easing(1 - t)

export const easeInOut = easing => {
  return t => t < .5 ? easing(2 * t) / 2 : 1 - easing(t * -2 + 2) / 2
}

export const easeOutIn = easing => {
  return t => t < .5 ? (1 - easing(1 - t * 2)) / 2 : (easing(t * 2 - 1) + 1) / 2
}