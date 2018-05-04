// @flow
import styled from 'styled-components'
import { fontSize, colors } from 'frontend/styles/common'
import InputBase from 'frontend/components/Input'
import ButtonBase from 'frontend/components/Button'

// @flow
export const Wrapper = styled.div`
  width: 300px;
  margin: auto;
  background: ${props => props.theme.background};
  border-radius: 5px;
  padding: 2rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
`

export const Heading = styled.h1`
  text-align: center;
  margin: 0;
  margin-bottom: 2rem;
  padding: 1rem;
  line-height: 0;
`

export const Input = InputBase.extend`
  font-size: ${fontSize.normal};
  padding: 2rem 1rem;
  background: none;
  border: 1px solid ${props => props.theme.borderColor};
  width: 100%;
  margin-bottom: 2rem;
`

export const Button = ButtonBase.extend`
  display: block;
  width: 100%;
  margin-bottom: 2rem;
`

export const Error = styled.div`
  margin-bottom: 2rem;
  color: ${colors.red};
  font-style: italic;
`

export const Forgot = styled.div`
  text-align: center;

  & a,
  & a:link,
  & a:visited {
    color: ${colors.lightBlue};
    text-decoration: none;
  }

  & a:hover {
    color: ${colors.blue};
  }
`
