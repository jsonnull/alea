/* @flow */
import React from 'react'
import styled from 'styled-components'
import type { SessionInfo } from 'types'
import { fonts } from 'styles/common'

const Tag = styled.div`
  display: inline-block;
  border-radius: 2px;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${props => props.theme.backgroundSecondary};
`

const SessionName = styled.div`
  font-family: ${fonts.heading};
  font-size: 1.8rem;
`

const Session = styled.div`
  padding: 1.2rem;
  border-radius: 5px;
  margin: 0 1.2rem 2.4rem;
  flex: 1 0 25%;
  max-width: 25%;
  min-height: 100px;
  cursor: pointer;
  background-color: ${props => props.theme.backgroundSecondary};
`

const Meta = (props: { isCurrent: boolean }) => {
  if (props.isCurrent) {
    return <Tag>Current</Tag>
  }

  return null
}

const Loading = () => (
  <div>
    <i className={`fa fa-circle-o-notch fa-spin fa-fw`} />{' '}
    <span>Retrieving game info...</span>
  </div>
)

type Props = {
  isCurrent: boolean,
  session: SessionInfo,
  setSession: Function
}

const Item = (props: Props) => {
  const { isCurrent } = props

  const content = !props.session.meta ? (
    <Loading />
  ) : (
    <div>
      <SessionName>{props.session.meta.name}</SessionName>
      <Meta isCurrent={props.isCurrent} />
    </div>
  )

  return (
    <Session
      onClick={() => {
        props.setSession(props.session.sessionId)
      }}
    >
      {content}
    </Session>
  )
}

export default Item
