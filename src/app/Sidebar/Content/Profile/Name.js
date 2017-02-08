/* @flow */
import React from 'react'
import Editable from 'app/components/Editable'
import Label from '../Label'
import sidebarStyles from '../style.css'

type Props = {
  name: string,
  onChange: Function
}

const Name = (props: Props) => {
  return <div>
    <Label>Display Name:</Label>
    <Editable
      className={ sidebarStyles.field }
      value={props.name}
      onChange={val => props.onChange(val)}/>
  </div>
}

export default Name
