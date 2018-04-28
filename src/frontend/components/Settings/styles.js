// @flow
import styled from 'styled-components'
import { colors } from 'frontend/styles/common'

export const Row = styled.div`
  margin-bottom: 2rem;
`

export const ThemeButtons = styled.div`
  display: flex;
`

export const ThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: ${props => props.theme.map};
  border: 3px solid ${props => (props.selected ? colors.green : colors.gray)};
  width: 200px;
  height: 130px;
  margin-right: 2rem;
`

export const ThemeHeader = styled.div`
  background-color: ${props => props.theme.backgroundInverted};
  height: 15px;
  width: 100%;
`

export const ThemeArea = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`

export const ThemeSidebar = styled.div`
  height: 100%;
  width: 50px;
  border-top: 15px solid ${props => props.theme.backgroundSecondary};
  background: ${props => props.theme.background};
`

export const ThemeChat = styled.div`
  width: 50px;
  height: 42px;
  border-radius: 4px;
  margin: auto 5px 5px auto;
  background-color: ${props => props.theme.background};
  border-top: 5px solid ${props => props.theme.backgroundInverted};
  border-bottom: 3px solid ${props => props.theme.backgroundSecondary};
`
