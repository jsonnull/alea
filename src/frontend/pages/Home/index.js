// @flow
import * as React from 'react'
import FrontHeader from 'frontend/containers/FrontHeader'
import { Background, Hero, Wrapper, Title } from './styles'

const Home = () => {
  return (
    <Background>
      <FrontHeader />
      <Hero>
        <Wrapper>
          <Title>The modern tabletop role-playing app.</Title>
        </Wrapper>
      </Hero>
    </Background>
  )
}

export default Home
