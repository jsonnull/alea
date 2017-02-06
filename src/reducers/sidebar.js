/* @flow */
import type { Action } from '../actions/types'
import type { SidebarState } from '../types'

const initialState = {
  open: true,
  tab: 'Session'
}

export default function reducer (state: SidebarState = initialState, action: Action) {
  switch (action.type) {
    case 'CHANGE_SIDEBAR_TAB':
      return { ...state, tab: action.tab }
    default:
      return state
  }
}
