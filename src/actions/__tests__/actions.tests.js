import * as actions from '../index'

describe('actions', () => {
  // TODO: Type-check on message
  it('should create an action to receive a message', () => {
    const message = {
      key: 'key',
      from: 'user',
      text: 'message text',
      result: null,
      timestamp: 0
    }
    const { key, from, text, result, timestamp } = message
    const expectedAction = {
      type: 'RECEIVE_MESSAGE', key, from, text, result, timestamp
    }
    expect(actions.receiveMessage(message)).toEqual(expectedAction)
  })
})
