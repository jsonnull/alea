// @flow
import reduce from '../ui'

const INIT_ACTION = { type: '@@INIT' }

describe('ui reducer', () => {
  it('should have correct initial state', () => {
    expect(reduce(undefined, INIT_ACTION)).toEqual({
      appIsLoading: true,
      userIsLoggedIn: false,
      showSettings: false
    })
  })
})
