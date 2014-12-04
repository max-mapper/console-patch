var patch = require('./')

var intercepted = []

console.log('hi')

patch(function(args) {
  intercepted.push(args)
})

console.log('bye')

var pass = intercepted.length === 1

if (pass) console.log('pass')
else console.log('fail') && process.exit(1)