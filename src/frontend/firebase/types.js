// @flow
import type { MessageResult } from 'common/types'

export interface Ref {
  on(event: string, callback: Function): Ref;
  orderByChild(key: string): Ref;
  limitToLast(length: number): Ref;
  off(): void;
}

/* Messages sent/received by Firebase */
export type FirebaseMessage = {
  from: string,
  result: ?MessageResult,
  text: string,
  timestamp: number
}
