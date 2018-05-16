// @flow
import { getRollActions, getRoll, getRollResult } from '../index'

describe('getRollActions', () => {
  it('should work for a simple roll', () => {
    const resultActions = getRollActions('1d6')
    const expectedActions = [
      { type: 'roll', die: 6, result: 0, operation: '+' }
    ]
    expect(resultActions).toEqual(expectedActions)
  })

  it('should work when leading number is omitted', () => {
    const resultActions = getRollActions('d6')
    const expectedActions = [
      { type: 'roll', die: 6, result: 0, operation: '+' }
    ]
    expect(resultActions).toEqual(expectedActions)
  })

  it('should return the correct number of rolls for leading number', () => {
    const resultActions = getRollActions('3d6')
    const expectedActions = [
      { type: 'roll', die: 6, result: 0, operation: '+' },
      { type: 'roll', die: 6, result: 0, operation: '+' },
      { type: 'roll', die: 6, result: 0, operation: '+' }
    ]
    expect(resultActions).toEqual(expectedActions)
  })

  it('should count `d`s for number of rolls', () => {
    const resultActions = getRollActions('dd6')
    const expectedActions = [
      { type: 'roll', die: 6, result: 0, operation: '+' },
      { type: 'roll', die: 6, result: 0, operation: '+' }
    ]
    expect(resultActions).toEqual(expectedActions)
  })
})

describe('getRoll', () => {
  it('should return rolls for simple roll', () => {
    const result = getRoll('1d6')
    const expected = [{ type: 'roll', die: 6, result: 0, operation: '+' }]
    expect(result).toEqual(expected)
  })

  it('should ignore leading command', () => {
    const result = getRoll('/roll 1d6')
    const expected = [{ type: 'roll', die: 6, result: 0, operation: '+' }]
    expect(result).toEqual(expected)
  })

  it('should allow multiple rolls', () => {
    const result = getRoll('1d6 d4 dd8')
    const expected = [
      { type: 'roll', die: 6, result: 0, operation: '+' },
      { type: 'roll', die: 4, result: 0, operation: '+' },
      { type: 'roll', die: 8, result: 0, operation: '+' },
      { type: 'roll', die: 8, result: 0, operation: '+' }
    ]
    expect(result).toEqual(expected)
  })

  it('should allow a mix of rolls and numbers', () => {
    const result = getRoll('1d6 d4 + 2')
    const expected = [
      { type: 'roll', die: 6, result: 0, operation: '+' },
      { type: 'roll', die: 4, result: 0, operation: '+' },
      { type: 'number', number: 2, operation: '+' }
    ]
    expect(result).toEqual(expected)
  })

  it('should allow subtracting rolls', () => {
    const result = getRoll('1d6 d4 -dd8')
    const expected = [
      { type: 'roll', die: 6, result: 0, operation: '+' },
      { type: 'roll', die: 4, result: 0, operation: '+' },
      { type: 'roll', die: 8, result: 0, operation: '-' },
      { type: 'roll', die: 8, result: 0, operation: '-' }
    ]
    expect(result).toEqual(expected)
  })
})

describe('Roll command', () => {
  it('should return a result for basic invocations', () => {
    const basicCommands = ['/r 1d6', '/roll 1d6', '1d6']

    for (const command of basicCommands) {
      const expectedResult = {
        type: 'rolls',
        rolls: [[{ type: 'roll', die: 6, result: 0, operation: '+' }]]
      }

      const result = getRollResult(command)

      expect(result).toEqual(expectedResult)
    }
  })

  it('should return a result for multiple rolls', () => {
    const result = getRollResult('d6 d4, dd8')
    const expected = {
      type: 'rolls',
      rolls: [
        [
          { type: 'roll', die: 6, result: 0, operation: '+' },
          { type: 'roll', die: 4, result: 0, operation: '+' }
        ],
        [
          { type: 'roll', die: 8, result: 0, operation: '+' },
          { type: 'roll', die: 8, result: 0, operation: '+' }
        ]
      ]
    }

    expect(result).toEqual(expected)
  })

  it('should return null on bad input', () => {
    const badInput = ['/r something', 'd6 please', 'd8 + ']

    for (const command of badInput) {
      const result = getRollResult(command)

      expect(result).toBe(null)
    }
  })
})
