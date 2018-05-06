// @flow

export type Roll =
  | number
  | {
      die: number,
      result: number,
      mod?: 'keep' | 'drop',
      operation: '+' | '-'
    }

export type MessageResult = Array<Roll>

/* Message type */
export type Message = {
  id: string,
  from: string,
  text: string,
  result: ?MessageResult,
  timestamp: Date
}

export type DBMessage = {
  ...$Exact<Message>
}

export type SessionMeta = {
  name: string
}

export type SessionInfo = {
  id: string,
  meta?: SessionMeta
}

export type ThemeName = 'light' | 'dark'

export type Tab = 'Session' | 'Character'

export type UserProfile = {
  displayName: string,
  photoURL: string | null
}

export type DBUser = {
  id: string
}

export type DBPreferences = {
  id: string,
  chatPinned: boolean,
  theme: ThemeName
}

export type DBGame = {
  id: string,
  name: string,
  owner: string
}

export type DBProfile = {
  id: string,
  username: string,
  avatar: ?string
}
