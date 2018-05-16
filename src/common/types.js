// @flow

export type RollAction =
  | { type: 'number', number: number, operation: '+' | '-' }
  | { type: 'roll', die: number, result: number, operation: '+' | '-' }

export type Roll = Array<RollAction>

export type MessageResult = {
  type: 'rolls',
  rolls: Array<Roll>
}

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

export type DBGameParticipant = {
  id: string,
  lastSeen: ?Date,
  profile: DBProfile
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
  owner: string,
  participants: Array<DBGameParticipant>
}

export type DBProfile = {
  id: string,
  username: string,
  avatar: ?string
}
