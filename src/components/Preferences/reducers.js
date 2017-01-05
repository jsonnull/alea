import {
  CHANGE_THEME,
  TOGGLE_CHAT_PIN,
  RECEIVE_PREFS,
  THEMES
} from '../../actions'

const initialState = {
  theme: THEMES.LIGHT,
  chatPinned: false
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return Object.assign({}, state, {
        theme: action.theme
      })
    case TOGGLE_CHAT_PIN:
      return Object.assign({}, state, {
        chatPinned: !state.chatPinned
      })
    case RECEIVE_PREFS:
      const { theme, chatPinned } = action.prefs
      return Object.assign({}, state, {
        theme, chatPinned
      })
    default:
      return state
  }
}
