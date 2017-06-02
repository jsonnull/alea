/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import * as colors from 'styles/colors'
import styled from 'styled-components'

type Props = {
  showSettings: Function
}

const Settings = (props: Props) => {
  const { showSettings } = props

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

  return (
    <Button onClick={showSettings}>
      <i className={`fa fa-cog`}></i>
    </Button>
  )
}

const mapDispatchToProps = (dispatch: Function) => ({
  showSettings: () => dispatch({ type: 'SHOW_SETTINGS' })
})

export default connect(null, mapDispatchToProps)(Settings)
