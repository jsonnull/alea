import React from 'react'
import { connect } from 'react-redux'
import { changeSidebarTab } from '../../actions'
import Profile from './profile'
import styles from './style.css'

const MenuItem = (props) => {
  const selected = props.selected
    ? ' ' + styles.menuItemSelected
    : ''
  return (
    <div className={ styles.menuItem + selected } onClick={ () => props.action(props.name) }>
      <i className={`fa ${props.icon}`}></i>
    </div>
  )
}

const SidebarContent = (props) => {
  switch (props.tab) {
    case 'World':
      return <div />
    case 'Profile':
      return <Profile />
    default:
      return <div />
  }
}

class Sidebar extends React.Component {
  render () {
    const buttons = [
      ['World', 'fa-globe'],
      ['Character', 'fa-id-card-o'],
      ['Profile', 'fa-user']
    ]

    return (
      <div className={ styles.sidebar }>
        <div className={ styles.menu }>
          {buttons.map(button =>
            {
              const [name, icon] = button
              const selected = name == this.props.tab
              return <MenuItem
                key={name}
                name={name}
                icon={icon}
                selected={selected}
                action={this.props.changeTab}
              />
            }
          )}
        </div>
        <div className={ styles.content }>
          <SidebarContent tab={this.props.tab} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    open: state.sidebar.open,
    tab: state.sidebar.tab
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTab: tab => dispatch(changeSidebarTab(tab))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
