/* @flow */
import React from 'react'
import Editable from 'app/components/Editable'
import Label from '../Label'
import styles from './style.css'

type Props = {
  logout: Function
}

const Logout = (props: Props) => {
  return <button
    className={`${styles.button} ${styles.logout}`}
    type='button'
    onClick={() => props.logout() }
  >
    Logout
  </button>
}

export default Logout
