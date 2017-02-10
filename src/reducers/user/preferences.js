/* @flow */
import type { Action } from '../../actions/types'
import type { UserPreferencesState } from '../../types'

const initialState = {
  theme: 'light',
  chatPinned: false
}

export default function reducer (state: UserPreferencesState = initialState, action: Action) {
  switch (action.type) {
    case 'CHANGE_THEME':
      return { ...state, theme: action.theme }
    case 'TOGGLE_CHAT_PIN':
      return { ...state, chatPinned: !state.chatPinned }
    case 'HYDRATE_PREFERENCES':
      const { theme, chatPinned } = action.prefs
      return { ...state, theme, chatPinned }
    default:
      return state
  }
}
