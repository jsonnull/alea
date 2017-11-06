// @flow
import React from 'react'
import Session from './Session'
import type { Tab } from 'types'

type Props = {
  tab: Tab
}
const Content = (props: Props) => {
  const { tab } = props

  if (tab === 'Session') {
    return <Session />
  }

  return null
}

export default Content
