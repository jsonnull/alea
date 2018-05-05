// @flow
import styled from 'styled-components'
import { fonts, fontSize, colors } from 'frontend/styles/common'

export const Background = styled.div`
  background-color: ${props => props.theme.backgroundInverted};
  color: ${props => props.theme.colorInverted};
`

export const Hero = styled.div`
  display: flex;
  padding: 12rem 0;
`

export const Wrapper = styled.div`
  position: relative;
  width: 1000px;
  margin: 0 auto;
`

export const Title = styled.h2`
  font-family: ${fonts.heading};
  font-size: ${fontSize.huge};
  font-weight: 700;
  margin-top: 1rem;
  color: ${colors.lightGray};
`
