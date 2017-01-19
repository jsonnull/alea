import React from 'react'
import { connect } from 'react-redux'
import styles from './style.css'

const MenuItem = (props) => {
  return (
    <div className={ styles.menuItem }>
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
              return <MenuItem name={name} icon={icon} />
            }
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    open: state.sidebar.open
  }
}

export default connect(
  mapStateToProps
)(Sidebar)
