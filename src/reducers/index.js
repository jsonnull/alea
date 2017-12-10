// @flow
import currentUser from './currentUser'
import messages from './messages'
import preferences from './preferences'
import session from './session'
import sidebar from './sidebar'
import ui from './ui'
import user from './user/'
import type { CurrentUserState } from './currentUser'
import type { MessagesState } from './messages'
import type { PreferencesState } from './preferences'
import type { SessionState } from './session'
import type { SidebarState } from './sidebar'
import type { UIState } from './ui'
import type { UserState } from './user'

type RouterState = {
  location: {
    pathname: string,
    search: string,
    hash: string
  }
}

export type ReducerState = {
  currentUser: CurrentUserState,
  messages: MessagesState,
  preferences: PreferencesState,
  session: SessionState,
  sidebar: SidebarState,
  ui: UIState,
  user: UserState,
  router: RouterState
}

export { currentUser, messages, preferences, session, sidebar, ui, user }
