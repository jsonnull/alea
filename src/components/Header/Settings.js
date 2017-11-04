/* @flow */
import React from 'react'
import { colors } from 'styles/common'
import styled from 'styled-components'

const Button = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  text-align: center;
  line-height: 4.8rem;

  &:hover {
    cursor: pointer;
    background-color: ${colors.lightBlue};
  }
`

type Props = {
  showSettings: Function
}

const Settings = (props: Props) => {
  const { showSettings } = props

  return (
    <Button onClick={showSettings}>
      <i className={`fa fa-cog`} />
    </Button>
  )
}

export default Settings
