/* @flow */
import React from 'react'
import styled, { withTheme } from 'styled-components'
import Label from 'components/Label'
import Input from 'components/Input'
import editable from 'containers/editable'

type Props = {
  name: string,
  onChange: Function
}

const Editable = editable(withTheme(styled.div`
  position: relative;
  line-height: 3.6rem;
  background: transparent;
  border: none;
  border-radius: 0;
  padding-left: 0;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.color};
  margin: 0 0 1.2rem;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`))

const NameInput = withTheme(Input.extend`
  background: transparent;
  border: none;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.color};
  margin: 0 0 1.2rem;
  width: 100%;
  padding: 0;
`)

const Name = (props: Props) => {
  return <div>
    <Label>Display Name:</Label>
    <Editable
      isHovering={true}
      value={props.name}
      input={NameInput}
      onChange={props.onChange}
    />
  </div>
}

export default Name
