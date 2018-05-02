// @flow
import type { Tab } from 'common/types'
import type { Action } from 'frontend/actions/types'

export const userLoggedIn = (id: string, email: string): Action => ({
  type: 'USER_LOGGED_IN',
  id,
  email
})

/*
 * Sidebar
 */
export const changeSidebarTab = (tab: Tab): Action => ({
  type: 'CHANGE_SIDEBAR_TAB',
  tab
})
