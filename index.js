var foreach = require('foreach');
module.exports = function(onConsole) {
  var methods = []
  for (var key in console) methods.push(key)
  foreach(methods, function(method) {
    var orig = console[method]
    var proxy = function consoleProxy() {
      var args = [].slice.call(arguments)
      onConsole({method: method, arguments: args})
      if ( orig.apply ) {
        // Do this for normal browsers
        orig.apply(console, args)
      } else {
        // Do this for IE
        orig([].slice.apply(args).join(' '));
      }
    }
    console[method] = proxy
  })
}
