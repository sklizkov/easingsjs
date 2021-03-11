import { bounceOut } from './bounceOut'

export function bounceIn(t) {
  return 1 - bounceOut(1 - t)
}