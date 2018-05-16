// @flow
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { fontSize, colors } from 'frontend/styles/common'

export const Button = styled.div`
  text-decoration: none;
  height: 4rem;
  width: 4rem;
  text-align: center;
  font-size: ${fontSize.normal};
  cursor: pointer;
  color: ${props => props.theme.colorInverted};

  &:hover {
    background: ${props => props.theme.backgroundInvertedSecondary};
  }
`

export const Menu = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 0.5rem;
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.color};
  border-radius: 5px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  z-index: 999;
`

export const MenuNotch = styled.div`
  background: ${props => props.theme.background};
  transform: rotate(45deg) translateY(-50%);
  position: absolute;
  right: 12px;
  top: 0;
  width: 10px;
  height: 10px;
`

export const MenuItem = styled(Link)`
  display: block;
  min-width: 200px;
  padding: 1rem 1rem;
  line-height: 1;
  color: ${props => props.theme.color};
  font-weight: 600;
  text-decoration: none;
  position: relative;

  &:hover {
    background: ${colors.blue};
    color: ${colors.lightGray};
  }
`
