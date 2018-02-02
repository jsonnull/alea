// @flow
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from '../containers/Header'
import { light as theme } from '../styles/themes'
import { CONSTS, colors } from '../styles/common'
import Logo from '../components/Logo'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Wrapper = styled.div`
  position: absolute;
  top: ${CONSTS.headerHeight};
  bottom: 0;
  right: 0;
  left: 0;
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
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Wrapper>
          <Item>
            <Logo height={'40px'} />
          </Item>
        </Wrapper>
      </Container>
    </ThemeProvider>
  )
}

export default Home
