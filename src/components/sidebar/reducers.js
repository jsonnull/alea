import {
  CHANGE_SIDEBAR_TAB
} from '../../actions'

const initialState = {
  open: true,
  tab: 'Home'
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_SIDEBAR_TAB:
      return { ...state, tab: action.tab }
    default:
      return state
  }
}
