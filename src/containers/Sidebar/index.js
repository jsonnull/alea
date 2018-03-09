// @flow
import { connect } from 'react-redux'
import { changeSidebarTab } from '../../actions'
import Sidebar from '../../components/Sidebar'
import sessionNameSelector from '../../selectors/sessionName'
import type { State } from '../../store'
import type { Tab } from '../../types'

type StateProps = {
  name: string,
  open: boolean,
  tab: Tab
}
const mapStateToProps = (state: State): StateProps => {
  return {
    name: sessionNameSelector(state),
    open: state.sidebar.open,
    tab: state.sidebar.tab
  }
}

type DispatchProps = {
  changeTab: Function
}
const mapDispatchToProps = (dispatch: Function): DispatchProps => {
  return {
    changeTab: tab => dispatch(changeSidebarTab(tab))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
