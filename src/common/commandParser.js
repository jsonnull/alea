// @flow
import { getRollResult } from './rollCommand'
import type { MessageResult } from 'common/types'

export function getMessageResult(text: string): ?MessageResult {
  const command = getCommandName(text)

  if (command == '/r' || command == '/roll' || command === null) {
    const result = getRollResult(text)
    return result
  }

  return null
}

export function getCommandName(text: string): ?string {
  if (text[0] == '/') {
    const firstSpace = text.indexOf(' ')
    const command = text.slice(0, firstSpace)

    return command
  }

  return null
}
