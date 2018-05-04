// @flow
import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: 1000px;
  padding: 2rem 2rem;
  margin: 0 auto;
`

export default ({ children }: { children: React.Node }) => (
  <Wrapper>
    <Page>{children}</Page>
  </Wrapper>
)
