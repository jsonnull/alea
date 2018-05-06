// @flow
import * as React from 'react'
import LogoSvg from 'frontend/components/Logo'
import slug from 'slugg'
import { SettingsIcon } from 'frontend/components/icon'
import { Button, LogoWrapper, Container, Column } from './styles'
import type { DBProfile } from 'common/types'

type Props =
  | {
      isLoading: true,
      currentUserProfileQuery: null
    }
  | {
      isLoading: false,
      currentUserProfileQuery: {
        currentUser: { profile: DBProfile }
      }
    }

const Header = (props: Props) => {
  const currentUser = props.isLoading
    ? null
    : props.currentUserProfileQuery.currentUser

  return (
    <Container>
      <Column>
        <Button to="/sessions">Games</Button>
      </Column>
      <Column middle>
        <Button to="/">
          <LogoWrapper>
            <LogoSvg height="16px" />
          </LogoWrapper>
        </Button>
      </Column>
      <Column right>
        {currentUser && (
          <React.Fragment>
            <Button
              to={`/u/${slug(currentUser.profile.username)}/${
                currentUser.profile.id
              }`}
            >
              {currentUser.profile.username}
            </Button>
            <Button to="/settings">
              <SettingsIcon />
            </Button>
          </React.Fragment>
        )}
      </Column>
    </Container>
  )
}

export default Header
