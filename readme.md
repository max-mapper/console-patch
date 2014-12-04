# console-patch

monkeypatches all `console.*` methods and lets you intercept the arguments. does not break the console methods, they will still work, you just get a copy of their arguments whenever they are called

[![NPM](https://nodei.co/npm/console-patch.png)](https://nodei.co/npm/console-patch/)

## installation

```
npm install console-patch --save
```

## usage

use in server or browser with `browserify`

```js
var patch = require('console-patch')

var intercepted = []

console.log('hi')

patch(function onConsoleCall(args) {
  intercepted.push(args)
})

console.log('bye')

// intercepted === {method: 'log', arguments: ['bye']}
```

in the above example both `console.log` still print to the normal console
