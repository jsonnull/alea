/* @flow */

/* State tree */
export type State = {
  messages: Array<Message>,
  session: SessionState,
  sidebar: SidebarState,
  ui: UIState,
  user: UserState
}

export type MessagesState = Array<Message>

export type SessionState = {
  [key: string]: string
}

export type SidebarState = {
  open: boolean,
  tab: string
}

export type UIState = {
  appIsLoading: boolean,
  userIsLoggedIn: boolean
}

export type UserState = {
  preferences: UserPreferencesState,
  profile: UserProfileState
}

export type UserPreferencesState = {
  theme: Theme,
  chatPinned: boolean
}

export type UserProfileState = {
  displayName: string,
  photoURL: string
}

/* Message type */
export type Message = {
  from: string,
  key: string,
  result: ?string,
  text: string,
  timestamp: number
}

/* Messages sent/received by Firebase */
export type FirebaseMessage = {
  name: string,
  result: ?string,
  text: string,
  timestamp: number
}

export type Theme = 'light' | 'dark'
