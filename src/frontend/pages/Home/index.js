// @flow
import * as React from 'react'
import styled from 'styled-components'
import { light as theme } from 'frontend/styles/themes'
import { colors } from 'frontend/styles/common'
import Header from 'frontend/containers/Header'
import Logo from 'frontend/components/Logo'

const Container = styled.div`
  background-color: ${colors.blue};
  color: ${theme.background};
  display: flex;
`

const Item = styled.div`
  margin: auto;
  text-align: center;
`

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Item>
          <Logo height={'40px'} />
        </Item>
      </Container>
    </React.Fragment>
  )
}

export default Home
