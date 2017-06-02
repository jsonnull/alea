/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import styled from 'styled-components'
import * as fonts from 'styles/fonts'

type Props = {
  goHome: Function
}

const Home = (props: Props) => {
  const { goHome } = props

  const Button = styled.div`
    width: 4.8rem;
    height: 4.8rem;
    line-height: 4.8rem;
    padding: 0 1.85rem;
    font-family: ${fonts.header};
  `

  return <Button onClick={goHome}>
    Aleamancer
  </Button>
}

const mapDispatchToProps = (dispatch: Function) => ({
  goHome: () => dispatch(push('/'))
})

export default connect(null, mapDispatchToProps)(Home)
