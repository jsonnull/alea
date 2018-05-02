// @flow
import * as React from 'react'
import styled from 'styled-components'
import { fontSize, colors } from 'frontend/styles/common'

const Area = styled.div`
  padding: 100px;
`

const Heading = styled.div`
  font-weight: bold;
  margin-bottom: 2rem;
  color: ${colors.red};
  font-size: ${fontSize.large};
`

const Message = styled.div`
  font-family: monospace;
  font-size: ${fontSize.medium};
`

const Error = ({
  componentStack,
  error
}: {
  componentStack: string,
  error: Error
}) => {
  return (
    <Area>
      <Heading>There was an error.</Heading>
      <Message>{error.message}</Message>
      <pre>{componentStack}</pre>
    </Area>
  )
}

export default Error
