// @flow
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { fontSize } from 'frontend/styles/common'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 4rem;
  line-height: 4rem;
  color: white;
  background-color: ${props => props.theme.backgroundInverted};
`

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: ${props =>
    props.right ? 'flex-end' : props.middle ? 'center' : 'flex-start'};
`

export const Button = styled(Link)`
  text-decoration: none;
  height: 4rem;
  min-width: 4rem;
  padding: 0 1rem;
  text-align: center;
  font-size: ${fontSize.normal};
  cursor: pointer;
  color: ${props => props.theme.colorInverted};

  &:hover {
    background: ${props => props.theme.backgroundInvertedSecondary};
  }
`

export const LogoWrapper = styled.div`
  padding-top: 12px;
  line-height: 1;
`

export const Avatar = styled.img`
  float: right;
  width: 3rem;
  height: 3rem;
  margin: 0.5rem 0 0.5rem 0.8rem;
  border-radius: 3px;
`
