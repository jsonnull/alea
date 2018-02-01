// @flow
import * as React from 'react'
import styled from 'styled-components'
import { CONSTS } from 'styles/common'
import Home from './Home'
import Logo from './Logo'
import CurrentUser from './CurrentUser'
import Settings from './Settings'
import Login from './Login'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: ${CONSTS.headerHeight};
  line-height: ${CONSTS.headerHeight};
  color: white;
  background-color: ${props => props.theme.backgroundInverted};
`

const Column = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 0.5rem;
`

const Right = Column.extend`justify-content: flex-end;`

type Props = {
  username: string | null,
  goHome: Function,
  showLogin: Function,
  showSettings: Function
}

const Header = (props: Props) => {
  const { username, goHome, showLogin, showSettings } = props

  return (
    <Container>
      <Column>
        <Home goHome={goHome} />
      </Column>
      <Column>
        <Logo />
      </Column>
      <Right>
        {username === null ? (
          <Login showLogin={showLogin} />
        ) : (
          <React.Fragment>
            <CurrentUser username={username} />
            <Settings showSettings={showSettings} />
          </React.Fragment>
        )}
      </Right>
    </Container>
  )
}

export default Header
