# easing-fns

Easing Functions 🚀

## Installation

```bash
npm i easing-fns --save
```

## Usage

```javascript
import { linear } from 'easing-fns'

// or
import * as easings from 'easing-fns'
const { linear } = easings
```

## Example

```javascript
import { linear } from 'easing-fns'

animate(linear, (value) => {
  // some code
}, 1000)

function animate(easing, draw, duration) {
  const start = performance.now()

  requestAnimationFrame(function tick(time) {
    const
      timeFraction = Math.min((time - start) / duration, 1),
      value = easing(timeFraction)

    draw(value)

    if (timeFraction < 1) requestAnimationFrame(tick)
  })
}
```

## Functions

- backIn
- backOut
- backInOut
- bounceIn
- bounceOut
- bounceInOut
- circIn
- circOut
- circInOut
- cubicIn
- cubicOut
- cubicInOut
- elasticIn
- elasticOut
- elasticInOut
- expoIn
- expoOut
- expoInOut
- quadIn
- quadOut
- quadInOut
- quarticIn
- quarticOut
- quarticInOut
- qinticIn
- qinticOut
- qinticInOut
- sineIn
- sineOut
- sineInOut
- linear

## License

MIT, see [LICENSE](http://github.com/sklizkov/easing-fns/blob/master/LICENSE) for details.
