/* @flow */

/* State tree */
export type State = {
  messages: Array<Message>,
  ui: UIState,
  sidebar: SidebarState,
  user: UserState
}

export type MessagesState = Array<Message>

export type UIState = {
  appIsLoading: boolean,
  userIsLoggedIn: boolean
}

export type SidebarState = {
  open: boolean,
  tab: string
}

export type UserState = {
  preferences: UserPreferencesState,
  profile: UserProfileState
}

export type UserPreferencesState = {
  theme: string,
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
