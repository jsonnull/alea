// @flow
import { connect } from 'react-redux'
import Session from '../../components/Sidebar/Session'
import sessionNameSelector from '../../selectors/sessionName'
import type { State } from '../../store'

type StateProps = { name: string }
const mapStateToProps = (state: State): StateProps => ({
  name: sessionNameSelector(state)
})

export default connect(mapStateToProps)(Session)
