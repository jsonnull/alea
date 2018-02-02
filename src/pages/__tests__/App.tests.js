// @flow
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import { App } from '../App'
import { light } from '../../styles/themes'

describe('App component', () => {
  const renderer = new ShallowRenderer()

  it('renders correctly when loading', () => {
    renderer.render(
      <App appIsLoading showSettings={false} location={{}} theme={light} />
    )
    const tree = renderer.getRenderOutput()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when finished loading', () => {
    renderer.render(
      <App
        appIsLoading={false}
        showSettings={false}
        location={{}}
        theme={light}
      />
    )
    const tree = renderer.getRenderOutput()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when settings should be showing', () => {
    renderer.render(
      <App appIsLoading={false} showSettings location={{}} theme={light} />
    )
    const tree = renderer.getRenderOutput()
    expect(tree).toMatchSnapshot()
  })
})
