// @flow
import React from 'react'
import styled from 'styled-components'
import type { MessageResult, Roll } from 'common/types'
import { RollIcon } from 'frontend/components/icon'
import { Container } from './styles'

type Props = {
  result: ?MessageResult
}
const Results = (props: Props) => {
  const { result = null } = props

  if (!result) {
    return null
  }

  return (
    <Container>
      <RollIcon />
    </Container>
  )
}

export default Results
