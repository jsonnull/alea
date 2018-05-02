// @flow
import currentUser from './currentUser'
import sidebar from './sidebar'
import ui from './ui'
import type { CurrentUserState } from './currentUser'
import type { SidebarState } from './sidebar'
import type { UIState } from './ui'

type RouterState = {
  location: {
    pathname: string,
    search: string,
    hash: string
  }
}

export type ReducerState = {
  sidebar: SidebarState,
  currentUser: CurrentUserState,
  ui: UIState,
  router: RouterState
}

export { currentUser, sidebar, ui }
