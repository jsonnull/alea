/* @flow */

// Result data structure for messages
export type MessageResult = {
  mod: number,
  rolls: Array<number>,
  total: number
}

/* Message type */
export type Message = {
  key: string,
  from: string,
  text: string,
  result: ?MessageResult,
  timestamp: number
}

export type SessionMeta = {
  name: string
}

export type SessionInfo = {
  sessionId: string,
  meta?: SessionMeta
}

export type SessionList = {
  [key: string]: SessionInfo
}

export type Theme = 'light' | 'dark'

export type Tab = 'Session' | 'Character' | 'Sessions' | 'Profile'
