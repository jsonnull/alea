// @flow
import currentUser from './currentUser'
import enterLock from './enterLock'
import sidebar from './sidebar'
import ui from './ui'
import type { CurrentUserState } from './currentUser'
import type { LockState } from './enterLock'
import type { SidebarState } from './sidebar'
import type { UIState } from './ui'

export type ReducerState = {
  currentUser: CurrentUserState,
  enterLock: LockState,
  sidebar: SidebarState,
  ui: UIState
}

export { currentUser, enterLock, sidebar, ui }
