import {
  RECEIVE_MESSAGE,
  TOGGLE_CHAT_PIN
} from '../../actions'

const initialState = {
  pinned: false,
  messages: []
}

export default function reducer (state = initialState, action) {
  const { type, key, from, text, result } = action
  switch (type) {
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, {
        messages: state.messages.concat({ key, from, text, result })
      })
    case TOGGLE_CHAT_PIN:
      return Object.assign({}, state, {
        pinned: !state.pinned
      })
    default:
      return state
  }
}
