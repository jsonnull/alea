/* @flow */

// Result data structure for messages
export type MessageResult = {
  mod: number,
  rolls: Array<number>,
  total: number
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

export type Theme = 'light' | 'dark'

export type Tab = 'Session' | 'Character' | 'Sessions' | 'Profile'
