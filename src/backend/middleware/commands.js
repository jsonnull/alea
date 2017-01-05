import Random from 'random-js'
import {
  SEND_MESSAGE
} from '../../actions'

function runCommand (text, random) {
  let words = text.split(' ')

  let args = words.slice(1).join(' ')

  switch (words[0]) {
    case '/roll':
      return roll(args, random)
    default:
      return null
  }
}

function roll (text, random) {
  var args = text.split(' ')

  // Get the random number
  let [num, max] = args[0].split('d')
  console.log(num, max)

  let rands = []
  for (let i = 0; i < num; i++) {
    rands.push(random.integer(1, max))
  }

  let total = rands.reduce((a, b) => a + b, 0)
  rands = rands.join(', ')

  let message = `${rands} (${total})`
  return message
}

const commandParser = store => next => {
  let random = new Random(Random.engines.mt19937().autoSeed())

  return action => {
    if (action.type == SEND_MESSAGE) {
      const { text } = action

      if (text[0] !== '/') {
        action.result = null
      } else {
        action.result = runCommand(text, random)
      }
    }

    next(action)
  }
}

export default commandParser
