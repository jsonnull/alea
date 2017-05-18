const clearConsole = require('react-dev-utils/clearConsole')
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')

function PrettyOutput () {}

PrettyOutput.prototype.apply = function (compiler) {
  compiler.plugin('invalid', function() {
    clearConsole()
    console.log('Compiling...')
  })

  compiler.plugin('done', function(stats) {
    const rawMessages = stats.toJson({}, true)
    const messages = formatWebpackMessages(rawMessages)
    if (!messages.errors.length && !messages.warnings.length) {
      console.log('Compiled successfully!')
    }
    if (messages.errors.length) {
      messages.errors.forEach(e => console.log(e))
      return
    }
    if (messages.warnings.length) {
      console.log('Compiled with warnings.')
      messages.warnings.forEach(w => console.log(w))
    }
  })
}

module.exports = PrettyOutput
