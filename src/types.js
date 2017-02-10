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
  data: UserDataState,
  preferences: UserPreferencesState,
  profile: UserProfileState
}

export type UserDataState = {
  currentSession: ?string,
  sessions: Array<any>
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
  result: ?MessageResult,
  text: string,
  timestamp: number
}

/* Messages sent/received by Firebase */
export type FirebaseMessage = {
  name: string,
  result: ?MessageResult,
  text: string,
  timestamp: number
}

export type MessageResult = {
  mod: number,
  rolls: Array<number>,
  total: number
}

export type Theme = 'light' | 'dark'
