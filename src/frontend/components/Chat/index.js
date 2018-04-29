// @flow
import React from 'react'
import { Container, Loading, Error } from './styles'
import Header from './Header'
import Info from './Info'
import Compose from './Compose'
import MessageList from './MessageList'
import type { GetGameMessagesType } from 'frontend/graphql/queries/game/getGameMessages'
import type { GetCurrentUserPreferencesType } from 'frontend/graphql/queries/currentUser/getCurrentUserPreferences'

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
  subscribeToNewMessages: Function,
  setChatPinned: Function,
  sendMessage: Function
}

type State = {
  subscription: ?Function
}

class Chat extends React.Component<Props, State> {
  state = {
    subscription: null
  }

  sendMessage = (text: string) => {
    this.props.sendMessage(text.trim())
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
      setChatPinned
    } = this.props

    if (isLoading) {
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
        <MessageList messages={shownMessages} isPinned={isPinned} />
        <Compose onSend={this.sendMessage} isPinned={isPinned} />
        <Info />
      </Container>
    )
  }
}

export default Chat
