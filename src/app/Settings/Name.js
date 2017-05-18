/* @flow */
import React from 'react'
import Editable from 'App/components/Editable'
import Label from 'App/components/Label'
import styles from './style.css'

type Props = {
  name: string,
  onChange: Function
}

const Name = (props: Props) => {
  return <div>
    <Label>Display Name:</Label>
    <Editable
      className={ styles.field }
      value={props.name}
      onChange={val => props.onChange(val)}/>
  </div>
}

export default Name
