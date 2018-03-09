// @flow
import type { SessionsState } from '../../reducers/sessions'

const mockSessionsList: SessionsState = [
  { id: 'globalSession1' },
  { id: 'globalSession2' }
]

export default function getSessions(): Promise<?SessionsState> {
  return new Promise(resolve => {
    resolve(mockSessionsList)
  })
}
