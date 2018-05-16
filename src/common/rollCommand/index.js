// @flow
import flatten from 'lodash.flatten'
import type { Roll, RollAction, MessageResult } from 'common/types'

export function getRollResult(text: string): ?MessageResult {
  const rolls = text
    .split(',')
    .map(getRoll)
    .filter(Boolean)

  if (rolls.length == 0) {
    return null
  }

  if (rolls.includes(null)) {
    return null
  }

  return {
    type: 'rolls',
    rolls
  }
}

export function getRoll(text: string): ?Roll {
  const actions: Array<RollAction> = []

  const tokens = flatten(
    text.split(' ').map(token => {
      // Break out modifiers into separate tokens
      if (token[0] == '+' || token[0] == '-') {
        return [token[0], token.slice(1)]
      }
      return token
    })
  ).filter(t => t !== '')

  let nextOperation = '+'

  while (tokens.length > 0) {
    const token = tokens.shift()

    // Ignore '/r'
    if (token == '/r' || token == '/roll') {
      continue
    }

    if (token == '+' || token == '-') {
      // Edge case where there's a dangling '+'
      if (tokens.length == 0) {
        return null
      }
      nextOperation = token
      continue
    }

    // Detect if this is a die or number
    const isDie = token.indexOf('d') !== -1

    if (isDie) {
      const rollActions = getRollActions(token, nextOperation)
      if (!rollActions) {
        return null
      }
      for (const action of rollActions) {
        actions.push(action)
      }
    } else {
      const action = getNumberAction(token)
      if (!action) {
        return null
      }
      actions.push(action)
    }

    // Reset nextOperation
    nextOperation = '+'
  }

  return actions
}

export function getRollActions(
  text: string,
  operation: '+' | '-' = '+'
): ?Array<RollAction> {
  const tokens = text.split('')

  // Number of die rolls may be indicated by number of `d`s or by Int
  let numberOfRolls = 0
  const firstNumber = Number.parseInt(tokens[0], 10)
  const isNumber = !Number.isNaN(firstNumber)
  if (isNumber) {
    numberOfRolls = firstNumber
  } else {
    numberOfRolls = tokens.filter(t => t == 'd').length
  }

  if (numberOfRolls == 0) {
    return null
  }

  const lastLetterIndex = tokens.lastIndexOf('d')
  const dieType = Number.parseInt(tokens[lastLetterIndex + 1], 10)
  if (Number.isNaN(dieType)) {
    return null
  }

  const actions = []

  for (let i = 0; i < numberOfRolls; i++) {
    const action = { type: 'roll', die: dieType, result: 0, operation }
    actions.push(action)
  }

  return actions
}

function getNumberAction(
  text: string,
  operation: '+' | '-' = '+'
): ?RollAction {
  const num = Number(text)

  if (Number.isNaN(num)) {
    return null
  }

  return {
    type: 'number',
    number: num,
    operation
  }
}
