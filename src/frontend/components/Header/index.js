// @flow
import * as React from 'react'
import LogoSvg from 'frontend/components/Logo'
import slug from 'slugg'
import UserDropdown from './components/dropdown'
import { Button, LogoWrapper, Avatar, Container, Column } from './styles'
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
  const profile = props.isLoading
    ? null
    : props.currentUserProfileQuery.currentUser.profile

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
        {profile && (
          <React.Fragment>
            <Button to={`/u/${slug(profile.username)}/${profile.id}`}>
              {profile.username}
              {profile.avatar && <Avatar src={profile.avatar} />}
            </Button>
            <UserDropdown />
          </React.Fragment>
        )}
      </Column>
    </Container>
  )
}

export default Header
