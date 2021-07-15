# easing-fns

Easing Functions 🚀

## Installation

### NPM

```bash
npm i easing-fns --save
```

### CDN

```html
<script src="https://unpkg.com/easing-fns@latest"></script>
```

## Usage

```javascript
import { linear } from 'easing-fns'

// or
import * as easings from 'easing-fns'
const { linear } = easings
```

```html
<script>
  const linear = easingFns.linear
</script>
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

![preview](https://raw.githubusercontent.com/sklizkov/easing-fns/main/preview.svg)
