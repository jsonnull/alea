/* @flow */
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { changeSidebarTab } from 'actions'
import Menu from './Menu'
import Content from './Content'
import type { State } from 'store'
import type { Tab } from 'types'
import { lightGray } from 'styles/colors'
import { header } from 'styles/fonts'

const Container = styled.div`
  background-color: ${props => props.theme.background};
  width: 300px;
  display: flex;
  flex-direction: column;
`

const Top = styled.div`background: ${lightGray};`

const Header = styled.h1`
  font-size: 2.4rem;
  line-height: 4.8rem;
  font-family: ${header};
  padding: 1.2rem 1.8rem 0;
  color: ${props => props.theme.color};
  line-height: 2.4rem;
  margin: 0;
`

type Props = {
  name: string,
  open: boolean,
  tab: Tab
}

class Sidebar extends React.Component<*, Props, *> {
  render() {
    const { name, tab, changeTab } = this.props
    return (
      <Container>
        <Top>
          <Header>{name}</Header>
          <Menu tab={tab} changeTab={changeTab} />
        </Top>
        <Content tab={tab} />
      </Container>
    )
  }
}

const mapStateToProps = (state: State) => {
  return {
    name: state.session.name,
    open: state.sidebar.open,
    tab: state.sidebar.tab
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    changeTab: tab => dispatch(changeSidebarTab(tab))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
