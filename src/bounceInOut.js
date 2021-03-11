import { bounceOut } from './bounceOut'

export function bounceInOut(t) {
  if (t < .5) {
    return (1 - bounceOut(1 - t * 2)) / 2
  } else {
    return bounceOut(t * 2 - 1) / 2 + .5
  }
}