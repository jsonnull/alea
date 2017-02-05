/* @flow */
import Random from 'random-js'
import type { Action } from '../actions/types'

function runCommand (text: string, random: Object) {
  let words = text.split(' ')

  let args = words.slice(1).join(' ')

  switch (words[0]) {
    case '/roll':
      return roll(args, random)
    default:
      return null
  }
}

function roll (text: string, random: Object) {
  var args = text.split(' ')

  // Get the random number
  let [num, max] = args[0].split('d')
  num = Number(num)
  max = Number(max)
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

const commandParser = (store: Object) => (next: Function) => {
  let random = new Random(Random.engines.mt19937().autoSeed())

  return (action: Action) => {
    if (action.type === 'SEND_MESSAGE') {
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
