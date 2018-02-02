// @flow
import { connect } from 'react-redux'
import Session from '../../components/Sidebar/Session'
import type { State } from '../../store'

type StateProps = { name: string }
const mapStateToProps = (state: State): StateProps => ({
  name: state.session.name
})

export default connect(mapStateToProps)(Session)
