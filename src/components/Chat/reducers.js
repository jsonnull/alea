import {
  RECEIVE_MESSAGE
} from '../../actions'

const initialState = {
  messages: []
}

export default function reducer (state = initialState, action) {
  const { type, key, from, text, result } = action
  switch (type) {
    case RECEIVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat({ key, from, text, result })
      }
    default:
      return state
  }
}
