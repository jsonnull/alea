import React from 'react'
import { connect } from 'react-redux'
import { changeSidebarTab } from '../../actions'
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

class Sidebar extends React.Component {
  render () {
    const buttons = [
      ['Home', 'fa-globe'],
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
