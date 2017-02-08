/* @flow */
import React from 'react'
import styles from './style.css'

const Label = (props: Object) => (
  <label className={ styles.label }>
    { props.children }
  </label>
)

export default Label
