// @flow
import { connect } from 'react-redux'
import { LOCK_ENTER, UNLOCK_ENTER } from 'frontend/actions/types'
import type { State } from 'frontend/store'

const mapState = (state: State) => ({
  enterLock: state.enterLock
})

const mapDispatch = (dispatch: Function) => ({
  lockEnter: () => dispatch({ type: LOCK_ENTER }),
  unlockEnter: () => dispatch({ type: UNLOCK_ENTER })
})

export default connect(mapState, mapDispatch)
