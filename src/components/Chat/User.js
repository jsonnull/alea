/* @flow */
import React from 'react'
import styled from 'styled-components'
// import CurrentUser from 'App/components/CurrentUser'
// import SettingsButton from 'App/components/SettingsButton'
// import ToggleChat from 'App/components/ToggleChat'
import { lightBlue } from 'styles/colors'

const CHAT_WIDTH = '320px'
const Container = styled.div`
  position: fixed;
  top: 0.6rem;
  right: 1.2rem;
  display: flex;
  height: 3.6rem;
  border-radius: 5px;
  width: calc(${CHAT_WIDTH} - 1.2rem);

  /*
  :global(.unpinned) & {
    background-color: $bgPrimary;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
    width: auto;

    :global(.dark) & {
      background-color: $bgPrimaryDark;
    }
  }
  */
`

const UserWrapper = styled.div`
  line-height: 3.6rem;
  padding: 0 0.6rem;
  margin-left: auto;

  /*
  :global(.unpinned) & {
    margin-left: 0;
  }
  */
`

const SettingsWrapper = styled.div`
  display: flex;
  position: relative;
  width: 3.6rem;
  height: 3.6rem;
  line-height: 3.6rem;
  border-radius: 5px;

  &:hover {
    color: white;
    cursor: pointer;
    background-color: ${lightBlue};
  }
`

const PinWrapper = SettingsWrapper.extend`
  margin-left: 1.2rem;

  /*
  :global(.unpinned) & {
    margin-left: auto;
  }
  */
`

class User extends React.Component<*> {
  render() {
    return (
      <Container>
        {/*
        <PinWrapper>
          <ToggleChat />
        </PinWrapper>
        <UserWrapper>
          <CurrentUser />
        </UserWrapper>
        <SettingsWrapper>
          <SettingsButton />
        </SettingsWrapper>
        */}
      </Container>
    )
  }
}

export default User
