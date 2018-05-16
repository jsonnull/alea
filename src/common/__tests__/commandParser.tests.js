// @flow
import { getCommandName } from '../commandParser'

describe('Command parser', () => {
  it('should correctly identify command names', () => {
    const result = getCommandName('/roll something')
    expect(result).toEqual('/roll')
  })

  it('should return null when no command exists', () => {
    const result = getCommandName('something')
    expect(result).toBeNull()
  })
})
