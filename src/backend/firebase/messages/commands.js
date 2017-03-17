/* @flow */
import Random from 'random-js'
import type { Action } from 'actions/types'
import type { MessageResult } from 'types'

export default class CommandParser {
  random: Object

  constructor () {
    this.random = new Random(Random.engines.mt19937().autoSeed())
  }

  getMessageResult (text: string): ?MessageResult {
    let result = null

    if (text[0] === '/') {
      result = this.runCommand(text)
    }

    return result
  }

  runCommand (text: string): ?MessageResult {
    let words = text.split(' ')
    let args = words.slice(1).join(' ')

    switch (words[0]) {
      case '/r':
      case '/roll':
        return this.roll(args)
      default:
        return null
    }
  }

  roll (text: string): MessageResult {
    var args = text.split(' ').join('')
    args = args.split('+').join(' + ').split('-').join(' - ').split(' ')

    // Get the random number
    let rands = []
    let modifier = 0
    for(let i = 0; i < args.length; i++) {
      if (args[i].indexOf('d') !== -1) {
        let [num, max] = args[i].split('d').map(n => Number(n))

        for (let j = 0; j < num; j++) {
          let roll = this.random.integer(1, max)
          roll *= args[i - 1] === '-' ? -1 : 1
          rands.push(roll)
        }
      } else if (!isNaN(args[i])) {
        if(args[i - 1] === '+') {
          modifier += Number(args[i])
        } else if(args[i - 1] === '-') {
          modifier -= Number(args[i])
        }
      }
    }

    let total = rands.reduce((a, b) => a + b, 0) + modifier

    let result = {
      'rolls': rands, 
      'mod': modifier,
      'total': total 
    }
    return result
  }
}
