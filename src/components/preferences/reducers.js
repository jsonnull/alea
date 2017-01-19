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
      return { ...state, theme: action.theme }
    case TOGGLE_CHAT_PIN:
      return { ...state, chatPinned: !state.chatPinned }
    case RECEIVE_PREFS:
      const { theme, chatPinned } = action.prefs
      return { ...state, theme, chatPinned }
    default:
      return state
  }
}
