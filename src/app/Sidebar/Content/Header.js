/* @flow */
import React from 'react'
import styles from './style.css'

const Header = (props: Object) => (
  <h1 className={ styles.header }>
    { props.children }
  </h1>
)

export default Header

