// @flow
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { fonts } from 'frontend/styles/common'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  height: 8rem;
`

export const LogoButton = styled(Link)`
  padding-top: 27px;
  padding-left: 2rem;
  text-decoration: none;
  color: white;
`

export const Button = styled(Link)`
  background-color: white;
  border-radius: 5px;
  height: 4rem;
  line-height: 4rem;
  padding: 0 2rem;
  margin: 2rem;
  margin-left: auto;
  color: ${props => props.theme.backgroundInverted};
  font-family: ${fonts.heading};
  font-weight: 700;
  text-decoration: none;
`
