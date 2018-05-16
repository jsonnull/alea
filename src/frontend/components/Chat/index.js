// @flow
import React from 'react'
import { Container, Loading, Error, Messages, MessagesWrapper } from './styles'
import Header from './Header'
import Info from './Info'
import Compose from './Compose'
import MessageList from './MessageList'
import MessageView from './Message'
import type { GetGameMessagesType } from 'frontend/graphql/queries/game/getGameMessages'
import type { GetCurrentUserPreferencesType } from 'frontend/graphql/queries/currentUser/getCurrentUserPreferences'
import type { DBGameParticipant } from 'common/types'

type Props = {
  isLoading: boolean,
  hasError: boolean,
  errors: Array<string>,
  gameMessagesQuery: {
    loading: boolean,
    game: GetGameMessagesType
  },
  currentUserPreferencesQuery: {
    currentUser: GetCurrentUserPreferencesType
  },
  participants: ?Array<DBGameParticipant>,
  subscribeToNewMessages: Function,
  setChatPinned: Function,
  sendMessage: Function,
  enterLock: boolean,
  lockEnter: Function,
  unlockEnter: Function
}

type State = {
  subscription: ?Function
}

class Chat extends React.Component<Props, State> {
  state = {
    subscription: null
  }

  sendMessage = (text: string) => {
    const trimmed = text.trim()
    if (trimmed.length > 0) {
      this.props.sendMessage(trimmed)
    }
  }

  componentDidMount() {
    this.subscribe()
  }

  componentDidUpdate(prev: Props) {
    const { gameMessagesQuery } = this.props

    // Do not allow old subscription messages to continue if we're mounting a
    // new chat or regaining network status
    if (gameMessagesQuery.loading) {
      this.unsubscribe()
    }

    if (prev.gameMessagesQuery.loading && !gameMessagesQuery.loading) {
      this.subscribe()
    }
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  subscribe = () => {
    this.setState({
      subscription: this.props.subscribeToNewMessages()
    })
  }

  unsubscribe = () => {
    const { subscription } = this.state
    if (subscription) {
      // Perform unsubscribe from subscribeToMore
      subscription()
    }
  }

  render() {
    const {
      isLoading,
      hasError,
      currentUserPreferencesQuery,
      gameMessagesQuery,
      setChatPinned,
      participants
    } = this.props

    if (isLoading || !participants) {
      return (
        <Container>
          <Loading>Connecting to chat...</Loading>
        </Container>
      )
    }

    if (hasError) {
      return (
        <Container>
          <Error>There was an error.</Error>
        </Container>
      )
    }

    const messages = gameMessagesQuery.game.messageConnection.edges.map(
      edge => edge.node
    )

    const isPinned =
      currentUserPreferencesQuery.currentUser.preferences.chatPinned

    const shownMessages = isPinned ? messages : messages.slice(-4)

    return (
      <Container isPinned={isPinned}>
        <Header isPinned={isPinned} setChatPinned={setChatPinned} />
        <MessageList>
          {scrollRef => (
            <MessagesWrapper>
              <Messages isPinned={isPinned} innerRef={scrollRef}>
                {shownMessages.map(message => {
                  const participant = participants.find(
                    p => p.id === message.from
                  ) || {
                    profile: {
                      avatar: null,
                      username: message.from.slice(0, 4)
                    }
                  }

                  const { avatar, username } = participant.profile

                  return (
                    <MessageView
                      key={message.id}
                      message={message}
                      username={username}
                      avatar={avatar}
                    />
                  )
                })}
              </Messages>
            </MessagesWrapper>
          )}
        </MessageList>
        <Compose
          onSend={this.sendMessage}
          lockEnter={this.props.lockEnter}
          unlockEnter={this.props.unlockEnter}
        />
        <Info />
      </Container>
    )
  }
}

export default Chat
