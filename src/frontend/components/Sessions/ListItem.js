// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import slug from 'slugg'
import { fontSize, fonts } from 'frontend/styles/common'

const SessionName = styled.div`
  font-family: ${fonts.heading};
  font-size: ${fontSize.medium};
`

const Session = styled(Link)`
  display: block;
  padding: 1rem;
  min-height: 100px;
  border-radius: 5px;
  margin: 0 1rem 2rem;
  flex: 1 0 25%;
  max-width: 25%;
  cursor: pointer;
  background-color: ${props => props.theme.backgroundSecondary};
  color: ${props => props.theme.color};
  text-decoration: none;
`

type Props = {
  id: string,
  name: string
}

const Item = (props: Props) => {
  const { id, name } = props
  return (
    <Session to={`/g/${slug(name)}/${id}`}>
      <SessionName>{props.name}</SessionName>
    </Session>
  )
}

export default Item
