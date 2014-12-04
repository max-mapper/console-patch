module.exports = function(onConsole) {
  var methods = []
  for (var key in console) methods.push(key)
  methods.forEach(function(method) {
    var orig = console[method]
    var proxy = function consoleProxy() {
      var args = [].slice.call(arguments)
      onConsole({method: method, arguments: args})
      orig.apply(console, args)
    }
    console[method] = proxy
  })
}
