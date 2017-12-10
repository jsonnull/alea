// @flow
import { take, call } from 'redux-saga/effects'
import { CHANGE_THEME, TOGGLE_CHAT_PIN } from 'actions/types'
import savePreferences from '../savePreferences'

describe('savePreferences saga', () => {
  const mockSaveFunction = () => {}
  const gen = savePreferences(mockSaveFunction)

  it('should wait for preferences to change', () => {
    expect(gen.next().value).toEqual(take([CHANGE_THEME, TOGGLE_CHAT_PIN]))
  })

  it('should select the preferences state from the store', () => {
    expect(gen.next().value).toHaveProperty('SELECT')
  })

  it('should call the function to save preferences', () => {
    expect(gen.next().value).toEqual(call(mockSaveFunction, undefined))
  })

  it('should continue listening', () => {
    expect(gen.next().done).toBe(false)
  })
})
