// @flow
import Random from 'random-js'
import type { MessageResult } from 'common/types'

const random = new Random(Random.engines.mt19937().autoSeed())

const performRolls = (result: MessageResult): MessageResult => {
  if (result.type !== 'rolls') {
    return result
  }

  result.rolls = result.rolls.map(actions => {
    const newActions = actions.map(action => {
      if (action.type !== 'roll') {
        return action
      }

      return {
        ...action,
        result: random.integer(1, action.die)
      }
    })

    return newActions
  })

  return result
}

export default performRolls
